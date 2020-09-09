import React from 'react'
import {Field, reduxForm, InjectedFormProps} from "redux-form";
import {connect} from "react-redux";
import {checkLoginMe} from "../../redux/header_reducer";
import {Redirect} from "react-router-dom";
import {required} from "../utils/Validators/validators";
import {Element} from "../common/FormControl/FormControl";
import style from "../common/FormControl/FormControl.module.css"
import s from "./Login.module.css"
import { AppStateType } from '../../redux/store-redux';


type MapStatePropsType = {
    isAuth: boolean
    captcha: string | null
}

type MapDispatchPropsType = {
    checkLoginMe: (email: string | null, password: string | null, rememberMe: boolean, captcha: string | null) => Promise<void>
}

type LoginPropsType = MapDispatchPropsType & MapStatePropsType

export type LoginFormValuesType = {
    captcha: string | null
    rememberMe: boolean
    password: string | null
    email: string | null
}

type LoginFormValuesTypeKeys = Extract<keyof LoginFormValuesType, string>



const Login: React.FC<LoginPropsType> = (props) => {

    const onSubmit = (inputData: LoginFormValuesType) => {
        props.checkLoginMe(inputData.email, inputData.password, inputData.rememberMe, inputData.captcha);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return (
        <div className='pageArea'>
            <h1>Login</h1>
            <ReduxForm onSubmit={onSubmit} captcha = {props.captcha}/>
        </div>
    )
}



const Input = Element("input");

type LoginFormPropsType = {
    captcha: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormPropsType> & LoginFormPropsType > = (props) => {

    return (
        <form onSubmit={props.handleSubmit} className={s.form}>
            <div>
                <label htmlFor="email">Email</label>
                <Field name={'email'}  placeholder='Email..' component={Input} validate={[required]} id='email'/>
            </div>
            <div>
                <label htmlFor="pass">Password</label>
                <Field name={'password'} placeholder='Password..' component={Input} id='pass' validate={[required]} type='password'/>
            </div>
            <div style={{display: 'flex'}}>
                <label htmlFor="remember">Remember me</label>
                <Field name={'rememberMe'} type={'checkbox'} component={Input} id='remember'/>
            </div>

            {props.captcha && <img src={props.captcha} alt="Captcha"/>}
            {props.captcha && <Field name={'captcha'} component={Input} id='captcha'/>}

            <div>
                <button className='btn'>Login</button>
            </div>
            {props.error && <div className={style.commonError}>{props.error}</div>}
        </form>
    )
}

const ReduxForm = reduxForm<LoginFormValuesType, LoginFormPropsType>({
    form: 'login'
})(LoginForm)

let mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    captcha: state.auth.captcha
})

export default connect(mapStateToProps, {checkLoginMe})(Login)