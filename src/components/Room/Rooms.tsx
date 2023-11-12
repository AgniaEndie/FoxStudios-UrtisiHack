import axios from 'axios';
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Off, Room} from "../../models/Models";
import {GetAllOffices, GetAllRoomsByOffice} from "../../api/Api";
import {List, ListItem, ListItemText} from "@mui/material";

interface CreateRoom {
    uuid?: string,
    name: string,
    office: string,
    photo: string,
    status: number,
    description: string,
    calendarCode: string,
    access: number,
    capacity: number

}

interface props {
    uuid: string,
    mode: string
}

function Rooms(props: props) {

    const navigate = useNavigate()
    const [rooms, setRooms] = useState<Array<Room>>()
    useEffect(() => {
        handleRoomsList(props.uuid)
    }, [])

    const handleRoomsList = (uuid: string) => {
        GetAllRoomsByOffice(uuid).then(r => {
            setRooms(r)
        })
    }

    return (
        <div>

            <List sx={{width: '80%', maxWidth: 360, minHeight:'100%', bgcolor:'rgba(33 , 53 , 85 , 0.60)', color:'white',position:'absolute',left:0, top:0}}>
                <h1>Комнаты</h1>
                {rooms?.map((r: Room) => (
                    <ListItem sx={{width:'90%', margin:'auto', textAlign:'center', borderRadius:'9px', border:'1px solid #FFF', marginTop:'5px', cursor:'pointer'}}
                        key={r.uuid}
                        disableGutters //Это отступы если что
                        onClick={
                            () => {
                                {
                                    navigate("/events", {state: {uuid: r.uuid, room_uuid: props.uuid, office_uuid: props.uuid}})
                                }
                            }
                        }
                    >
                        <ListItemText primary={`${r.name}`}
                                      secondary={"Офис: " + r.office}/>
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

export default Rooms;
