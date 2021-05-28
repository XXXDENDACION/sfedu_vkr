import { AppProps } from "next/app";
import "../styles/global.css";
import NavBar from "../components/navbar";
import React from "react";
import SideBar from "../components/sidebar";

const App = (props: AppProps): JSX.Element => {
  const { Component, pageProps } = props;

  return (
    <div className="page-wrapper">
      <NavBar />
      <div className="content-wrapper">
        <SideBar />
        <Component {...pageProps} />
      </div>
    </div>
  );
};

export default App;
