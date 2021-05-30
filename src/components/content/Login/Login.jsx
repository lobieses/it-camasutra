import React, {useState} from 'react';
import {connect} from 'react-redux';
import {login} from '../../../Redux/auth-reducer';
import {Redirect} from "react-router-dom";

import {Formik, Field, Form} from 'formik';
import {Input} from '../../common/FormControls/FormControls';
import styleForReduxFormErrors from '../../common/FormControls/FormControls.module.css';

import style from './Login.module.css';

const LoginFormFormik = (props) => {
    return (
        <div>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    rememberMe: false,
                    captcha: null
                }}
                onSubmit={props.onSubmit}
            >
                {({
                      handleSubmit,
                  }) => (
                    <Form onSubmit={handleSubmit}>
                        <div className={style.emailField}>
                            <Field name="email" placeholder="Email" component={Input}/>
                        </div>
                        <div className={style.passwordField}>
                            <Field name="password" placeholder="Password"  type="password"component={Input}/>
                        </div>
                        <div className={style.rememberMeField}>
                            <Field name="rememberMe" placeholder="RememberMe" type="checkbox" component={Input}/>
                            <span>rememberMe</span>
                        </div>
                        {props.captchaUrl &&
                        <div className={style.captchaField}>
                            <div className={style.captchaImage}>
                                <img src={props.captchaUrl} alt="captchaImage"/>
                            </div>
                            <Field name="captcha" placeholder="Symbols from image" component={Input}/>
                        </div>
                        }
                        <div className={style.summaryError}>
                            <span
                                className={props.hasError ? styleForReduxFormErrors.formSummaryError : null}>
                                {props.hasError ? props.hasError : ''}
                            </span>
                        </div>
                        <div className={style.submitButton}>
                            <button type="submit">
                                Send
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

const Login = ({login, isAuth, captchaUrl}) => {

    const [hasError, setHasError] = useState(undefined);

    const onSubmit = (formData) => {
        const {email, password, rememberMe, captcha} = formData;
        login(email, password, rememberMe, captcha)
            .then((hasErrors) => {
                if(hasErrors) {
                    setHasError(hasErrors);
                }
            });
    }

    if(isAuth) {
       return <Redirect to={'/profile'} />
    }

    return (
        <div className={style.container}>
            <h1 className={style.namePage}>Login</h1>
            <LoginFormFormik
                hasError={hasError}
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