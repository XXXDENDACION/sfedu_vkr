import LayoutComponent from "../../components/layout";
import { Avatar, Card, Col, Rate, Row, Tooltip, Typography } from "antd";
import styles from "./style.module.css";
import React from "react";
import { UserOutlined } from "@ant-design/icons";

const AwardsPage = () => {
  return (
    <LayoutComponent>
      <Card
        className={styles.card_title}
        title="Награды"
        headStyle={{ fontSize: "20px", lineHeight: "28px", fontWeight: 600 }}
        bodyStyle={{ padding: "0px" }}
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
                <Card cover={<img alt="example" src="/static/krujka.png" />}>
                  <Card.Meta title="Кружка" description="350мл"></Card.Meta>
                  <div className={styles.card_content}>
                    <Rate count={1} value={1} style={{ marginRight: "6px" }} />
                    x10
                  </div>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </LayoutComponent>
  );
};

export default AwardsPage;
