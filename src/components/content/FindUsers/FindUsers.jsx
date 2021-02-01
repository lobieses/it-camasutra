import React from 'react';
import style from './FindUsers.module.css';
import User from './User/User';
import * as axios from 'axios';

class FindUsers extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.focusPage}`)
            .then(responce => {
                this.props.setUsers(responce.data.items);
                this.props.setTotalCounts(responce.data.totalCount);
            });
    }

    onChangePage(page) {
        this.props.setFocusPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`)
            .then(responce => {
                this.props.setUsers(responce.data.items);
            });
    }

    checkNumRange(page, totalPage) {
        if(totalPage > page && page > 0) {
            return true
        } 
    }

    render() {
        const createUsers = this.props.users.map(info => {
            return <User 
                key={info.id} 
                userInfo={info} 
                onFollow={this.props.onFollow} 
                onUnfollow={this.props.onUnfollow}/>
        });
         
        const pages = Math.ceil(this.props.totalCounts / this.props.pageSize);
        let pagesArr = [this.props.focusPage];
        for(let i = 1; i <= 3; i++) {    
            if(this.checkNumRange(this.props.focusPage + i, pages)) {
                pagesArr.push(this.props.focusPage + i);
            }
            if(this.checkNumRange(this.props.focusPage - i, pages)) {
                pagesArr.unshift(this.props.focusPage - i);
            }
        }
       
        const pagesElem = pagesArr.map(page => {
            return <span 
                        key={page} 
                        className={page == this.props.focusPage ? style.focusPage : undefined} 
                        onClick={this.onChangePage.bind(this, page)}
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
   
}   

export default FindUsers;