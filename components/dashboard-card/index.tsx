import React from "react";
import styles from "./style.module.css";
import cn from "classnames";
import {Button, Typography} from "antd";

interface IDashboardCard {
    children: React.ReactNode;
    title: string;
    button?: string;
    buttonClick?: () => void;
    className?: string;
    bodyClassName?: string;
}

const DashboardCard = ({children, title, button, buttonClick, className, bodyClassName}: IDashboardCard): JSX.Element => {
    return (
        <div className={cn(styles.dashboard_card, className)}>
            <div className={styles.dashboard_card__header}>
                <Typography.Text className={styles.header_title}>
                    {title}
                </Typography.Text>
                {button && <Button type="link" onClick={buttonClick}>
                    {button}
                </Button>}
            </div>
            <div className={cn(styles.dashboard_card__content, bodyClassName)}>
                {children}
            </div>
        </div>
    );
};

export default DashboardCard;
