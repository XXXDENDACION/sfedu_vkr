import { AppProps } from "next/app";
import { enableStaticRendering } from "mobx-react-lite";
import React from "react";
import LayoutComponent from "../components/layout";
import "../styles/global.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { spy } from "mobx";
import Auth from "./auth";
React.useLayoutEffect = React.useEffect;

const isServer = typeof window === "undefined";
enableStaticRendering(isServer);

spy((ev) => {
  if (ev.type.includes("actions")) {
    console.log(ev);
  }
});

const App = (props: AppProps): JSX.Element => {
  const { Component, pageProps, router } = props;

  return (
    <LayoutComponent>
      <Auth>
        <Component key={router.pathname} {...pageProps} />
      </Auth>
    </LayoutComponent>
  );
};

export default App;
