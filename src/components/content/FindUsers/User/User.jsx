import React from 'react';
import style from './User.module.css';

const User = (props) => {
    const follow = () => {
        props.onFollow(props.userInfo.id);
    }

    const unfollow = () => {
        props.onUnfollow(props.userInfo.id)
    }

    return (
        <div className={style.user}> 
            <div className={style.sideBarInfo}>
                <div className={style.avatar}>
                    <img src={props.userInfo.avatarURL} alt="avatar"/>
                </div>
                <div className={style.followButton}>
                    {props.userInfo.followed 
                        ? <button onClick={unfollow}>Unfollow</button>
                        : <button onClick={follow}>Follow</button>
                    }
                </div>
            </div>
            <div className={style.blockInfo}>
                <div className={style.fullName}>
                    {props.userInfo.fullName}
                </div>
                <div className={style.status}>
                    <div>{props.userInfo.status}</div>
                </div>
                <div className={style.location}>
                    {props.userInfo.location.city + ', ' + props.userInfo.location.country}
                </div>
            </div>
        </div>
    )
}   

export default User;