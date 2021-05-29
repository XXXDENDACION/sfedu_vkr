import { AppProps } from "next/app";
import { Layout } from "antd";
import React, { FunctionComponent } from "react";
import NavBar from "../navbar";
import SideBar from "../sidebar";

export interface LayoutComponentProps {
  children: React.ReactNode;
}

const LayoutComponent: FunctionComponent = (props: LayoutComponentProps) => {
  const { Header, Content, Sider } = Layout;
  const { children } = props;

  return (
    <Layout style={{ height: "100%" }}>
      <Header className="header">
        <NavBar />
      </Header>
      <Layout>
        <Sider width={200} style={{ background: "white" }}>
          <SideBar />
        </Sider>
        <Layout>
          <Content style={{ padding: "27px 24px" }}>{children}</Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;
