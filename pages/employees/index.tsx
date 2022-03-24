import React from "react";
import "antd/dist/antd.css";
import styles from "./style.module.css";
import {Table, Tag, PageHeader, Button, Statistic} from "antd";
import {UsersList} from "./data";

const {Column} = Table;

const Employees = () => {
    return (
        <div>
            <PageHeader
                className="site-page-header-responsive"
                title="Сотрудники"
                extra={[
                    <Button key="edit" type="primary">Edit</Button>
                ]}
            >
                <HeaderContent />
            </PageHeader>
            <Table dataSource={UsersList}>
                <Column title="First Name" dataIndex="firstName" key="firstName" />
                <Column title="Last Name" dataIndex="lastName" key="lastName" />
                <Column title="Age" dataIndex="age" key="age" />
                <Column title="Position" dataIndex="position" key="position" />
                <Column title="Skills" dataIndex="skills" key="skills" render={skills => renderTags(skills)}/>
            </Table>
        </div>
    );
};

function HeaderContent(): JSX.Element {
    return (
        <div className={styles.content}>
            <div>

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