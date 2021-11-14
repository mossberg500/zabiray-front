import React from 'react'
import './App.css';
import Header from './views/Header/Header';
import Footer from "./views/Footer/Footer";
import Navbar from "./views/Navbar/Navbar";
import Profile from "./views/Profile/Profile";


function App() {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar />
            <Profile />
            <footer className='footer'><Footer/></footer>
        </div>
    );
}

export default App;
