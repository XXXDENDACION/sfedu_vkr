import { AppProps } from "next/app";
import "../styles/global.css";
import { Layout } from "antd";
import React from "react";

const App = (props: AppProps): JSX.Element => {
  const { Component, pageProps, router } = props;
  const { Header, Content, Sider } = Layout;

  return <Component key={router.pathname} {...pageProps} />;
};

export default App;
