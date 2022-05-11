import { observer } from "mobx-react-lite";
import { Spin } from "antd";
import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { Context } from "./_app";
import { toJS } from "mobx";

const AuthLayer = ({children}: {children: React.ReactNode}): JSX.Element => {
    const authContext = useContext(Context);
    console.log(toJS(authContext.store.user));
    useEffect(() => {
        authContext.store.checkAuth();
      }, []);

    const { isLoading, isCompletedCheck } = authContext.store;
      console.log(isCompletedCheck, isLoading);
    return (
        <>
            {!isCompletedCheck && isLoading && <Spin style={{ position: "fixed", bottom: "50%", left: "50%" }} />}
            {isCompletedCheck && !isLoading && children}
        </>
    );
};

export default observer(AuthLayer);