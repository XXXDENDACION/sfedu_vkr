import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "./_app";

const GuardRoute = ({children}: {children: React.ReactNode}): JSX.Element => {
    const router = useRouter();
    const authContext = useContext(Context);
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        // on initial load - run auth check 
        authCheck(router.asPath);

        // on route change start - hide page content by setting authorized to false  
        const hideContent = (): void => setAuthorized(false);
        router.events.on("routeChangeStart", hideContent);

        // on route change complete - run auth check 
        router.events.on("routeChangeComplete", authCheck);

        // unsubscribe from events in useEffect return function
        return () => {
            router.events.off("routeChangeStart", hideContent);
            router.events.off("routeChangeComplete", authCheck);
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function authCheck(url): void {
        // redirect to login page if accessing a private page and not logged in 
        const publicPaths = ["/signup"];
        const path = url.split("?")[0];
        if (!authContext.store.isAuth && !publicPaths.includes(path)) {
            setAuthorized(false);
            router.push({
                pathname: "/signup",
                query: { returnUrl: router.asPath }
            });
        } else {
            setAuthorized(true);
        }
    }

    return (authorized && children) as JSX.Element;
};

export default GuardRoute;