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
        <div className={'list-items'}>
            <h1>Офисы</h1>
            <List sx={{width: '80%', maxWidth: 360, minHeight:400, bgcolor:'rgba(33 , 53 , 85 , 0.60)', color:'white', borderRadius:'9px', border:'3px solid #FFF'}}>
                {offs?.map((r: Off) => (
                    <ListItem sx={{width:'90%', margin:'auto', textAlign:'center', borderRadius:'9px', border:'1px solid #FFF', marginTop:'5px', cursor:'pointer'}}
                        key={r.uuid}
                        disableGutters //Это отступы если что
                        onClick={
                            () => {
                                {navigate("/rooms", {state:{room_uuid:r.uuid}})}
                            }
                        }
                    >
                        <ListItemText
                                      primary={`Line item ${r.name}`}
                                      secondary={`Город: ${r.city}`}/>
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

export default Office;
