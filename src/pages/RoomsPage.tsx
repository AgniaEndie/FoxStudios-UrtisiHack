import {IUser} from "../App";
import {useLocation} from "react-router-dom";
import Rooms from "../components/Room/Rooms";
import OfficesPage from "./OfficesPage";
import React, {useEffect} from "react";
import {Header} from "../components/Header/Header";

interface props{
    user: IUser | undefined,
    handleUser: (data: IUser) => void,
    mode:string
}
export function RoomsPage(props:props){
    const {state} = useLocation();
    return (
        <>
            <Header handleUser={props.handleUser}/>
            <Rooms uuid={state.room_uuid} mode={props.mode}/>
        </>
    )
}
