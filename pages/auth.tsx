import React, { useEffect } from "react";
import { Spin } from "antd";
import { usersStore } from "../mobx/store/userStore";
import { observer } from "mobx-react-lite";
import { eventStore } from "../mobx/store/eventStore";

type IAuth = {
    children: React.ReactNode;
}

const Auth = ({ children }: IAuth): JSX.Element => {
    const { getUsersAsync, getFiltersAsync, filters, users, isLoading, selectedFilters } = usersStore;
    const { getEventsByUser } = eventStore;

    useEffect(() => {
        getEventsByUser(1);
    }, [getEventsByUser]);

    useEffect(() => {
        getUsersAsync(selectedFilters);
    }, [selectedFilters, selectedFilters.departments, selectedFilters.roles, selectedFilters.skills, getUsersAsync]);

    useEffect(() => {
        if (!users) {
            getUsersAsync();
        }
    }, [users, getUsersAsync]);

    useEffect(() => {
        if (!filters) {
            getFiltersAsync();
        }
    }, [filters, getFiltersAsync]);
    
    return (
        <>
            {isLoading && <Spin style={{ position: "fixed", bottom: "50%", left: "50%" }} />}
            {children}
        </>
    );
};

export default observer(Auth);