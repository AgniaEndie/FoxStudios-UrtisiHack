import axios from 'axios';
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {
    CreateEvent,
    GetAllEventsByRoom,
    GetAllRoomsByOffice,
    SubscribeToEvent,
    UnSubscribeToEvent
} from "../../api/Api";
import {
    Box,
    Button,
    Container, InputLabel,
    List,
    ListItem,
    ListItemButton,
    ListItemText, MenuItem,
    Modal, Select, SelectChangeEvent,
    TextField,
    Typography
} from "@mui/material";
import {Event, Room} from "../../models/Models";
import {CheckIsUserSubscribe} from "./SubscribeHandler";
import {IUser} from "../../App";
import "./Events.scss"

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
    user: IUser | undefined,
    office: string
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

    const [hideEventModel, setHideEventModal] = useState(false)
    const handleHideCreateEventModal = (value: boolean) => {
        setHideEventModal(value)
    }

    function CreateEventModal() {
        const style = {
            position: 'absolute' as 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
        };
        const [rooms, setRooms] = useState<Array<Room>>()

        useEffect(() => {
            handleAllRooms(props.office)
        }, [])

        const handleAllRooms = (office: string) => {
            GetAllRoomsByOffice(office).then(r => {
                setRooms(r)
            })
        }

        const [data, setData] = useState<Event>()


        const [formName, setFormName] = useState<String>("")
        const [about, setAbout] = useState<String>("")
        const [date, setDate] = useState(new Date())
        const [timeStart, setTimeStart] = useState("")
        const [timeStartTwink, setTimeStartTwink] = useState("")
        const [timeEnd, setTimeEnd] = useState("")
        const [timeEndTwink, setTimeEndTwink] = useState("")

        const handleFormName = (value: any) => {
            setFormName(value.target.value)
        }

        const handleAbout = (value: any) => {
            setAbout(value.target.value)
        }

        const handleDate = (value: any) => {
            setDate(value.target.value)
        }

        const handleTimeStart = (value: any) => {
            let d  = new Date(date.getFullYear(), date.getMonth(),date.getDay(),value.target.value.split(":")[0],value.target.value.split(":")[1])
            setTimeStart(d.toString)
            setTimeStartTwink(value.target.value)
        }

        const handleTimeEnd = (value: any) => {
            let d  = new Date(date.getFullYear(), date.getMonth(),date.getDay(),value.target.value.split(":")[0],value.target.value.split(":")[1])
            setTimeEnd(d.toString)
            setTimeEndTwink(value.target.value)
        }

        const [selectedRoom, setSelectedRoom] = useState("");

        const handleChangeRoom = (event: SelectChangeEvent) => {
            setSelectedRoom(event.target.value as string);
        };
        const handleCreateEvent = () => {
            let save = {
                author: props.user ? props.user.uuid.toString() : "",
                name: formName.toString(),
                date: date.toString(),
                timeStart: timeStart.toString(),
                timeEnd: timeEnd.toString(),
                description: about.toString(),
                room: selectedRoom,
            }
            CreateEvent(JSON.stringify(save))
        }

        if (hideEventModel && rooms != undefined) {

            return (
                <Modal
                    open={hideEventModel}
                    onClose={handleHideCreateEventModal}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Создание мероприятия
                        </Typography>
                        <Typography id="modal-modal-description" sx={{mt: 2}}>
                            <Container>
                                <TextField label="Наименование" variant="standard" value={formName} onChange={handleFormName} fullWidth/>
                                <TextField label="Описание" variant="standard" type={"text"} value={about} onChange={handleAbout} fullWidth/><br/>
                                <TextField label="Дата" variant="standard" type={"date"} value={date} onChange={handleDate} fullWidth/><br/>
                                <TextField label="Время начала" variant="standard" type={"time"} value={timeStartTwink} onChange={handleTimeStart} fullWidth/>
                                <TextField label="Время окончания" variant="standard" type={"time"} value={timeEndTwink} onChange={handleTimeEnd} fullWidth/>
                                <InputLabel id="demo-simple-select-label">Комната</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={selectedRoom}
                                    label="Комната"
                                    onChange={handleChangeRoom}
                                    fullWidth
                                >
                                    {rooms.map(r => <MenuItem value={r.uuid}>{r.name}</MenuItem>)}
                                </Select>
                                <Button onClick={() => {
                                    handleCreateEvent()
                                }}>Создать</Button>
                            </Container>
                        </Typography>
                    </Box>
                </Modal>
            )
        } else {
            return (
                <>

                </>
            )
        }
    }


    return (
        <div>
            <CreateEventModal/>

            <List sx={{
                width: '100%',
                maxWidth: 800,
                minHeight: 400,
                bgcolor: 'rgba(33 , 53 , 85 , 0.60)',
                color: 'white',
                position: 'absolute',
                right: "20%",
                top: '10%'
            }}>
                <Container>
                    <h1>Мероприятия</h1>
                    <Button className={"btn"} variant={"contained"} onClick={() => {
                        handleHideCreateEventModal(true)
                    }}>
                        Создать мероприятие
                    </Button>
                </Container>
                {events?.map((r: Event) => (
                    <ListItem sx={{
                        width: '90%',
                        margin: 'auto',
                        textAlign: 'center',
                        borderRadius: '9px',
                        border: '1px solid #FFF',
                        marginTop: '5px',
                        cursor: 'pointer'
                    }}
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
                        <ListItemText primary={`${r.name}`}
                                      secondary={"Автор: " + r.author}/>
                        <Btns events={r.uuid}/>
                    </ListItem>
                ))}
            </List>
        </div>
    )
}

export default Events;
