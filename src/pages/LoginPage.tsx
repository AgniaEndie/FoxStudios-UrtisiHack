import {Header} from "../components/Header/Header";
import {Login} from "../components/Login/Login";
import {Footer} from "../components/Footer/Footer";

interface props{
    handleUser:any
}

export const LoginPage = (props:props)=>{
    return(
        <>
            <Header handleUser={props.handleUser}/>
            <Login handleUser={props.handleUser}/>
            <Footer/>
        </>
    )
}
