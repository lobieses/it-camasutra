import React from 'react';
import style from './Chat.module.css';

class Chat extends React.Component {
    render() {
        return (
            <div className={style.chat}>
                <div className={style.blockInfo}>
                    <div className={style.avatar}>
                        <img alt="avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEQR1NSz1oP2mOuhy6IWixQJjwpYrYD-HEwA&usqp=CAU"/>
                    </div> 
                    <div className={style.name}>
                        {this.props.name}
                    </div>      
                </div>
                <div className={style.message}>
                    <p>{this.props.message}</p>
                </div>
            </div>
        )
    }
}

export default Chat;