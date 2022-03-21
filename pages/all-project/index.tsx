import React, { useState } from "react";
import styles from "./style.module.css";
import { Avatar, Button, Card, Col, Row, Tooltip, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
const { Meta } = Card;

const tabList = [
  {
    key: "tab1",
    tab: "Мои проекты",
  },
  {
    key: "tab2",
    tab: "Текущие проекты",
  },
];

const AllProjects = () => {
  const router = useRouter();

  const handleRoute = () => {
    router.push("/create-project");
  };
  const [selectedTab, setSelectedTab] = useState("tab1");

  return (
    <>
      <Card
        style={{ width: "100%" }}
        title="Список проектов"
        extra={
          <Button type="primary" onClick={handleRoute}>
            Создать проект
          </Button>
        }
        activeTabKey={selectedTab}
        tabList={tabList}
        onTabChange={(key) => setSelectedTab(key)}
        bodyStyle={{ padding: "0" }}
      />
      <div className={styles.wrapper}>
        <Row gutter={{ xl: 16, md: 6 }} justify={"space-between"}>
          {[0, 1, 2, 3, 4, 5, 6, 7].map((item) => (
            <Col
              xs={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 8 }}
              xl={{ span: 6 }}
              key={item}
            >
              <div className={styles.item_card}>
                <Card
                  onClick={() => router.push("/project-page")}
                  cover={
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                  }
                  hoverable
                  className={styles.project_card}
                >
                  <Meta
                    title="Card title"
                    description="This is the description"
                  ></Meta>
                  <div className={styles.card_content}>
                    <Typography.Text className={styles.card_time}>
                      Just Now
                    </Typography.Text>
                    <Avatar.Group maxCount={3}>
                      <Tooltip title="Ant User" placement="top">
                        <Avatar
                          style={{
                            backgroundColor: "#87d068",
                          }}
                          icon={<UserOutlined />}
                        />
                      </Tooltip>
                      <Tooltip title="Ant User" placement="top">
                        <Avatar
                          style={{
                            backgroundColor: "#87d068",
                          }}
                          icon={<UserOutlined />}
                        />
                      </Tooltip>
                      <Tooltip title="Ant User" placement="top">
                        <Avatar
                          style={{
                            backgroundColor: "#87d068",
                          }}
                          icon={<UserOutlined />}
                        />
                      </Tooltip>
                    </Avatar.Group>
                  </div>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </div>
      </>
  );
};

export default AllProjects;
