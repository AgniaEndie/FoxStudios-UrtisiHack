export interface Org{
    uuid: string,
    name: string,
    status: string
}
export interface Off {
    uuid: string;
    name: string;
    city: string;
    timeZone: string;
    organisation: string;
}
export interface Room{
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

export interface Event{
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
export interface Subs{
    uuid:string,
    userId:string,
    event:string
}
