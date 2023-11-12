import {IUser} from "../App";
import {useLocation, useNavigate} from "react-router-dom";
import Events from "../components/Event/Events";
import {RoomsPage} from "./RoomsPage";
import {Header} from "../components/Header/Header";

interface props {
    user: IUser | undefined,
    handleUser: (data: IUser) => void,
}
export function EventsPage(props: props){
    const {state} = useLocation();

    return(
        <>
            <Header handleUser={props.handleUser}/>
            <RoomsPage user={props.user} handleUser={props.handleUser} mode={"soft"}/>
            <Events uuid={state.uuid} user={props.user} />
        </>
    )
}
