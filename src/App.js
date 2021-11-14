import React from 'react'
import './App.css';
import Header from './views/Header';
import Footer from "./views/Footer";
import Navbar from "./views/Navbar";
import Profile from "./views/Profile";


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
