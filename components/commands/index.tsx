import React from "react";
import styles from "./style.module.css";
import { Col, Row, Typography } from "antd";

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
    <div className={styles.commands}>
      <div className={styles.commands_header}>
        <Typography.Text className={styles.header_title}>
          Отделы
        </Typography.Text>
      </div>
      <div className={styles.commands_content}>
        <Row>
          {commandsArr.map((item, index) => (
            <Col xs={{ span: 12 }} key={index}>
              <div className={styles.command_card}>{item}</div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Commands;
