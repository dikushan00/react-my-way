import React from 'react';
import s from './Header.module.css';
import {NavLink, Redirect} from "react-router-dom";
import userPhoto from '../../img/user(1).svg'
import logoImg from '../../img/logo.png'

const Header = (props) => {

    let logout = () => {
        props.logoutMe()
    }

    return <header className={s.header}>
        <NavLink className="logo" to='/'><img src={logoImg} /></NavLink>
        <div className={s.authArea}>
            { props.isAuth
                ? <div className={s.accountInfo}>
                    {props.photo ? <img src={props.photo} className={s.userImg}/> : <img src={userPhoto} className={s.userImg}/>}
                    {props.login}
                    <div className={s.accountDrop}>
                        <p>{props.login}</p>
                        <button onClick={logout} className = "btn">logout</button>
                    </div>
                    </div>
                : <NavLink to="/login">Login</NavLink> }
        </div>

    </header>
}

export default Header;