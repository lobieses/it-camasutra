import React from 'react';
import style from './side-bar.module.css';

class SideBar extends React.Component {
    render() {
        return (
        <div className={style.sideBar}>
            <div className={style.sideBarBlock}>
                <div className={style.sideBarElems}>
                    <a href="/profile">Profile</a>
                </div>
                <div className={style.sideBarElems}>
                    <a href="/message">Message</a>
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
}

export default SideBar;