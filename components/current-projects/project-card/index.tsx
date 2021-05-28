import styles from "./style.module.css";
import { Typography } from "antd";

const ProjectCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.title_block}>
        <Typography.Text className={styles.title_text}>Alipay</Typography.Text>
      </div>
      <Typography.Text className={styles.card_description}>
        Lorem aliquet est risus pretium, cursus.
      </Typography.Text>
      <div className={styles.time_block}>
        <Typography.Text className={styles.start_text}>
          Ultrices at viverra
        </Typography.Text>
        <Typography.Text className={styles.time_text}>
          7 days ago
        </Typography.Text>
      </div>
    </div>
  );
};

export default ProjectCard;
