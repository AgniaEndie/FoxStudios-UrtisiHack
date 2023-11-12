import {IUser} from "../App";
import {useLocation} from "react-router-dom";
import Rooms from "../components/Room/Rooms";
import OfficesPage from "./OfficesPage";
import {useEffect} from "react";

interface props{
    user: IUser | undefined,
    handleUser: (data: IUser) => void,
    mode:string
}
export function RoomsPage(props:props){
    const {state} = useLocation();
    return (
        <>
            <Rooms uuid={state.room_uuid} mode={props.mode}/>
        </>
    )
}
