import styles from "./style.module.css";
import { Button, Card, Col, Input, Rate, Row, Typography } from "antd";
import Image from "next/image";
import LayoutComponent from "../../components/layout";
import React from "react";

const ProjectPage = () => {
  return (
    <LayoutComponent>
      <Card
        className={styles.card_title}
        title="Food Hub"
        headStyle={{ fontSize: "20px", lineHeight: "28px", fontWeight: 600 }}
        bodyStyle={{ padding: "0px" }}
      />
      <div className={styles.wrapper}>
        <div className={styles.content_block}>
          <Row gutter={{ lg: 24 }}>
            <Col md={{ span: 24 }} lg={{ span: 10 }}>
              <div className={styles.image_container}>
                <Image
                  src="/static/project-page.png"
                  alt="current-project"
                  height={350}
                  width={530}
                />
              </div>
            </Col>
            <Col md={{ span: 24 }} lg={{ span: 14 }}>
              <Typography className={styles.title_text}>
                Создание веб приложения с использованием технологий React,
                NodeJS, PostgreSQL
              </Typography>
              <Typography.Text className={styles.card_description}>
                Мы разрабатываем систему для учета взаимоотношений с клиентами
                для точек общественного питания: кафе, столовые итп. На рынке
                огромное количество подобных систем, но ключевая особенность
                нашей: на основе заказов клиента, система будет строить профиль
                предпочтений и интересов, сегментировать клиентов (любители
                здоровой пищи, веганы, молодые родители, тусовщики,
                корпоративный рабочий). Для чего это нужно? Анализируя клиентов,
                наша система будет понимать что предложить конкретному клиенту и
                в какое время это лучше сделать. В планах разработка мобильного
                приложения для курьеров, и веб интерфейса для оператора и
                кассира.
              </Typography.Text>
              <div className={styles.request_container}>
                <Button
                  className={styles.make_request}
                  type="primary"
                  htmlType="submit"
                >
                  Подать заявку
                </Button>
                <Rate value={3} />
              </div>
            </Col>
          </Row>
        </div>
        <Row>
          <Col md={{ span: 24 }} lg={{ span: 16 }}>
            <Input.TextArea
              className={styles.textarea}
              rows={3}
              name="comment"
              placeholder="Что думаете?"
            />
            <Button type="primary" htmlType="submit">
              Добавить комментарий
            </Button>
          </Col>
        </Row>
      </div>
    </LayoutComponent>
  );
};

export default ProjectPage;
