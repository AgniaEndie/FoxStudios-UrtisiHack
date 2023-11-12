import {useNavigate} from "react-router-dom";
import React, {useEffect} from "react";
import LogOut from "../LogOut/LogOut";
import {IUser} from "../../App";

interface props {
    handleUser: any
}

export function Header(props:props){
    const navigate = useNavigate()

    const handleNavigate = () => {
        if (localStorage.getItem("token") == null || localStorage.getItem("token") == "") {
            navigate("/login")
        }
    }

    useEffect(() => {
        handleNavigate()
    }, [])

    const HandleLogOut = () => {
        LogOut(props.handleUser)
        handleNavigate()
    }

    function LogOutBtn(){
        if(localStorage.getItem("token") == null || localStorage.getItem("token") == ""){
            return <></>
        }
        else{
            return <button onClick={() => {
                HandleLogOut()
            }}>Выйти</button>
        }
    }

    return(
        <>
            <LogOutBtn/>
        </>
    )
}
