import React from 'react';
import Header from "./header";
import {connect} from "react-redux";
import {
        logout,
    } from "../../Redux/auth-reducer";

class HeaderContainer extends React.Component {
    render() {
        return <Header
            onLogout={this.props.logout}
            login={this.props.login}
            isAuth={this.props.isAuth}
        />
    }
}
const mapStateToProps = (state) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {logout})(HeaderContainer);