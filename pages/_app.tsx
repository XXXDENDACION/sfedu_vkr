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
    <div style={{ height: "100vh" }}>
      <Layout>
        <Header className="header">
          <NavBar />
        </Header>
        <Layout>
          <Sider width={200} style={{ background: "white", height: "100%" }}>
            <SideBar />
          </Sider>
          <Layout>
            <Content>
              <Component {...pageProps} />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
};

export default App;
