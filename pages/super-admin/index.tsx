import { Button, Card, Space, Table, Tag } from "antd";
import LayoutComponent from "../../components/layout";
import React, { useState } from "react";
import styles from "./style.module.css";

const tabList = [
  {
    key: "tab1",
    tab: "Проекты",
  },
  {
    key: "tab2",
    tab: "Пользователи",
  },
];

const columns = [
  {
    title: "Фамилия",
    dataIndex: "secondName",
    key: "secondName",
    // eslint-disable-next-line react/display-name
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Имя",
    dataIndex: "firstName",
    key: "firstName",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Роль",
    dataIndex: "role",
    key: "role",
  },
  {
    title: "Статус",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Action",
    key: "action",
    // eslint-disable-next-line react/display-name
    render: (text, record) => (
      <Space size="middle">
        <Button type="link">Принять {record.name}</Button>
        <Button type="link">Отклонить</Button>
      </Space>
    ),
  },
];

const dataTable = [
  {
    key: "1",
    firstName: "John",
    secondName: "Brown",
    email: "test@test.ru",
    role: "Дизайнер",
    status: "Учащийся",
  },
  {
    key: "2",
    firstName: "John",
    secondName: "Brown",
    email: "test@test.ru",
    role: "Дизайнер",
    status: "Учащийся",
  },
  {
    key: "3",
    firstName: "John",
    secondName: "Brown",
    email: "test@test.ru",
    role: "Дизайнер",
    status: "Учащийся",
  },
];

const SuperAdminPage = () => {
  const [selectedTab, setSelectedTab] = useState("tab1");
  return (
    <LayoutComponent>
      <Card
        style={{ width: "100%" }}
        title="Список проектов"
        activeTabKey={selectedTab}
        tabList={tabList}
        onTabChange={(key) => setSelectedTab(key)}
        bodyStyle={{ padding: "0" }}
      />
      <div className={styles.wrapper}>
        <Card title="Список пользователей">
          <Table columns={columns} dataSource={dataTable} />
        </Card>
      </div>
    </LayoutComponent>
  );
};

export default SuperAdminPage;
