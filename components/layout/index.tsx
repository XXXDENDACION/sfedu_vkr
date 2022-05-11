import { Layout } from "antd";
import React, { FunctionComponent, useContext, useEffect, useState } from "react";
import NavBar from "../navbar";
import SideBar from "../sidebar";
import { Grid } from "antd";
import styles from "./style.module.css";
import { Context } from "../../pages/_app";
import { observer } from "mobx-react-lite";

const { useBreakpoint } = Grid;

export interface LayoutComponentProps {
  children: React.ReactNode;
}

const LayoutComponent: FunctionComponent = (props: LayoutComponentProps) => {
  const { Header, Content, Sider } = Layout;
  const { children } = props;
  const [collapse, setCollapse] = useState<boolean>(false);
  const screens = useBreakpoint();
  const auth = useContext(Context);

  useEffect(() => {
    !screens.xl ? setCollapse(true) : setCollapse(false);
  }, [screens]);

  return (
    <>
      { auth.store.isAuth ? (
        <Layout style={{ height: "100%" }}>
          {/*<Header className="header">*/}
          {/*  <NavBar />*/}
          {/*</Header>*/}
          <Layout>
            <Sider
              width={200}
              collapsed={collapse ? collapse : false}
              collapsedWidth={50}
              onBreakpoint={(value) => console.log(value)}
              style={{ background: "white" }}
            >
              <SideBar collapse={collapse} />
            </Sider>
            <Layout>
              <Content className={styles.content}>{children}</Content>
            </Layout>
          </Layout>
        </Layout>
        ) : (
          <div>
            {children}
          </div>
        )
      }
    </>
  );
};

export default observer(LayoutComponent);
