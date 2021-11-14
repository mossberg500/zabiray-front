import React from 'react';
import cl from './Navbar.module.css';
/*
let c1 = "item";
let c2 = "active";
let classes = c1 + " " + c2;
let classesNew = `${c1} ${c2}`;
*/

const Navbar = () => {
    return (
        <nav className={cl.nav}>
            <div className= {`${cl.item} ${cl.active}`}><a>Profile</a></div>
            <div className={cl.item}>Messages</div>
            <div className={cl.item}>News</div>
            <div className={cl.item}>Settings</div>
            <div className={cl.item}>Main content</div>
        </nav>
    );
}
export default Navbar;