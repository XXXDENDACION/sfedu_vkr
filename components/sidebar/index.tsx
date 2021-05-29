import React from "react";
import styles from "./style.module.css";
import Link from "next/link";
import { Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

const { SubMenu } = Menu;

const SideBar = () => {
  const router = useRouter();

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
          <Menu.Item key="2">Новости</Menu.Item>
          <Menu.Item key="/all-project">
            <Link href={{ pathname: "/all-project" }}>Проекты</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default SideBar;
