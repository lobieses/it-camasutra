import React from 'react';
import style from './Dialogs.module.css';
import Name from './Name/Name';

const Dialogs = (props) => {
    const names = props.dialogNames.map(name => {
        return <Name
            id={name.id}
            name={name.name}
            dialogsMenuIsOpen={props.dialogsMenuIsOpen}
            toggleStateDialogsMenu={props.toggleStateDialogsMenu}
        />
    });

    return (
        <div className={style.dialogs}>
            <div className={`${style.contactsMenu} ${props.dialogsMenuIsOpen ? style.active : ''}`} onClick={props.toggleStateDialogsMenu}>
                <span className={props.dialogsMenuIsOpen ? style.active : null}></span>
            </div>
            <div className={`${style.dialogsElems} ${props.dialogsMenuIsOpen ? style.active : ''}`}>
                {names}
            </div>
        </div>     
    )
}   

export default Dialogs;