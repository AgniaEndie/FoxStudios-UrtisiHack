import {IUser} from "../App";
import {Header} from "../components/Header/Header";
import {RoomsPage} from "./RoomsPage";
import Events from "../components/Event/Events";
import {MyEvent} from "../components/Event/MyEvent";

interface props {
    user: IUser | undefined,
    handleUser: (data: IUser) => void,
}

export function MyEventPage(props:props){

    return(
        <>
            <Header handleUser={props.handleUser}/>
            <RoomsPage user={props.user} handleUser={props.handleUser} mode={"soft"}/>
            <MyEvent />
        </>
    )
}
