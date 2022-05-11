import { AppProps } from "next/app";
import { enableStaticRendering, observer } from "mobx-react-lite";
import React, { createContext, useContext, useEffect, useState } from "react";
import LayoutComponent from "../components/layout";
import "../styles/global.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { spy } from "mobx";
import MainDataLayer from "./MainDataLayer";
import { AuthStore, authStore } from "../mobx/store/authStore";
import AuthLayer from "./AuthLayer";
import GuardRoute from "./GuardRoute";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

React.useLayoutEffect = React.useEffect;

const firebaseConfig = {
  apiKey: "AIzaSyCH0j9JFAjdRjGtBv_nE7nNZOZ-FJrG5qk",
  authDomain: "sfedu-vkr-chat.firebaseapp.com",
  projectId: "sfedu-vkr-chat",
  storageBucket: "sfedu-vkr-chat.appspot.com",
  messagingSenderId: "810809963722",
  appId: "1:810809963722:web:2d0b4c5f440fe908beb033",
  measurementId: "G-9KP4YHC7XN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const isServer = typeof window === "undefined";
enableStaticRendering(isServer);

spy((ev) => {
  if (ev.type.includes("actions")) {
    console.log(ev);
  }
});

export const ChatContext = createContext(null);

export const Context = createContext<AuthStore>({
    store: authStore,
});

const App = (props: AppProps): JSX.Element => {
  const { Component, pageProps, router } = props;

  return (
    <Context.Provider value={{
      store: authStore
    }}>
      <ChatContext.Provider value={{db, app}}>
        <AuthLayer>
          <MainDataLayer>
            <LayoutComponent>
              <GuardRoute>
                <Component key={router.pathname} {...pageProps} />
              </GuardRoute>
            </LayoutComponent>
          </MainDataLayer>
        </AuthLayer>
      </ChatContext.Provider>
    </Context.Provider>
  );
};

export default observer(App);
