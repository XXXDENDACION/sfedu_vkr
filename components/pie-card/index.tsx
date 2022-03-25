import React from "react";
import styles from "./style.module.css";
import { Pie } from "@ant-design/plots";
import {config} from "./config-pie";
import DashboardCard from "../dashboard-card";

const PieCard = (): JSX.Element => {
    const data = [
        {
            type: "FrontEnd",
            value: 27,
        },
        {
            type: "BackEnd",
            value: 25,
        },
        {
            type: "Analytics",
            value: 18,
        },
        {
            type: "Other",
            value: 30,
        },
    ];
    return (
        <DashboardCard className={styles.pie_card} title="Статистика">
            <Pie {...config} data={data}/>
        </DashboardCard>
    );
};

export default PieCard;
