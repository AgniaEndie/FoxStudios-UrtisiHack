import axios from 'axios';
import React from "react";

interface Events{
    uuid:string,
    name:string,
    author:string,
    date:string,
    timeStart:string,
    timeEnd:string,
    description:string,
    duration:number,
    deleted:number,
    room:string
}
interface CreateEvent{
    name:string,
    author:string,
    date:string,
    timeStart:string,
    timeEnd:string,
    description:string,
    room:string
}

function Event(){
    return(
        <>
        </>
    )
}
export default Event;