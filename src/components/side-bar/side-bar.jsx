import React from 'react';
import style from './side-bar.module.css';
import { NavLink } from "react-router-dom";

const SideBar = () => {
    return (
        <div className={style.container}>
            <div className={style.sideBarElems}>
                <NavLink activeClassName={style.active} to="/profile">Profile</NavLink>
            </div>
            <div className={style.sideBarElems}>
                <NavLink activeClassName={style.active} to="/message">Messages</NavLink>
            </div>
            <div className={style.sideBarElems}>
                <a href="#">News</a>
            </div>
            <div className={style.sideBarElems}>
                <a href="#">Music</a>
            </div>
            <div className={style.sideBarElems}>
                <NavLink activeClassName={style.active} to="/FindUsers">Find users</NavLink>
            </div>
            <div className={style.sideBarElems}>
                <a href="#">Settings</a>
            </div>
        </div>
    )
}

export default SideBar;