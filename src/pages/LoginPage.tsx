import {Header} from "../components/Header/Header";
import {Login} from "../components/Login/Login";
import {Footer} from "../components/Footer/Footer";

interface props{
    handleUser:any
}

export const LoginPage = (props:props)=>{
    return(
        <>
            <Header/>
            <Login handleUser={props.handleUser}/>
            <Footer/>
        </>
    )
}
