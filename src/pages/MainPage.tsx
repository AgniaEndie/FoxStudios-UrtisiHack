import {IUser} from "../App";
import {Header} from "../components/Header/Header";
import React, {useEffect, useState} from "react";
import {Org} from "../models/Models";
import {AllOrganisation} from "../api/Api";
import {List, ListItem, ListItemText} from "@mui/material";
import Office from "../components/Office/Office";
import {useNavigate} from "react-router-dom";
import "./MainPage.scss"

interface props {
    user: IUser | undefined,
    handleUser: (data: IUser) => void
}

export const MainPage = (props: props) => {
    const navigate = useNavigate()
    console.log(props.user)
    const [orgs, setOrgs] = useState<Array<Org>>()

    useEffect(() => {
        handleOrganisationList()
    }, [])

    const handleOrganisationList = () => {
        AllOrganisation().then(r => {
            setOrgs(r)
        })
    }

    return (
        <div className={'list-items'}>
            <Header handleUser={props.handleUser}/>
            <List sx={{width: '80%', maxWidth: 360, minHeight:400, bgcolor:'rgba(33 , 53 , 85 , 0.60)', color:'white', borderRadius:'9px', border:'3px solid #FFF'}}>
                {orgs?.map((r: Org) => (
                    <ListItem sx={{width:'90%', margin:'auto', textAlign:'center', borderRadius:'9px', border:'1px solid #FFF', marginTop:'5px', cursor:'pointer'}}
                        key={r.uuid}
                        disableGutters //Это отступы если что
                        onClick={
                            () => {
                                {navigate("/offices", {state:{uuid:r.uuid}})}
                            }
                        }>
                        <ListItemText primary={` ${r.name} -  ${r.status}`}/>
                    </ListItem>
                ))}
            </List>
        </div>

    )
}
