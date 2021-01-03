import React from 'react';
import style from './side-bar.module.css';

class SideBar extends React.Component {
    render() {
        return (
        <div className={style.sideBar}>
            <div className={style.sideBarBlock}>
                <ul className={style.sideBarElems}>
                    <li>Profile</li>
                    <li>Message</li>
                    <li>News</li>
                    <li>Music</li>
                </ul>
            </div>
            <div className={style.sideBarBlock}>
                <ul className={style.sideBarElems}>
                    <li>Settings</li>
                </ul>
            </div>
            <div className={style.friends}>
                
            </div>
        </div>
        )
    }
}

export default SideBar;