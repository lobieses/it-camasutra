import React from 'react';
import style from './side-bar.module.css';
import { NavLink } from "react-router-dom";

const SideBar = () => {
    return (
        <div className={style.sideBar}>
            <div className={style.sideBarBlock}>
                <div className={style.sideBarElems}>
                    <NavLink to="/profile" activeClassName={style.active}>Profile</NavLink>
                </div>
                <div className={style.sideBarElems}>
                    <NavLink to="/message" activeClassName={style.active}>Message</NavLink>
                </div>
                <div className={style.sideBarElems}>
                    <a href="#">News</a>
                </div>
                <div className={style.sideBarElems}>
                    <a href="#">Music</a>
                </div>
                <div className={style.sideBarElems}>
                    <a href="#">Settings</a>
                </div>
            </div> 
        </div>
    )
}

export default SideBar;