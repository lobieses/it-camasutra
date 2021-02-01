import React from 'react';
import {connect} from 'react-redux';
import FindUsers from './FindUsers';
import {followAC, unfollowAC, setUsersAC, setPageAC, setTotalCountsAC} from './../../../Redux/findUsers-reducer';
import * as axios from 'axios';

class FindUsersContainer extends React.Component {
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

    render() {
        return <FindUsers     
            onChangePage={this.onChangePage.bind(this)}
            onFollow={this.props.onFollow}
            onUnFollow={this.props.onUnFollow}
            users={this.props.users}
            totalCounts={this.props.totalCounts}
            pageSize={this.props.pageSize}
            focusPage={this.props.focusPage}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.findUsersPage.users,
        pageSize: state.findUsersPage.pageSize,
        focusPage: state.findUsersPage.focusPage,
        totalCounts: state.findUsersPage.totalCounts
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setTotalCounts: (totalCounts) => {
            dispatch(setTotalCountsAC(totalCounts));
        },
        setFocusPage: (page) => {
            dispatch(setPageAC(page));
        },
        onFollow: (id) => {
            dispatch(followAC(id));
        },
        onUnFollow: (id) => {
            dispatch(unfollowAC(id));
        },
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FindUsersContainer);

