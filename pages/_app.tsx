import { AppProps } from "next/app";
import "../styles/global.css";
import NavBar from "../components/navbar";
import SideBar from "../components/sidebar";
import { Layout } from "antd";
import React from "react";
React.useLayoutEffect = React.useEffect;

const App = (props: AppProps): JSX.Element => {
  const { Component, pageProps } = props;
  const { Header, Content, Sider } = Layout;

  return (
    <div>
      <Layout style={{ height: "100%" }}>
        <Header className="header">
          <NavBar />
        </Header>
        <Layout>
          <Sider width={200} style={{ background: "white" }}>
            <SideBar />
          </Sider>
          <Layout>
            <Content style={{ padding: "27px 24px" }}>
              <Component {...pageProps} />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
};

export default App;
