import React, {useState} from 'react';
import "./App.scss"
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import {LoginPage} from "./pages/LoginPage";
import {MainPage} from "./pages/MainPage";
import OfficesPage from "./pages/OfficesPage";
import {EventsPage} from "./pages/EventsPage";
import {RoomsPage} from "./pages/RoomsPage";
import {EditEvent} from "./components/Event/EditEvent";
import {MyEventPage} from "./pages/MyEventPage";

export interface IUser {
    username: String,
    token: String,
    uuid: String,
    role: String
}

function App() {

    const [user, setUser] = useState<IUser>()
    const handleUser = (data:IUser)=>{
        setUser(data)
    }
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="login" element={<LoginPage handleUser={handleUser}/>}/>
                    <Route path="/" element={<MainPage handleUser={handleUser} user={user}/>}/>
                    <Route path="/offices" element={<OfficesPage handleUser={handleUser} user={user}/>}/>
                    <Route path="/rooms" element={<RoomsPage mode={"normal"} handleUser={handleUser} user={user}/>}/>
                    <Route path="/events" element={<EventsPage handleUser={handleUser} user={user}/>}/>
                    <Route path="/events/my" element={<MyEventPage handleUser={handleUser} user={user}/>}/>
                    <Route path="/event" element={<EditEvent handleUser={handleUser} user={user}/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
