import {connect} from 'react-redux';
import FindUsers from './FindUsers';
import {followAC, unfollowAC, setUsersAC} from './../../../Redux/findUsers-reducer';

const mapStateToProps = (state) => {
    return {
        findUsersPage: state.findUsersPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onFollow: (id) => {
            dispatch(followAC(id));
        },
        onUnfollow: (id) => {
            dispatch(unfollowAC(id));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}

const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsers);

export default FindUsersContainer;