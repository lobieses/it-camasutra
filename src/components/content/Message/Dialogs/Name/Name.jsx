import React from 'react';
import style from './Name.module.css';
import { NavLink } from "react-router-dom";

const Name = (props) => {
    const onSelectNameIfMenuIsOpen = () => {
        if(props.dialogsMenuIsOpen === true) {
            props.toggleStateDialogsMenu();
        }
    }

    return (
        <div className={style.name} onClick={onSelectNameIfMenuIsOpen}>
            <NavLink activeClassName={style.active} to={'/message/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default Name;