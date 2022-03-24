import React, { FunctionComponent, ReactNode } from "react";
import styles from "./style.module.css";
import { Descriptions } from "antd";
import { DescriptionsItemProps } from "antd/lib/descriptions/Item";

const Item = (props: DescriptionsItemProps): JSX.Element => <Descriptions.Item {...props} labelStyle={{ ...props.labelStyle, fontSize: "18px", fontWeight: "bold", color: "red" }}>{props.children}</Descriptions.Item>;

const EmployeeDetails: FunctionComponent = () => {
    return (
        <div className={styles.userDetailsWrapper}>
            <Descriptions title="User Info" layout="vertical">
                <Item label="UserName">Zhou Maomao</Item>
                <Item label="Telephone">1810000000</Item>
                <Item label="Live">Hangzhou, Zhejiang</Item>
                <Item label="Address" span={2}>
                No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                </Item>
                <Item label="Remark">empty</Item>
            </Descriptions>
        </div>
    );
};

export default EmployeeDetails;