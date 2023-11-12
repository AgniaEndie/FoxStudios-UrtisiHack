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
            <h1>Rooms List By Office</h1>
            <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                {rooms?.map((r: Room) => (
                    <ListItem
                        key={r.uuid}
                        disableGutters //Это отступы если что
                        onClick={
                            () => {
                                {
                                    navigate("/events", {state: {uuid: r.uuid, room_uuid: props.uuid}})
                                }
                            }
                        }
                    >
                        <ListItemText primary={`Line item ${r.name} , ${r.uuid}`}
                                      secondary={"Офис: " + r.office}/>
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

export default Rooms;
