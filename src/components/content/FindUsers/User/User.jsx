import React from 'react';
import style from './User.module.css';
import {Link} from "react-router-dom";
import defaultPhoto from '../../../../assets/images/defaultPhoto.svg';

const User = (props) => {
    const follow = () => {
        props.onFollow(props.userInfo.id);
    }

    const unfollow = () => {
        props.onUnFollow(props.userInfo.id);
    }

    return (
        <div className={style.user}> 
            <div className={style.sideBarInfo}>
                <div className={style.avatar}>
                    <Link to={`/profile/${props.userInfo.id}`} >
                        <img src={props.userInfo.photos.small != null ? props.userInfo.photos.small : defaultPhoto} alt="avatar"/>
                    </Link>             
                </div>
                {props.isAuth
                  ? <div className={style.followButton}>
                        {props.userInfo.followed
                            ? <button
                                onClick={unfollow}
                                disabled={props.followingInProgressUsers.some(id => id === props.userInfo.id)}
                            >Unfollow</button>
                            : <button
                                onClick={follow}
                                disabled={props.followingInProgressUsers.some(id => id === props.userInfo.id)}
                            >Follow</button>
                        }
                    </div>
                : ''
                }

            </div>
            <div className={style.blockInfo}>
                <div className={style.fullName}>
                    <Link to={`/profile/${props.userInfo.id}`} >
                        {props.userInfo.name}
                    </Link>
                </div>

                <div className={style.status}>
                    <div>{props.userInfo.status}</div>
                </div>

            </div>
        </div>
    )
}   

export default User;