import React from 'react';
import style from './FindUsers.module.css';
import User from './User/User';
import * as axios from 'axios';

class FindUsers extends React.Component {
    render() {
        if(this.props.findUsersPage.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(responce => {
                this.props.setUsers(responce.data.items);
            });


        }

        const createUsers = this.props.findUsersPage.users.map(info => {
            return <User key={info.id} userInfo={info} onFollow={this.props.onFollow} onUnfollow={this.props.onUnfollow}/>
        });
        return (
            <div> 
                <div className={style.namePage}>
                    Users
                </div>
                <div className={style.users}>            
                    {createUsers}     
                </div>
                <div className={style.loadMore}>
                    <button>Show more</button>
                </div>
            </div>
        ) 
    }
   
}   

export default FindUsers;