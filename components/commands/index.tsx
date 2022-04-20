import React from "react";
import styles from "./style.module.css";
import { Col, Row, Skeleton } from "antd";
import DashboardCard from "../dashboard-card";
import type { IDepartment } from "../../utils/interfaces";

type ICommands = {
    isLoading: boolean;
    departments: IDepartment[];
}

const Commands = ({ isLoading, departments }: ICommands): JSX.Element => {
    return (
        <DashboardCard title="Отделы">
            {isLoading ? <Skeleton active title={false} />
            : (
            <Row>
                {departments?.map((item, index) => (
                    <Col xs={{ span: 12 }} key={index}>
                        <div className={styles.command_card}>{item.name}</div>
                    </Col>
                ))}
            </Row>
            )}
        </DashboardCard>
    );
};

export default Commands;
