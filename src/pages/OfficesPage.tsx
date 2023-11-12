import {IUser} from "../App";
import {useLocation} from "react-router-dom";
import Office from "../components/Office/Office";
import {Header} from "../components/Header/Header";
import React from "react";

interface props {
    user: IUser | undefined,
    handleUser: (data: IUser) => void,
}

export default function OfficesPage(props: props) {
    console.log(props)
    const {state} = useLocation();
    return (
        <>
            <Header handleUser={props.handleUser}/>
            <Office uuid={state.uuid} />
        </>
    )
}
