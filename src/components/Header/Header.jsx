import React from 'react';
import s from './Header.module.css';
import {NavLink, Redirect} from "react-router-dom";
import userPhoto from '../../img/user (1).svg'

const Header = (props) => {

    let logout = () => {
        props.logoutMe()
    }

    return <header className={s.header}>
        <a className="logo"><img src='https://www.freelogodesign.org/Content/img/logo-ex-7.png' /></a>
        <div className={s.authArea}>
            { props.isAuth
                ? <div className={s.accountInfo}>
                    {props.photo ? <img src={props.photo} /> : <img src={userPhoto}/>}
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