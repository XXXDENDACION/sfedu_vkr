import React from "react";
import styles from "./style.module.css";
import Image from "next/image";
import { Col, Row, Typography } from "antd";
import CurrentProjects from "../components/current-projects";
import Commands from "../components/commands";
import Activity from "../components/activity";

const Dashboard = () => {
  return (
    <div>
      <div className={styles.dashboard_header}>
        <div className={styles.user_container}>
          <Image
            src="/dashboard-header.png"
            alt="dashboard-header"
            width={72}
            height={72}
          />
          <Typography.Text className={styles.title_text}>
            Доброе утро, Денис Смирнов
          </Typography.Text>
        </div>
        <div className={styles.stats_container}>
          <div className={styles.stats}>
            <Typography.Text className={styles.stats_title}>
              Projects
            </Typography.Text>
            <Typography.Text className={styles.stats_text}>56</Typography.Text>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.stats}>
            <Typography.Text className={styles.stats_title}>
              Team Ranking
            </Typography.Text>
            <Typography.Text className={styles.stats_text}>
              8/24
            </Typography.Text>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.stats}>
            <Typography.Text className={styles.stats_title}>
              Project Visits
            </Typography.Text>
            <Typography.Text className={styles.stats_text}>
              2,233
            </Typography.Text>
          </div>
        </div>
      </div>
      <div className={styles.dashboard_content}>
        <Row gutter={{ lg: 32 }}>
          <Col lg={{ span: 16 }}>
            <CurrentProjects />
            <Activity />
          </Col>
          <Col lg={{ span: 8 }}>
            <Commands />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Dashboard;
