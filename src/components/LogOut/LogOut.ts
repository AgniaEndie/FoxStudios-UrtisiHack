import {useNavigate} from "react-router-dom";
interface props {
    handleUser: any
}
export function LogOut(props:props){
    localStorage.setItem("token", "")
    props.handleUser(undefined)
}
export default LogOut
