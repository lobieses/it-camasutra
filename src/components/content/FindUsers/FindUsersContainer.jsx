import {connect} from 'react-redux';
import FindUsers from './FindUsers';
import {followAC, unfollowAC, setUsersAC, setPageAC, setTotalCountsAC} from './../../../Redux/findUsers-reducer';


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
            dispatch(setPageAC(page))
        },
        onFollow: (id) => {
            dispatch(followAC(id));
        },
        onUnfollow: (id) => {
            dispatch(unfollowAC(id));
        },
        
    }
}

const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsers);

export default FindUsersContainer;