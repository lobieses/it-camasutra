import React from 'react';
import {Field, reduxForm} from "redux-form";
import {connect} from 'react-redux';
import {login} from '../../../Redux/auth-reducer';
import {Redirect} from "react-router-dom";
import {Input} from '../../common/FormControls/FormControls';
import {isEmail} from "../../../utils/validator/validator";
import style from '../../common/FormControls/FormControls.module.css';

const LoginForm = (props) => {
    const hasSummaryError = props.error !== undefined;

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type="text" placeholder='Email' component={Input} name='email' validate={[isEmail]}/>
            </div>
            <div>
                <Field type="password" placeholder='Password' component={Input} name='password'/>
            </div>
            <div>
                <Field type="checkbox" placeholder='RememberMe' component='input' name='rememberMe'/> rememberMe
            </div>
            <div>
                <span className={hasSummaryError ? style.formSummaryError : null}>
                    {hasSummaryError ? props.error : ''}
                </span>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

let LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        const {email, password, rememberMe = false} = formData;
        props.login(email, password, rememberMe)
    }

    if(props.isAuth) {
       return <Redirect to={'/profile'} />
    }


    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>

    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

const connectLogin = connect(mapStateToProps, {login})(Login);

export default connectLogin;