import axios from 'axios';
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {GetAllEventsByRoom, SubscribeToEvent, UnSubscribeToEvent} from "../../api/Api";
import {Button, List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import {Event} from "../../models/Models";
import {CheckIsUserSubscribe} from "./SubscribeHandler";
import {IUser} from "../../App";


interface CreateEvent {
    name: string,
    author: string,
    date: string,
    timeStart: string,
    timeEnd: string,
    description: string,
    room: string
}

interface props {
    uuid: string,
    user: IUser | undefined
}

function Events(props: props) {
    const navigate = useNavigate()
    const [events, setEvents] = useState<Array<Event>>()
    useEffect(() => {
        handleEventsList(props.uuid)
    }, [])
    useEffect(() => {
        handleEventsList(props.uuid)
    }, [props.uuid])
    const handleEventsList = (uuid: string) => {
        GetAllEventsByRoom(props.uuid).then(r => {
            setEvents(r)
        })
    }

    function subscribe(event: string) {
        SubscribeToEvent(event)
    }

    function unsubscribe(event: string) {
        UnSubscribeToEvent(event)
    }

    function Btns(event: any) {
        let status = CheckIsUserSubscribe(props.user, event)
        //console.warn(status)
        console.log(event)
        if (status) {
            return (
                <Button variant={"contained"} onClick={() => {
                    subscribe(event.events)
                }}>
                    Подписаться
                </Button>
            )
        } else {
            return (
                <Button variant={"contained"} onClick={() => {
                    unsubscribe(event.events)
                }}>
                    Отписаться
                </Button>
            )
        }
    }

    return (
        <div>
            <h1>Events List By Room</h1>
            <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                {events?.map((r: Event) => (
                    <ListItem
                        key={r.uuid}
                        disableGutters //Это отступы если что
                        onClick={
                            () => {
                                {
                                    navigate("/event", {state: {uuid: r.uuid}})
                                }
                            }
                        }
                    >
                        <ListItemText primary={`Line item ${r.name}`}
                                      secondary={"Автор: " + r.author}/>
                        <Btns events={r.uuid}/>
                    </ListItem>
                ))}
            </List>
        </div>
    )
}

export default Events;
