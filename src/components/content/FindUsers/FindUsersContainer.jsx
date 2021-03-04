import React from 'react';
import {connect} from 'react-redux';
import FindUsers from './FindUsers';
import {
        getUsers,
        follow,
        unFollow
    } from '../../../Redux/findUsers-reducer';
import Preloader from '../../common/Preloader/preloader';

class FindUsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers();
    }
    
    onChangePage(page) {
        this.props.getUsers(this.props.pageSize, page);
    }

    follow(id) {
        this.props.follow(id);
    }

    unFollow(id) {
        this.props.unFollow(id);
    }


    render() {
        return <>
            {this.props.fetching
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
        users: state.findUsersPage.users,
        pageSize: state.findUsersPage.pageSize,
        focusPage: state.findUsersPage.focusPage,
        totalCounts: state.findUsersPage.totalCounts,
        followingInProgressUsers: state.findUsersPage.followingInProgressUsers,
        fetching: state.findUsersPage.isFetching
    }
}


export default connect(mapStateToProps, {
    getUsers,
    follow,
    unFollow
})(FindUsersContainer);

