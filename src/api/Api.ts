import axios from "axios";
import {IUser} from "../App";
import exp from "constants";


const instance = axios.create({
    baseURL: "https://api.foxworld.online/",
    // baseURL: "http://localhost:8082/",
    timeout: 1000,
    headers: {
        "Access-Control-Allow-Origin": "*",
        'Content-Type': 'application/json',
    },
});

export async function Auth(data: any, handleUser: any) {
    const promise = await instance.request({
        data, url: "auth-server/main/auth", method: 'POST'
    })
    localStorage.setItem('token', promise.data.token)
    return promise.data;
}

export async function Test() {
    let token = "Bearer " + localStorage.getItem("token")
    const promise = await instance.request({
        url: "auth-server/main/test", headers: {Authorization: token}, method: "GET"
    })
    return promise.data
}

export async function AllOrganisation() {
    let token = "Bearer " + localStorage.getItem("token")
    const promise = await instance.request({
        url: "corporative/organisation/all", headers: {Authorization: token}, method: "GET"
    })
    return promise.data
}

export async function GetAllOffices() {
    let token = "Bearer " + localStorage.getItem("token")
    const promise = await instance.request({
        url: "corporative/office/all", headers: {Authorization: token}, method: "GET"
    })
    return promise.data
}
export async function GetAllRoomsByOffice(uuid:string) {
    let token = "Bearer " + localStorage.getItem("token")
    const promise = await instance.request({
        url: `corporative/room/all/${uuid}`, headers: {Authorization: token}, method: "GET"
    })
    return promise.data
}

export async function GetAllEventsByRoom(uuid:string){
    let token = "Bearer " + localStorage.getItem("token")
    const promise = await instance.request({
        url: `corporative/event/room/get/${uuid}`, headers: {Authorization: token}, method: "GET"
    })
    return promise.data
}

export async function SubscribeList(){
    let token = "Bearer " + localStorage.getItem("token")
    const promise = await instance.request({
        url: `corporative/event/subs/list`, headers: {Authorization: token}, method: "GET",
    })
    return promise.data
}

export async function UnSubscribeToEvent(uuid:string){
    let token = "Bearer " + localStorage.getItem("token")
    const promise = await instance.request({
        url: `corporative/event/unsubscribe/${uuid}`, headers: {Authorization: token}, method: "DELETE"
    })
    return promise.data
}
export async function SubscribeToEvent(uuid:string){
    let token = "Bearer " + localStorage.getItem("token")
    const promise = await instance.request({
        url: `corporative/event/subscribe/${uuid}`, headers: {Authorization: token}, method: "GET"
    })
    return promise.data
}
