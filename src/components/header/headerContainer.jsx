import React from 'react';
import Header from "./header";
import {connect} from "react-redux";
import {
        setUserData,
        getAuthUserData
    } from "../../Redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
      this.props.getAuthUserData();
    }

    render() {
        return <Header
            userId={this.props.userId}
            email={this.props.email}
            login={this.props.login}
            isAuth={this.props.isAuth}
        />
    }
}
const mapStateToProps = (state) => ({
    userId: state.auth.userId,
    email: state.auth.email,
    login: state.auth.login,
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {setUserData, getAuthUserData})(HeaderContainer);