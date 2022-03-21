import { AppProps } from "next/app";
import LayoutComponent from "../components/layout";
import "../styles/global.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React from "react";
React.useLayoutEffect = React.useEffect;

const App = (props: AppProps): JSX.Element => {
  const { Component, pageProps, router } = props;

  return (
    <LayoutComponent>
      <Component key={router.pathname} {...pageProps} />
    </LayoutComponent>
  );
};

export default App;
