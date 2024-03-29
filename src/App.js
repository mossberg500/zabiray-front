import React from 'react'
import './App.css';
import Header from './views/Header/Header';
import Footer from "./views/Footer/Footer";
import Navbar from "./views/Navbar/Navbar";
import Profile from "./views/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {Routes} from "react-router";


function App() {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <Routes>
                    <Route path="/dialogs" element={<Dialogs/>} />
                    <Route path="/profile" element={<Profile/>} />
                </Routes>
                {/* <Profile />*/}
                {/*<Dialogs />*/}
                <footer className='footer'><Footer/></footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
