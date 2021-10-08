import React, {FC} from 'react';
import style from './FindUsers.module.css';
import User from './User/User';
import Paginator from "../../common/Paginator/Paginator";
import {userType} from "../../../types/types";

type PropsType = {
    users: Array<userType>,
    totalCounts: number,
    pageSize: number,
    focusPage: number,
    followingInProgressUsers: Array<number>,
    isAuth: boolean,
    onChangePage: (page: number) => void,
    onFollow: (id: number) => void,
    onUnFollow: (id: number) => void
}

const FindUsers: FC<PropsType> = (props) => {
    const Users = props.users.map(info => {
        return <User key={info.id}
            userInfo={info}
            onFollow={props.onFollow}
            onUnFollow={props.onUnFollow}
            followingInProgressUsers={props.followingInProgressUsers}
            isAuth={props.isAuth}
        />
    });

    return (
        <div >
            <div className={style.users}>
                {Users}
            </div>
            <div>
                <Paginator
                    onChangePage={props.onChangePage}
                    totalCounts={props.totalCounts}
                    pageSize={props.pageSize}
                    focusPage={props.focusPage}
                />
            </div>
        </div>
    )  
}   

export default FindUsers;