import {IUser} from "../App";
import {Header} from "../components/Header/Header";
import React, {useEffect, useState} from "react";
import {Org} from "../models/Models";
import {AllOrganisation} from "../api/Api";
import {List, ListItem, ListItemText} from "@mui/material";
import Office from "../components/Office/Office";
import {useNavigate} from "react-router-dom";

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
        <>
            <Header handleUser={props.handleUser}/>
            <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                {orgs?.map((r: Org) => (
                    <ListItem
                        key={r.uuid}
                        disableGutters //Это отступы если что
                        onClick={
                            () => {
                                {navigate("/offices", {state:{uuid:r.uuid}})}
                            }
                        }>
                        <ListItemText primary={`Line item ${r.name}`}
                                      secondary={"Статус: " + r.status} />
                    </ListItem>
                ))}
            </List>
        </>

    )
}
