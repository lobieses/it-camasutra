import React from 'react';
import {connect} from 'react-redux';
import FindUsers from './FindUsers';
import {
        requestUsers,
        follow,
        unFollow
    } from '../../../Redux/findUsers-reducer';
import Preloader from '../../common/Preloader/preloader';
import {GlobalStateType} from "../../../Redux/store";
import {userType} from "../../../types/types";

type PropsType = MapStateToPropsType & MapDispatchToPropsType

class FindUsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.requestUsers(this.props.pageSize);
    }
    
    onChangePage(page: number) {
        this.props.requestUsers(this.props.pageSize, page);
    }

    follow(id: number) {
        this.props.follow(id);
    }

    unFollow(id: number) {
        this.props.unFollow(id);
    }


    render() {
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
                isAuth={this.props.isAuth}
             />
            }
        </>
        
    }
}

type MapStateToPropsType = {
    users: Array<userType>,
    pageSize: number,
    focusPage: number,
    totalCounts: number,
    followingInProgressUsers: Array<number>,
    isFetching: boolean,
    isAuth: boolean
}

type MapDispatchToPropsType = {
    requestUsers: (pageSize: number, currentPage?: number) => any
    follow: (id: number) => any
    unFollow: (id: number) => any
}


const mapStateToProps = (state: GlobalStateType): MapStateToPropsType => {
    return {
        users: state.findUsersPage.users,
        pageSize: state.findUsersPage.pageSize,
        focusPage: state.findUsersPage.focusPage,
        totalCounts: state.findUsersPage.totalCounts,
        followingInProgressUsers: state.findUsersPage.followingInProgressUsers,
        isFetching: state.findUsersPage.isFetching,
        isAuth: state.auth.isAuth
    }
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, GlobalStateType>(
    mapStateToProps, {requestUsers, follow, unFollow}
    )(FindUsersContainer);

