import React from 'react';
import Header from "./header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserData} from "../../Redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if(response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    this.props.setUserData(id, email, login);
                }
            });
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

export default connect(mapStateToProps, {setUserData})(HeaderContainer);