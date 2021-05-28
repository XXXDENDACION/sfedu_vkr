import styles from "./style.module.css";
import { Button, Row, Typography, Col } from "antd";
import ProjectCard from "./project-card";

const CurrentProjects = () => {
  return (
    <div className={styles.projects}>
      <div className={styles.header}>
        <Typography.Text className={styles.header_title}>
          Текущие проекты
        </Typography.Text>
        <Button type="link">All projects</Button>
      </div>
      <div className={styles.content}>
        <Row>
          {[0, 1, 2, 3, 4, 5].map((item, index) => (
            <Col lg={{ span: 8 }} md={{ span: 12 }} key={index}>
              <ProjectCard />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default CurrentProjects;
