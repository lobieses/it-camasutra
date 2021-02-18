import React from 'react';
import style from './FindUsers.module.css';
import User from './User/User';

const FindUsers = (props) => {
    const checkNumRange = (page, totalPage) => {
        if(totalPage > page && page > 0) {
            return true
        } 
    }

    const createUsers = props.users.map(info => {
        return <User key={info.id}
            userInfo={info}
            onFollow={props.onFollow}
            onUnFollow={props.onUnFollow}
            followingInProgressUsers={props.followingInProgressUsers}
        />
    });
         
    const pages = Math.ceil(props.totalCounts / props.pageSize);
    let pagesArr = [props.focusPage];
    for(let i = 1; i <= 3; i++) {    
        if(checkNumRange(props.focusPage + i, pages)) {
            pagesArr.push(props.focusPage + i);
        }
        if(checkNumRange(props.focusPage - i, pages)) {
            pagesArr.unshift(props.focusPage - i);
        }
    }

    const pagesElem = pagesArr.map(page => {
        return <span 
                    key={page} 
                    className={page === props.focusPage ? style.focusPage : undefined}
                    onClick={() => {props.onChangePage(page)}}
                >{page}</span>
    });

    return (
        <div> 
            <div className={style.namePage}>
                Users
            </div>
            <div className={style.users}>            
                {createUsers}     
            </div>
            <div className={style.pages}>
                {pagesElem}
            </div>
        </div>
    )  
}   

export default FindUsers;