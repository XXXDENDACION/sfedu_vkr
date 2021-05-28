import React from "react";
import styles from "./style.module.css";
import { Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
      >
        <SubMenu key="sub1" icon={<MenuOutlined />} title="Главное меню">
          <Menu.Item key="1">Главная</Menu.Item>
          <Menu.Item key="2">Новости</Menu.Item>
          <Menu.Item key="3">Проекты</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default SideBar;
