import React from 'react';
import style from './FindUsers.module.css';
import User from './User/User';
import Paginator from "../../common/Paginator/Paginator";

const FindUsers = (props) => {
    const createUsers = props.users.map(info => {
        return <User key={info.id}
            userInfo={info}
            onFollow={props.onFollow}
            onUnFollow={props.onUnFollow}
            followingInProgressUsers={props.followingInProgressUsers}
        />
    });

    return (
        <div> 
            <div className={style.namePage}>
                Users
            </div>
            <div className={style.users}>            
                {createUsers}     
            </div>
            <div>
                <Paginator
                    totalCounts={props.totalCounts}
                    pageSize={props.pageSize}
                    focusPage={props.focusPage}
                    onChangePage={props.onChangePage}
                />
            </div>
        </div>
    )  
}   

export default FindUsers;