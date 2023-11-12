import React, {useState, ChangeEvent} from "react";
import axios from "axios";
import {Test} from "../Api/Api";
import {Box, Button, Grid, TextField, Typography} from "@mui/material";

interface Data {
    email: string,
    password: string,
}
export function Auth(){
    const [data, setData] = useState<Data>({email: "", password: ""});

    const handleButtonClick = () => {
        const token = localStorage.getItem('token')
        if (token != null){
            let d = Test(token)
            console.error(d)
        }
    }


    const instance = axios.create({
        baseURL: "https://api.foxworld.online/",
        // baseURL: "http://localhost:8082/",
        timeout: 1000,
        headers: {
            "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json'
            // 'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
            // 'Access-Control-Allow-Credentials': 'true'
        }
    });
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setData({...data, [event.target.name]: event.target.value});
    };
    async function Auth(data: any) {
        const promise = await instance.request({
            data, url: "auth-server/main/auth", method: 'POST'
        })
        console.log(promise.data)
        localStorage.setItem('token', promise.data.token)

        return promise.data;
    }


    return(
        <Box sx={{
            height:'100vh',
        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                height:'100%',
            }}>
                <Typography variant='h5'>Авторизация</Typography>
                <Grid container direction="column" alignItems="center">
                    <TextField id="standard-basic" label="Почта" variant="standard" value={data.email} name="email" className='placeholder' type="text" onChange={handleChange}/>
                    <TextField id="standard-basic" label="Пароль" variant="standard" value={data.password} name="password" className='placeholder' type="password" onChange={handleChange}/>
                </Grid>

                <Button variant="contained" onClick={() => Auth(data)} sx={{
                    backgroundColor: '#F99417',
                    mt:5,
                }}>Войти</Button>
                <Button variant="contained" onClick={()=>handleButtonClick()}>Тест</Button>

            </Box>
        </Box>

    )
}