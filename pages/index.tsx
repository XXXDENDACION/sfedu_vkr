import React, { useEffect } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import { Col, Skeleton, Row, Typography } from "antd";
import CurrentProjects from "../components/current-projects";
import Commands from "../components/commands";
import Activity from "../components/activity";
import PieCard from "../components/pie-card";
import { companyStore } from "../mobx/store/companyStore";
import { observer } from "mobx-react-lite";

const Dashboard = (): JSX.Element => {
  const { getCompanyAsync, company, isLoading } = companyStore;

  useEffect(() => {
    if (!company) {
      getCompanyAsync(1);
    }
  }, [getCompanyAsync, company]);

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
            {isLoading ?  <Skeleton.Input active /> : company?.name}
          </Typography.Text>
        </div>
        <div className={styles.stats_container}>
          <div className={styles.stats}>
            <Typography.Text className={styles.stats_title}>
              Проектов
            </Typography.Text>
            <Typography.Text className={styles.stats_text}>56</Typography.Text>
          </div>
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
          <Col lg={{ span: 12 }}>
            <CurrentProjects />
            <Activity />
          </Col>
          <Col lg={{ span: 12 }}>
            <Commands isLoading={isLoading} departments={company?.departments} />
            <PieCard />
            {/*<AwardsCard />*/}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default observer(Dashboard);
