import React, { FunctionComponent } from "react";
import styles from "./style.module.css";
import { Descriptions, Card, Tag, Typography, Comment, Avatar, Row, Col } from "antd";
import { DescriptionsItemProps } from "antd/lib/descriptions/Item";
import moment from "moment";
import { usersStore } from "../../../mobx/store/userStore";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";

const { Meta } = Card;
const { Title, Paragraph }= Typography;
const Item = (props: DescriptionsItemProps): JSX.Element => <Descriptions.Item {...props}>{props.children}</Descriptions.Item>;

const labelStyles = { fontSize: "16px", fontWeight: "bold" };

const EmployeeDetails: FunctionComponent = () => {
    const { selectedUser, fullName } = usersStore;
    console.log(toJS(selectedUser));

    return (
        <div className={styles.userDetailsWrapper}>
            <Descriptions title="Информация о пользователе" layout="vertical">
                <Item labelStyle={labelStyles} label="Полное имя">{fullName}</Item>
                <Item labelStyle={labelStyles} label="Телефон">1810000000</Item>
                <Item labelStyle={labelStyles} label="Проживание">Hangzhou, Zhejiang</Item>
                <Item labelStyle={labelStyles} label="Возраст" span={2}>
                {selectedUser?.age}
                </Item>
                <Item labelStyle={labelStyles} label="Отдел">{selectedUser?.department?.name}</Item>
            </Descriptions>
            <div className={styles.skillWrapper}>
                <Title className={styles.projectTitle} level={5}>Скиллы</Title>
                {selectedUser?.skills?.map(item => <Tag color="green" key={`${item.id}-tag`}>{item.skill}</Tag>)}
            </div>
            <div className={styles.userProjectsWrapper}>
                <div className={styles.projectTitle}>
                    <Title className={styles.projectTitle} level={5}>Проекты</Title>
                    <Paragraph>Проекты в которых участвует пользователь</Paragraph>
                </div>
                <div className={styles.projectsList}>
                    <Row gutter={{ sm: 16 }} justify="center">
                        {Array.from(Array(4).keys()).map(item => (
                            <Col key={`${item}-card`} lg={{ span: 6 }}>
                                <Card
                                    hoverable
                                    className={styles.card}
                                    size="small"
                                    cover={<img style={{ objectFit: "contain" }} width={120} height={120} alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                >
                                    <Meta
                                        title="Project #1"
                                        description={<Tag color="blue">In progress</Tag>}
                                    />
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
            <div className={styles.commentsWrapper}>
                <Title className={styles.projectTitle} level={5}>Комментарии</Title>
                <div>
                    <Comment
                        author={<a>Pavel Chulanov</a>}
                        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
                        content={
                            <p>
                                We supply a series of design principles, practical patterns and high quality design
                                resources (Sketch and Axure), to help people create their product prototypes beautifully
                                and efficiently.
                            </p>
                        }
                        datetime={
                            <span>{moment().fromNow()}</span>
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default observer(EmployeeDetails);