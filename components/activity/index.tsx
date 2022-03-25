import React from "react";
import styles from "./style.module.css";
import { Typography } from "antd";
import DashboardCard from "../dashboard-card";

const Activity = () => {
  const activityArr = [
    "Денис Смирнов добавил новый проект",
    "Павел Чуланов присоединился на проекту FoodHub",
    "Андрей Лежебоков оставил комментарий под вашим проектом",
    "Павел Чуланов присоединился на проекту FoodHub",
    "Павел Чуланов присоединился на проекту FoodHub",
  ];
  return (
      <DashboardCard className={styles.activity_card} title="Последняя активность">
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
      </DashboardCard>
  );
};

export default Activity;
