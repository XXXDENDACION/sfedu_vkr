import styles from "./style.module.css";
import { Button, Row, Typography, Col } from "antd";
import ProjectCard from "./project-card";
import { useRouter } from "next/router";

const CurrentProjects = () => {
  const router = useRouter();

  const handleRoute = () => {
    router.push("/all-project");
  };

  return (
    <div className={styles.projects}>
      <div className={styles.header}>
        <Typography.Text className={styles.header_title}>
          Текущие проекты
        </Typography.Text>
        <Button type="link" onClick={handleRoute}>
          All projects
        </Button>
      </div>
      <div className={styles.content}>
        <Row>
          {[0, 1, 2, 3, 4, 5].map((item, index) => (
            <Col
              lg={{ span: 8 }}
              md={{ span: 12 }}
              sm={{ span: 12 }}
              xs={{ span: 24 }}
              key={index}
            >
              <ProjectCard />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default CurrentProjects;
