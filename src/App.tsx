import React, {useState} from 'react';
import "./App.scss"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {LoginPage} from "./pages/LoginPage";
import {MainPage} from "./pages/MainPage";

export interface IUser {
    username: String,
    token: String,
    uuid: String,
    role: String
}

function App() {

    const [user, setUser] = useState<IUser>()
    const handleUser = (data:IUser)=>{
        setUser(user)
    }

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="login" element={<LoginPage handleUser={handleUser}/>}/>
                    <Route path="/" element={<MainPage handleUser={handleUser} user={user}/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
