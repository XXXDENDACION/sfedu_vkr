import React, { useEffect } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import { Col, Rate, Row, Typography } from "antd";
import CurrentProjects from "../components/current-projects";
import Commands from "../components/commands";
import Activity from "../components/activity";
import AwardsCard from "../components/awards-card";

const Dashboard = (): JSX.Element => {
  return (
    <>
      <div className={styles.dashboard_header}>
        <div className={styles.user_container}>
          <Image
            src="/static/dashboard-header.png"
            alt="dashboard-header"
            width={72}
            height={72}
          />
          <Typography.Text className={styles.title_text}>
            ITP Premium
          </Typography.Text>
        </div>
        <div className={styles.stats_container}>
          <div className={styles.stats}>
            <Typography.Text className={styles.stats_title}>
              Проектов
            </Typography.Text>
            <Typography.Text className={styles.stats_text}>56</Typography.Text>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.stats}>
            {/*<Typography.Text className={styles.stats_title}>*/}
            {/*  Текущий рейтинг*/}
            {/*</Typography.Text>*/}
            <div className={styles.rate}>
              {/*<Typography.Text className={styles.stats_text}>8</Typography.Text>*/}
              {/*<Rate count={1} value={1} style={{ marginLeft: "8px" }} />*/}
            </div>
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
            {/*<AwardsCard />*/}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Dashboard;
