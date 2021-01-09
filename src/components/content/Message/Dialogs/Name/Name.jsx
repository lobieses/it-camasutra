import React from 'react';
import style from './Name.module.css';
import { NavLink } from "react-router-dom";

class Name extends React.Component {
    render() {
        return (
            <NavLink to={'/message' + this.props.id}><span className={style.dotInName}>•</span>{this.props.name}</NavLink>
        )
    }
}

export default Name;