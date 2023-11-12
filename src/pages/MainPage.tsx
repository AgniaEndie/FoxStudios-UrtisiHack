import Organisation from "../components/Organization/Organisation";
import {IUser} from "../App";
interface props{
    user: IUser | undefined,
    handleUser : any
}

export const MainPage = (props:props)=>{
    return(
        <>
            <Organisation handleUser={props.handleUser}/>
            {props.user != undefined ? props.user.username : "no"}
        </>

    )
}
