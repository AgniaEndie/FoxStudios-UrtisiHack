import {IUser} from "../../App";
import {useEffect, useState} from "react";
import {Subs} from "../../models/Models";
import {SubscribeList} from "../../api/Api";

export function CheckIsUserSubscribe(user: IUser | undefined, event: any) {
    const [subs, setSubs] = useState<Array<Subs>>()

    useEffect(() => {
        handleSubs()
    }, [])

    const handleSubs = () => {
        SubscribeList().then(r => {
            setSubs(r)
        })
    }
    console.log(subs)
    if (subs !== undefined) {
        let sub = subs.find(x => x.event === event.events)
        console.log(sub)
        if(sub !== undefined){
            return false
        }else{
            return true
        }
    } else {
        return true
    }
}
