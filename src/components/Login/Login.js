import React from 'react'
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {checkLoginMe} from "../../redux/header_reducer";
import {Redirect} from "react-router-dom";
import {maxLengthCreater, required} from "../utils/Validators/validators";
import {Element} from "../common/FormControl/FormControl";
import style from "../common/FormControl/FormControl.module.css"
import s from "./Login.module.css"


const Login = (props) => {

    const onSubmit = (inputData) => {
        props.checkLoginMe(inputData.email, inputData.password, inputData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return (
        <div className='pageArea'>
            <h1>Login</h1>
            <ReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

let maxLength15 = maxLengthCreater(15);
const Input = Element("input");

const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit} className={s.form}>
            <div>
                <label htmlFor="email">Email</label>
                <Field name={'email'}  placeholeder='email..' component={Input} validate={[required]} id='email'/>
            </div>
            <div>
                <label htmlFor="pass">Password</label>
                <Field name={'password'} placeholeder='password..' component={Input} id='pass' validate={[required]} type='password'/>
            </div>
            <div style={{display: 'flex'}}>
                <label htmlFor="remember">Remember me</label>
                <Field name={'rememberMe'} type={'checkbox'} component={Input} id='remember'/>
            </div>
            <div>
                <button className='btn'>Login</button>
            </div>
            {props.error && <div className={style.commonError}>{props.error}</div>}
        </form>
    )
}

const ReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, {checkLoginMe})(Login)