import {IUser} from "../App";
import {useLocation} from "react-router-dom";
import Office from "../components/Office/Office";

interface props {
    user: IUser | undefined,
    handleUser: (data: IUser) => void,
}

export default function OfficesPage(props: props) {
    console.log(props)
    const {state} = useLocation();
    return (
        <>
            <Office uuid={state.uuid} />
        </>
    )
}
