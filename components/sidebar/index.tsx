import React, { useState } from "react";
import styles from "./style.module.css";
import Link from "next/link";
import { Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import { Badge, Button, Drawer } from "antd";
import { NotificationOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;

type ISideBar = {
  collapse: boolean;
}

const SideBar = ({ collapse }: ISideBar): JSX.Element => {
  const router = useRouter();
  const [visible, setVisible] = useState(false);

  return (
    <div className={styles.sidebar}>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        activeKey={router.asPath}
        selectedKeys={[router.asPath]}
      >
        <SubMenu key="sub1" icon={<MenuOutlined />} title="Главное меню">
          <Menu.Item key="/">
            <Link href={{ pathname: "/" }}>Главная</Link>
          </Menu.Item>
          <Menu.Item key="/employees">
            <Link href={{ pathname: "/employees" }}>Сотрудники</Link>
          </Menu.Item>
          <Menu.Item key="/all-project">
            <Link href={{ pathname: "/all-project" }}>Проекты</Link>
          </Menu.Item>
          <Menu.Item key="/calendar">
            <Link href={{ pathname: "/calendar" }}>Календарь</Link>
          </Menu.Item>
          <Menu.Item key="/chat">
            <Link href={{ pathname: "/chat" }}>Чаты</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
      <Button type="link" color="black" onClick={() => setVisible(true)}>
        <div style={{ display: "flex", marginLeft: "6px" }}>
          <div style={{ marginRight: "10px" }}>
            <Badge dot>
              <NotificationOutlined style={{ fontSize: 16 }} />
            </Badge>
          </div>
          {!collapse && "Уведомления"}
        </div>
      </Button>
      <Drawer title="Уведомления" placement="right" onClose={() => setVisible(false)} visible={visible}>
        <p>Павел Чуланов присоединился к команде</p>
        <p>Команда Frontend закончила проект</p>
        <p>Алексей Иванов присоединился к проекту Food Hub</p>
      </Drawer>
    </div>
  );
};

export default SideBar;
