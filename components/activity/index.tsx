import React from "react";
import styles from "./style.module.css";
import { Col, Row, Typography } from "antd";

const Activity = () => {
  const activityArr = [
    "Денис Смирнов добавил новый проект",
    "Павел Чуланов присоединился на проекту FoodHub",
    "Андрей Лежебоков оставил комментарий под вашим проектом",
  ];
  return (
    <div className={styles.activity}>
      <div className={styles.activity_header}>
        <Typography.Text className={styles.header_title}>
          Последняя активность
        </Typography.Text>
      </div>
      <div className={styles.activity_content}>
        {activityArr.map((item, index) => (
          <div className={styles.activity_row} key={index}>
            <Typography.Text className={styles.row_title}>
              {item}
            </Typography.Text>
            <Typography.Text className={styles.row_time}>
              7 days ago
            </Typography.Text>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activity;
