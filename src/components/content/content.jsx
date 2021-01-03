import React from 'react';
import style from './content.module.css';

class Content extends React.Component {
    render() {
        return (
        <div className={style.content}>
            <img alt="contentImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU1dFR0DR4d0wILeQRaH1oo1Dlsag-Gp2dXg&usqp=CAU"/>
        </div>
        )
    }
}   

export default Content;