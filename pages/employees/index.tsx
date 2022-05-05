import React, { useEffect } from "react";
import "antd/dist/antd.css";
import styles from "./style.module.css";
import {Table, Tag, PageHeader, Button, Statistic, Select, Typography, Skeleton, Empty} from "antd";
import { CloseOutlined } from "@ant-design/icons";
import type { ITableUser, IUser, IUserFilters } from "../../utils/interfaces";
import { useRouter } from "next/router";
import type { ColumnsType } from "antd/lib/table/interface";
import { usersStore } from "../../mobx/store/userStore";
import { observer } from "mobx-react-lite";
import {IUserSelectedFilters} from "../../utils/interfaces";

const { Option } = Select;
const { Column } = Table;

export const Columns: ColumnsType = [
    {
        title: "Имя",
        dataIndex: "firstName",
        key: "firstName",
        responsive: ["md"]
    },
    {
        title: "Фамилия",
        dataIndex: "lastName",
        key: "lastName",
    },
    {
        title: "Возраст",
        dataIndex: "age",
        key: "age",
        responsive: ["md"]
    },
    {
        title: "Должность",
        dataIndex: "position",
        key: "position",
    },
    {
        title: "Скиллы",
        dataIndex: "skills",
        key: "skills",
        responsive: ["md"],
        render: skills => renderTags(skills)
    }
];

type IHeaderContent = {
    filters: IUserFilters;
    selectedFilters: IUserSelectedFilters;
    onSelectFilter: (type: string, value: number) => void;
    isFiltered: boolean;
    clearFilters: () => void;
    totalUsers: number;
}

const Employees = (): JSX.Element => {
    const { filters, users, isLoading, tableUsers, selectedFilters, onSelectFilter, clearFilters, handleSelectUserId } = usersStore;
    const router = useRouter();

    const rowSelection = {
        getCheckboxProps: (record: IUser) => ({
          name: record.firstName,
        }),
    };

    const dataTable = isLoading ? [] : tableUsers;
    return (
        <div>
            <PageHeader
                className={styles.pageHeader}
                title="Сотрудники"
                extra={[
                    <React.Fragment key="employee-header">
                        <Button key="withoutProject">Без проекта</Button>
                        <Button key="edit" type="primary" danger disabled>Изменить</Button>
                    </React.Fragment>
                ]}
            >
                <HeaderContent 
                    filters={{ departments: filters?.departments, roles: filters?.roles, skills: filters?.skills }}
                    onSelectFilter={onSelectFilter}
                    isFiltered={!!selectedFilters.departments || !!selectedFilters.skills || !!selectedFilters.roles}
                    clearFilters={clearFilters}
                    selectedFilters={selectedFilters}
                    totalUsers={users?.length}
                />
            </PageHeader>
            <Table
                dataSource={dataTable}
                columns={Columns}
                rowSelection={{
                    type: "checkbox",
                    ...rowSelection
                }}
                onRow={(record: ITableUser) => {
                    return {
                        onClick: () => {
                            router.push(`/employees/${record.key}`);
                            handleSelectUserId(record.key);
                        }
                    };
                }}
                locale={{
                    emptyText: isLoading ? <Skeleton active /> : <Empty />
                }}
            >
                <Column title="Имя" dataIndex="firstName" key="firstName" />
                <Column title="Фамилия" dataIndex="lastName" key="lastName" />
                <Column title="Возраст" dataIndex="age" key="age" />
                <Column title="Должность" dataIndex="position" key="position" />
                <Column title="Скиллы" dataIndex="skills" key="skills" render={skills => renderTags(skills)}/>
            </Table>
        </div>
    );
};

function HeaderContent({ filters, selectedFilters, onSelectFilter, isFiltered = false, clearFilters, totalUsers }: IHeaderContent): JSX.Element {
    return (
        <div className={styles.content}>
            <div>
                <Typography.Title level={5}>Фильтры</Typography.Title>
                <div className={styles.filterWrapper}>
                    <Select
                        showSearch
                        placeholder="Choose role"
                        optionFilterProp="children"
                        className={styles.select}
                        value={selectedFilters.roles}
                        onChange={(value) => onSelectFilter("roles", value)}
                    >
                        {filters?.roles?.map((item => <Option key={"role" + item.id} value={item.id}>{item.role}</Option>))}
                    </Select>
                    <Select
                        showSearch
                        placeholder="Choose department"
                        optionFilterProp="children"
                        className={styles.select}
                        value={selectedFilters.departments}
                        onChange={value => onSelectFilter("departments", value)}
                    >
                        {filters?.departments?.map(item => <Option key={"department" + item.id} value={item.id}>{item.name}</Option>)}
                    </Select>
                    <Select
                        showSearch
                        placeholder="Choose skills"
                        optionFilterProp="children"
                        className={styles.select}
                        value={selectedFilters.skills}
                        onChange={value => onSelectFilter("skills", value)}
                    >
                        {filters?.skills?.map(item => <Option key={"skill" + item.id} value={item.id}>{item.skill}</Option>)}
                    </Select>
                    {isFiltered && <Button onClick={clearFilters} type="text" icon={<CloseOutlined />} />}
                </div>
            </div>
            <div>
                <Statistic title="Количество" value={totalUsers} />
            </div>
        </div>
    );
}

function renderTags(items: {skill: string, id: number }[] ): JSX.Element {
    return (
        <>
            {items?.map((item, idx) => (
                <Tag color="blue" key={`${item} + ${idx}`}>
                    {item.skill}
                </Tag>
            ))}
        </>
    );
}

export default observer(Employees);