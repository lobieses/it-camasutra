import React from 'react';
import {Field, reduxForm} from "redux-form";
import {connect} from 'react-redux';
import {login} from '../../../Redux/auth-reducer';
import {Redirect} from "react-router-dom";
import {Input} from '../../common/FormControls/FormControls';
import {isEmail} from "../../../utils/validator/validator";
import style from '../../common/FormControls/FormControls.module.css';

const LoginForm = ({error, handleSubmit, captchaUrl}) => {
    const hasSummaryError = error !== undefined;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field type="text" placeholder='Email' component={Input} name='email' validate={[isEmail]}/>
            </div>
            <div>
                <Field type="password" placeholder='Password' component={Input} name='password'/>
            </div>
            <div>
                <Field type="checkbox" placeholder='RememberMe' component='input' name='rememberMe'/> rememberMe
            </div>
            {captchaUrl &&
                <div>
                    <img src={captchaUrl} alt="captchaImage"/>
                    <Field placeholder='Symbols from image' component='input' name='captcha'/>
                </div>
            }
            <div>
                <span className={hasSummaryError ? style.formSummaryError : null}>
                    {hasSummaryError ? error : ''}
                </span>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

let LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = ({login, isAuth, captchaUrl}) => {
    const onSubmit = (formData) => {
        const {email, password, rememberMe = false, captcha = null} = formData;
        login(email, password, rememberMe, captcha);
    }

    if(isAuth) {
       return <Redirect to={'/profile'} />
    }


    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm
                onSubmit={onSubmit}
                captchaUrl={captchaUrl}
            />
        </div>

    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
});

const connectLogin = connect(mapStateToProps, {login})(Login);

export default connectLogin;