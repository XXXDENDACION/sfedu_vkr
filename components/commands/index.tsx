import React from "react";
import styles from "./style.module.css";
import { Col, Row } from "antd";
import DashboardCard from "../dashboard-card";

const Commands = (): JSX.Element => {
  const commandsArr = [
    "Отдел №1",
    "Отдел №2",
    "Отдел №3",
    "Отдел №4",
    "Отдел №5",
    "Отдел №6",
  ];
  return (
      <DashboardCard title="Отделы">
          <Row>
              {commandsArr.map((item, index) => (
                  <Col xs={{ span: 12 }} key={index}>
                      <div className={styles.command_card}>{item}</div>
                  </Col>
              ))}
          </Row>
      </DashboardCard>
  );
};

export default Commands;
