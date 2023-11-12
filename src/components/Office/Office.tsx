import axios from 'axios';
import React, {useEffect, useState} from "react";
import {Off} from "../../models/Models";
import {AllOrganisation, GetAllOffices} from "../../api/Api";
import {List, ListItem, ListItemText} from "@mui/material";
import {useNavigate} from "react-router-dom";

interface props {
    uuid:string
}

function Office(props:props) {
    const navigate = useNavigate()
    const [offs, setOff] = useState<Array<Off>>()

    useEffect(() => {
        handleOfficesList(props.uuid)
    }, [])

    const handleOfficesList = (uuid:string) => {
        GetAllOffices().then(r => {
            setOff(r)
        })
    }

    return (
        <div>
            <h1>Office List By Org</h1>
            <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                {offs?.map((r: Off) => (
                    <ListItem
                        key={r.uuid}
                        disableGutters //Это отступы если что
                        onClick={
                            () => {
                                {navigate("/rooms", {state:{room_uuid:r.uuid}})}
                            }
                        }
                    >
                        <ListItemText primary={`Line item ${r.name}`}
                                      secondary={"Город: " + r.city}/>
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

export default Office;
