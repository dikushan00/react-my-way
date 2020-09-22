import React, { useState } from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import userPhoto from '../../img/user(1).svg'
import logoImg from '../../img/logo.png'
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../redux/store-redux';
import { logoutMe } from '../../redux/header_reducer';
import MusicPlayer from './MusicPlayer';
import HeaderSearchForm from './HeaderSearchForm';

const Header: React.FC = () => {

    const dispatch = useDispatch()
    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)
    const photos = useSelector((state: AppStateType) => state.profilePage.photos)
    const login = useSelector((state: AppStateType) => state.auth.login)
    const [isLogInfoMode, setLogInfoMode] = useState(false)

    const logout = () => {
        dispatch(logoutMe())
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
        <HeaderSearchForm />
        <MusicPlayer />
        <div className={s.authArea} id="Drop" style={{height: "100%"}}>
            { isAuth
                ? <div className={s.accountInfo} onClick = {() => setLogInfoMode(true)}>
                    { photos 
                        ? photos.large && <img src={photos.large} className={s.userImg}/> 
                        : <img src={userPhoto} className={s.userImg}/>}
                    {login}
                    {
                        isLogInfoMode 
                        && <div className={s.accountDrop} id="accountDrop">
                            <NavLink to="/profile" className={s.login}>{login}</NavLink>
                            <button onClick={logout} className = "btn" style={{marginTop: "15px"}}>logout</button>
                        </div>
                    }
                </div>
                : <NavLink to="/login">Login</NavLink> }
        </div>

    </header>
}

export default Header;