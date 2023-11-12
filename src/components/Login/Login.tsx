import React, {useState, ChangeEvent, useEffect} from "react";
import axios from "axios";

import {Box, Button, Grid, TextField, Typography} from "@mui/material";
import {Auth, Test} from "../../api/Api";
import {useNavigate} from "react-router-dom";
import {IUser} from "../../App";

interface Data {
    email: string,
    password: string,
}

interface props {
    handleUser: any
}

export function Login(props: props) {

    const navigate = useNavigate()
    if (localStorage.getItem("token") != null && localStorage.getItem("token") != "") {
        navigate("/")
    }

    const [data, setData] = useState<Data>({email: "", password: ""});

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setData({...data, [event.target.name]: event.target.value});
    };
    const handleAuth = (data:any) =>{
        Auth(data, props.handleUser).then(r => {
            let user: IUser = {token:r.token, username: r.username, role:r.role, uuid: r.uuid}
            console.warn(user)
            props.handleUser(user)
        })
        navigate("/")
    }
    return (
        <Box sx={{
            height: '100vh',
        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                height: '100%',
            }}>
                <Typography variant='h5'>Вход</Typography>
                <Grid container direction="column" alignItems="center">
                    <TextField id="standard-basic" label="Почта" variant="standard" value={data.email} name="email"
                               className='placeholder' type="text" onChange={handleChange}/>
                    <TextField id="standard-basic" label="Пароль" variant="standard" value={data.password}
                               name="password" className='placeholder' type="password" onChange={handleChange}/>
                </Grid>

                <Button variant="contained" onClick={() => handleAuth(data)} sx={{
                    backgroundColor: '#F99417',
                    mt: 5,
                }}>Войти</Button>
                {/*<Button variant="contained" onClick={() => handleButtonClick()}>Тест</Button>*/}
            </Box>
        </Box>

    )
}
