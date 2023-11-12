import axios from 'axios';
import React from "react";
interface CreateRoom{
    uuid?:string,
    name:string,
    office:string,
    photo:string,
    status:number,
    description:string,
    calendarCode:string,
    access:number,
    capacity:number

}
interface Rooms{
    uuid:string,
    name:string,
    office:string,
    photo:string,
    status:number,
    description:string,
    calendarCode:string,
    access:number,
    capacity:number
}
function Room(){
    return(
        <>
        </>
    )
}
export default Room;