import React from "react";
import styles from "./style.module.css";
import { Button, Card, Col, Rate, Row, Typography } from "antd";
import { useRouter } from "next/router";

const AwardsCard = () => {
  const router = useRouter();
  return (
    <div style={{ marginTop: "32px" }}>
      <Card title="Награды" bodyStyle={{ padding: "10px 43px" }}>
        <Row justify="space-between" gutter={{ md: 30 }}>
          {[0, 1, 2, 3].map((item) => (
            <Col key={item} xs={{ span: 24 }} md={{ span: 12 }}>
              <Card
                style={{
                  marginBottom: "40px",
                }}
                cover={<img alt="example" src="/static/krujka.png" />}
                bodyStyle={{ padding: "6px 12px" }}
              >
                <Card.Meta
                  title={
                    <Typography style={{ marginTop: "8px" }}>
                      Кружка{" "}
                    </Typography>
                  }
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                  }}
                >
                  <Rate count={1} value={1} />
                  x5
                </div>
              </Card>
            </Col>
          ))}
        </Row>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            type="link"
            name="Посмотреть все"
            onClick={() => {
              router.push("awards-page");
            }}
          >
            Посмотреть все{" "}
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default AwardsCard;
