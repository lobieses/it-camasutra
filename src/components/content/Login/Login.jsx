import React from 'react';
import {Field, reduxForm} from "redux-form";
import {connect} from 'react-redux';
import {login} from '../../../Redux/auth-reducer';
import {Redirect} from "react-router-dom";
import {Input} from '../../common/FormControls/FormControls';
import {isEmail} from "../../../utils/validator/validator";
import styleForReduxFormErrors from '../../common/FormControls/FormControls.module.css';
import style from './Login.module.css';

const LoginForm = ({error, handleSubmit, captchaUrl}) => {
    const hasSummaryError = error !== undefined;

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className={style.emailField}>
                    <Field type="text" placeholder='Email' component={Input} name='email' validate={[isEmail]}/>
                </div>
                <div className={style.passwordField}>
                    <Field type="password" placeholder='Password' component={Input} name='password'/>
                </div>
                <div className={style.rememberMeField}>
                    <Field type="checkbox" placeholder='RememberMe' component='input' name='rememberMe'/><span>rememberMe</span>
                </div>
                {captchaUrl &&
                <div className={style.captchaField}>
                    <div className={style.captchaImage}>
                        <img src={captchaUrl} alt="captchaImage"/>
                    </div>
                    <Field placeholder='Symbols from image' component='input' name='captcha'/>
                </div>
                }
                <div className={style.summaryError}>
                    <span className={hasSummaryError ? styleForReduxFormErrors.formSummaryError : null}>
                        {hasSummaryError ? error : ''}
                    </span>
                </div>
                <div className={style.submitButton}>
                    <button>Login</button>
                </div>
            </form>
        </div>

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
        <div className={style.container}>
            <h1 className={style.namePage}>Login</h1>
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