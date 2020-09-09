import React, { useState } from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import userPhoto from '../../img/user(1).svg'
import logoImg from '../../img/logo.png'
import {ProfileInitialStateType} from "../../redux/profile_reducer";

const Header: React.FC<PropsType> = (props) => {

    const [isLogInfoMode, setLogInfoMode] = useState(false)

    const logout = () => {
        props.logoutMe()
    }

    function onClickClose(elem: HTMLElement) {
        function outsideClickListener(event: any) {
            if (elem && !elem.contains(event.target) && isVisible(elem)) { 
                setLogInfoMode(false)
                 document.removeEventListener('click', outsideClickListener);
            }
        }
        document.addEventListener('click', outsideClickListener)
    }
    
    document.addEventListener("click", () => {  
        const accountDrop = document.getElementById("accountDrop"); 
        //@ts-ignore
        onClickClose(accountDrop)
    })

    function isVisible(elem: HTMLElement) {
        return !!elem && !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
    }

    return <header className={s.header}>
        <NavLink className="logo" to='/'><img src={logoImg} /></NavLink>
        <div className={s.authArea} id="Drop" style={{height: "100%"}}>
            { props.isAuth
                ? <div className={s.accountInfo} onClick = {() => setLogInfoMode(true)}>
                    { props.state.photos 
                        ? props.state.photos.large && <img src={props.state.photos.large} className={s.userImg}/> 
                        : <img src={userPhoto} className={s.userImg}/>}
                    {props.login}
                    {
                        isLogInfoMode 
                        && <div className={s.accountDrop} id="accountDrop">
                            <NavLink to="/profile" className={s.login}>{props.login}</NavLink>
                            <button onClick={logout} className = "btn" style={{marginTop: "15px"}}>logout</button>
                        </div>
                    }
                </div>
                : <NavLink to="/login">Login</NavLink> }
        </div>

    </header>
}

export default Header;



type PropsType = {
    logoutMe: () => void
    state: ProfileInitialStateType
    isAuth: boolean
    login: string | null
}