import axios from "axios";


const instance = (token: string) => {
    return axios.create({
        baseURL: "https://api.foxworld.online/",
        // baseURL: "http://localhost:8082/",
        timeout: 1000,
        headers: {
            "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + token
        }
    });
}

export const Api = () => {
    let token = localStorage.getItem("token")
    if (token != null) {
        console.log(token)
        return instance(token)
    } else {

        return (
            axios.create({
                baseURL: "https://api.foxworld.online/",
                // baseURL: "http://localhost:8082/",
                timeout: 1000,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    'Content-Type': 'application/json',
                }
            })
        )
    }
}

export const Test = (token:string) => {

    const promise = () => {
        return Api().get("auth-server/main/test",{headers:{'Authorization':'Bearer ' + token}}).then(r => r.data)
    }
    return promise()
}

