import axios from 'axios';
import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import LogOut from "../LogOut/LogOut";

interface Org {
    uuid: string,
    name: string,
    status: string
}

const baseURL = 'https://api.foxworld.online/corporative/organisation/all';
interface props {
    handleUser: any
}
function Organisation(props:props) {

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
    return (
        <div>
            Main
            <button onClick={() => {
                HandleLogOut()
            }}>Выйти</button>
        </div>
    );
}

export default Organisation;
