import React from "react";
import styles from "./style.module.css";
import * as uiIcons from "../icons/icons";
import { Typography } from "antd";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo_wrapper}>
        <uiIcons.Logo />
        <Typography className={styles.logo_text}>
          Лаборатория интернет-проектов
        </Typography>
      </div>
      <div className={styles.user_wrapper}>
        <Typography.Text className={styles.user_text}>Денис С.</Typography.Text>
      </div>
    </div>
  );
};

export default NavBar;
