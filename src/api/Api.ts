import axios, {AxiosInstance} from "axios";
import {IUser} from "../App";


const instance = axios.create({
    baseURL: "https://api.foxworld.online/",
    // baseURL: "http://localhost:8082/",
    timeout: 1000,
    headers: {
        "Access-Control-Allow-Origin": "*",
        'Content-Type': 'application/json',
    }
});
let token = localStorage.getItem("token") != null && localStorage.getItem("token") != "" ? "Bearer " + localStorage.getItem("token") : ""

export async function Auth(data: any, handleUser: any) {
    const promise = await instance.request({
        data, url: "auth-server/main/auth", method: 'POST'
    })
    localStorage.setItem('token', promise.data.token)
    let user: IUser = {
        token: promise.data.token,
        username: promise.data.username,
        role: promise.data.role,
        uuid: promise.data.uuid
    }
    console.log(user)
    handleUser(user)
    return promise.data;
}

export async function Test() {
    const promise = await instance.request({
        url: "auth-server/main/test", headers: {Authorization: token}, method: "GET"
    })
    return promise.data
}
