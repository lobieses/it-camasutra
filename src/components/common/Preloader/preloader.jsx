import React from 'react';
import preloader from '../../../assets/images/preloader.svg';
import style from './preloader.module.css';

const SideBar = () => {
    return(
        <div className={style.preloader}>
            <img src={preloader} alt="preloader"/>
        </div>
    )
}

export default SideBar;