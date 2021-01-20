import React from 'react';
import style from './Name.module.css';
import { NavLink } from "react-router-dom";

const Name = (props) => {
    return (
        <NavLink to={'/message/' + props.id}><span className={style.dotInName}>•</span>{props.name}</NavLink>
    )
}

export default Name;