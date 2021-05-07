import React from 'react';
import style from './header.module.css';
import {Link} from "react-router-dom";

const Header = (props) => {
    return (
        <div className={style.header}>
            <div className={style.loginOrLogout}>
                {props.isAuth
                    ? <div className={style.logout}>
                        <span>{props.login} - </span>
                        <button onClick={props.onLogout}>logout</button>
                     </div>
                    : <div className={style.login}>
                        <Link to={'/auth'}>Login</Link>
                      </div>
                }
            </div>
        </div>
    )
}

export default Header;