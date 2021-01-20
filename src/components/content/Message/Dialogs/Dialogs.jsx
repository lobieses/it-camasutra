import React from 'react';
import style from './Dialogs.module.css';
import Name from './Name/Name';

const Dialogs = (props) => {
    const names = props.dialogNames.map(name => {
        return <Name id={name.id} name={name.name}/>
    });
    return (
        <div className={style.dialogsBlock}>
            <div className={style.dialogs}>
                {names}
            </div>      
        </div>     
    )
}   

export default Dialogs;