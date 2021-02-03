import React from 'react';
import {connect} from 'react-redux';
import FindUsers from './FindUsers';
import {
        follow,
        unFollow,
        setUsers,
        setPage,
        setTotalCounts,
        setFetching
    } from './../../../Redux/findUsers-reducer';
import * as axios from 'axios';
import Preloader from './../../common/preloader';

class FindUsersContainer extends React.Component {
    componentDidMount() {
        this.props.setFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.focusPage}`)
            .then(responce => {
                this.props.setFetching(false);
                this.props.setUsers(responce.data.items);
                this.props.setTotalCounts(responce.data.totalCount);
            });
    }
    
    onChangePage(page) {
        this.props.setFetching(true);
        this.props.setPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`)
            .then(responce => {
                this.props.setFetching(false);
                this.props.setUsers(responce.data.items);
            });
    }

    render() {
        return <>
            {this.props.fetching
            ? <Preloader />
            : <FindUsers     
                onChangePage={this.onChangePage.bind(this)}
                onFollow={this.props.follow}
                onUnFollow={this.props.unFollow}
                users={this.props.users}
                totalCounts={this.props.totalCounts}
                pageSize={this.props.pageSize}
                focusPage={this.props.focusPage}
             />
            }
        </>
        
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.findUsersPage.users,
        pageSize: state.findUsersPage.pageSize,
        focusPage: state.findUsersPage.focusPage,
        totalCounts: state.findUsersPage.totalCounts,
        fetching: state.findUsersPage.isFetching
    }
}


export default connect(mapStateToProps, {
    setUsers,
    setTotalCounts,
    setPage,
    follow,
    unFollow,
    setFetching
})(FindUsersContainer);

