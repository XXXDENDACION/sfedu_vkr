import React from "react";
import "antd/dist/antd.css";
import styles from "./style.module.css";
import {Table, Tag, PageHeader, Button, Statistic, Select, Typography} from "antd";
import { UsersList} from "../../utils/data/data";
import { IUser } from "../../utils/interfaces/users";
import { useRouter } from "next/router";
import {ColumnsType} from "antd/lib/table/interface";

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

const Employees = () => {
    const router = useRouter();

    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: IUser[]) => {
          console.log(`selectedRowKeys: ${selectedRowKeys}`, "selectedRows: ", selectedRows);
        },
        getCheckboxProps: (record: IUser) => ({
          name: record.firstName,
        }),
    };

    return (
        <div>
            <PageHeader
                className={styles.pageHeader}
                title="Сотрудники"
                extra={[
                    <>
                        <Button key="withoutProject">Без проекта</Button>
                        <Button key="edit" type="primary" danger disabled>Изменить</Button>
                    </>
                ]}
            >
                <HeaderContent />
            </PageHeader>
            <Table
                dataSource={UsersList}
                columns={Columns}
                rowSelection={{
                    type: "checkbox",
                    ...rowSelection
                }}
                onRow={(record: IUser) => {
                    console.log(record);
                    return {
                        onClick: () => router.push(`/employees/${record.key}`)
                    };
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

function HeaderContent(): JSX.Element {
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
                    >
                        {Array.from(Array(10).keys()).map((item, idx) => <Option key={"role" + idx} value={item}>{item}</Option>)}
                    </Select>
                    <Select
                        showSearch
                        placeholder="Choose department"
                        optionFilterProp="children"
                        className={styles.select}
                    >
                        {Array.from(Array(10).keys()).map((item, idx) => <Option key={"department" + idx} value={item}>{item}</Option>)}
                    </Select>
                    <Select
                        showSearch
                        placeholder="Choose skills"
                        optionFilterProp="children"
                        className={styles.select}
                    >
                        {Array.from(Array(10).keys()).map((item, idx) => <Option key={"skill" + idx} value={item}>{item}</Option>)}
                    </Select>
                </div>
            </div>
            <div>
                <Statistic title="Количество" value={10} />
            </div>
        </div>
    );
}

function renderTags(items: string[]): JSX.Element {
    return (
        <>
            {items?.map((item, idx) => (
                <Tag color="blue" key={`${item} + ${idx}`}>
                    {item}
                </Tag>
            ))}
        </>
    );
}

export default Employees;