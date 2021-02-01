import React from 'react';
import style from './User.module.css';

const User = (props) => {
    const follow = () => {
        props.onFollow(props.userInfo.id);
    }

    const unfollow = () => {
        props.onUnFollow(props.userInfo.id)
    }

    return (
        <div className={style.user}> 
            <div className={style.sideBarInfo}>
                <div className={style.avatar}>
                    <img src={props.userInfo.photos.small != null ? props.userInfo.photos.small : 'https://n1s1.hsmedia.ru/01/35/7f/01357f0e8f70d876c90cc0f5a681c6bb/620x429_1_02503db0df69f8beb9324bb72a99e23e@1200x831_0xac120003_12947200691611090922.jpg'} alt="avatar"/>
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
                    {props.userInfo.name}
                </div>
                <div className={style.status}>
                    <div>{props.userInfo.status}</div>
                </div>

            </div>
        </div>
    )
}   

export default User;