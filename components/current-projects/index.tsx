import DashboardCard from "../dashboard-card";
import styles from "./style.module.css";
import { Row, Col } from "antd";
import ProjectCard from "./project-card";
import { useRouter } from "next/router";

const CurrentProjects: React.FunctionComponent = () => {
  const router = useRouter();

  const handleRoute = (): void => {
    router.push("/all-project");
  };

  return (
      <DashboardCard bodyClassName={styles.current_projects} title="Текущие проекты" button="Все проекты" buttonClick={handleRoute}>
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
      </DashboardCard>
  );
};

export default CurrentProjects;
