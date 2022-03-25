import React, { FunctionComponent } from "react";
import { useRouter } from "next/router";
import styles from "./style.module.css";
import {Table, Tag, PageHeader, Button, Row, Col, Typography} from "antd";
import EmployeeDetails from "../../components/employees/employee-details";

const { Paragraph } = Typography;

interface IContent {
    children: React.ReactNode;
    extraContent: React.ReactNode;
}

interface IEmployee {
    title: string;
    subTitle: string;
    avatar?: string;
}

const Employee: FunctionComponent = () => {
    const router = useRouter();
    console.log(router);
    return (
        <div>
            <PageHeader
                title="Denis Smirnov"
                className={styles.pageHeader}
                subTitle="This is a subtitle"
                tags={<Tag color="blue">In Project</Tag>}
                extra={[
                    <div key="buttons">
                        <Button key="3">Operation</Button>,
                        <Button key="2">Operation</Button>,
                        <Button key="1" type="primary">
                            Primary
                        </Button>,
                    </div>
                ]}
                onBack={() => window.history.back()}
                // avatar={{ src: "https://avatars1.githubusercontent.com/u/8186664?s=460&v=4" }}
                // breadcrumb={{ routes }}
            >
                <HeaderContent
                    extraContent={
                        <img
                            src="https://gw.alipayobjects.com/zos/antfincdn/K%24NnlsB%26hz/pageHeader.svg"
                            alt="content"
                            width="100%"
                        />
                    }
                >
                    <Content/>
                </HeaderContent>
            </PageHeader>
            <EmployeeDetails />
        </div>
    );
};


function HeaderContent({ children, extraContent }: IContent): JSX.Element {
    return (
        <Row>
            <div style={{ flex: 1, marginRight: "30px" }}>{children}</div>
            <div className="image">{extraContent}</div>
        </Row>
    );
}

function IconLink({ src, text }: {src: string; text: string}): JSX.Element {
    return (
        <Button type="link" className={styles.link}>
            <img className={styles.linkIcon} src={src} alt={text} />
            {text}
        </Button>
    );
}

function Content(): JSX.Element {
    return (
        <>
            <Paragraph>
                Ant Design&#x27;s design team preferred to design with the HSB color model, which makes it
                easier for designers to have a clear psychological expectation of color when adjusting colors,
                as well as facilitate communication in teams.
            </Paragraph>
            <Row className={styles.linkList}>
               <Col xs={{ span: 24 }} sm={{ span: 8 }}>
                   <IconLink
                    src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg"
                    text="Telegram"
               />
               </Col>
                <Col xs={{ span: 24 }} sm={{ span: 8 }}>
                    <IconLink
                        src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg"
                        text="HH.ru"
                    />
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 8 }}>
                    <IconLink
                        src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg"
                        text="Export resume"
                    />
                </Col>
            </Row>
        </>
    );
}

export default Employee;