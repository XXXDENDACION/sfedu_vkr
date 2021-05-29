import React from "react";
import styles from "./style.module.css";
import { Col, Row, Typography } from "antd";

const Commands = () => {
  const commandsArr = [
    "Arcu volutpat",
    "Arcu volutpat",
    "Arcu volutpat",
    "Arcu volutpat",
    "Arcu volutpat",
    "Arcu volutpat",
  ];
  return (
    <div className={styles.commands}>
      <div className={styles.commands_header}>
        <Typography.Text className={styles.header_title}>
          Команды
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
