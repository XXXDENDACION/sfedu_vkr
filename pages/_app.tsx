import { AppProps } from "next/app";
import "../styles/global.css";
import React from "react";
React.useLayoutEffect = React.useEffect;

const App = (props: AppProps): JSX.Element => {
  const { Component, pageProps, router } = props;

  return <Component key={router.pathname} {...pageProps} />;
};

export default App;
