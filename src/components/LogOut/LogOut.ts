import {useEffect} from "react";

interface props {
    handleUser: any
}

export function LogOut(props: props) {
    localStorage.setItem("token", "")
    const da = () => {
        props.handleUser(undefined)
    }
}

export default LogOut
