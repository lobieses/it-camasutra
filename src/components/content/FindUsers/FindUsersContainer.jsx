import React from 'react';
import {connect} from 'react-redux';
import FindUsers from './FindUsers';
import {
        follow,
        unFollow,
        setUsers,
        setPage,
        setTotalCounts,
        toggleFetching,
        toggleFollowingInProgress
    } from '../../../Redux/findUsers-reducer';
import Preloader from '../../common/preloader';
import usersAPI from '../../../api/api';

class FindUsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleFetching(true);
        usersAPI.getUsers().then(data => {
                this.props.toggleFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalCounts(data.totalCount);
            });
    }
    
    onChangePage(page) {
        this.props.toggleFetching(true);
        this.props.setPage(page);
        usersAPI.getUsers(this.props.pageSize,page).then(data => {
                this.props.toggleFetching(false);
                this.props.setUsers(data.items);
            });
    }

    follow(id) {
        usersAPI.follow(id).then(data => {
            if(data.resultCode === 0) {
                this.props.toggleFollowingInProgress(id, false);
                this.props.follow(id);
            }
        })
    }

    unFollow(id) {
        usersAPI.unFollow(id).then(data => {
            if(data.resultCode === 0) {
                this.props.toggleFollowingInProgress(id, false);
                this.props.unFollow(id);
            }
        })
    }

    onFollowingInProgress(id, isFetching) {
        this.props.toggleFollowingInProgress(id, isFetching);
    }

    render() {
        return <>
            {this.props.fetching
            ? <Preloader />
            : <FindUsers     
                onChangePage={this.onChangePage.bind(this)}
                onFollow={this.follow.bind(this)}
                onUnFollow={this.unFollow.bind(this)}
                onFollowingInProgress={this.onFollowingInProgress.bind(this)}
                users={this.props.users}
                totalCounts={this.props.totalCounts}
                pageSize={this.props.pageSize}
                focusPage={this.props.focusPage}
                followingInProgress={this.props.followingInProgress}
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
        fetching: state.findUsersPage.isFetching,
        followingInProgress: state.findUsersPage.followingInProgress
    }
}


export default connect(mapStateToProps, {
    setUsers,
    setTotalCounts,
    setPage,
    follow,
    unFollow,
    toggleFetching,
    toggleFollowingInProgress
})(FindUsersContainer);

