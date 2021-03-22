import React from 'react';
import {connect} from 'react-redux';
import FindUsers from './FindUsers';
import {
        requestUsers,
        follow,
        unFollow
    } from '../../../Redux/findUsers-reducer';
import Preloader from '../../common/Preloader/preloader';
import {
    getFocusPage,
    getFollowingInProgressUsers, getIsFetching,
    getPageSize, getSuperUsers,
    getTotalCounts,
    getUsers
} from "../../../Redux/user-selectors";

class FindUsersContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers();
    }
    
    onChangePage(page) {
        this.props.requestUsers(this.props.pageSize, page);
    }

    follow(id) {
        this.props.follow(id);
    }

    unFollow(id) {
        this.props.unFollow(id);
    }


    render() {
        console.log('USERS')
        return <>
            {this.props.isFetching
            ? <Preloader />
            : <FindUsers     
                onChangePage={this.onChangePage.bind(this)}
                onFollow={this.follow.bind(this)}
                onUnFollow={this.unFollow.bind(this)}
                users={this.props.users}
                totalCounts={this.props.totalCounts}
                pageSize={this.props.pageSize}
                focusPage={this.props.focusPage}
                followingInProgressUsers={this.props.followingInProgressUsers}
             />
            }
        </>
        
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        focusPage: getFocusPage(state),
        totalCounts: getTotalCounts(state),
        followingInProgressUsers: getFollowingInProgressUsers(state),
        isFetching: getIsFetching(state),
        superUsers: getSuperUsers(state)
    }
}


export default connect(mapStateToProps, {
    requestUsers,
    follow,
    unFollow
})(FindUsersContainer);

