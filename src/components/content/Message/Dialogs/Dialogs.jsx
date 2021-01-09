import React from 'react';
import style from './Dialogs.module.css';
import Name from './Name/Name';

class Dialogs extends React.Component {
    render() {
        return (
            <div> 
                <div className={style.dialogsBlock}>
                    <div className={style.dialogs}>
                        <Name id={'/1'} name={'Сережа'} />
                        <Name id={'/2'} name={'Катя'} />
                        <Name id={'/3'} name={'Света'} />
                    </div>      
                </div>
            </div>
        )
    }
}   

export default Dialogs;