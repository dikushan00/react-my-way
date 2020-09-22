import React, { Props } from 'react';
import s from './Navbar.module.css';
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import { AppStateType } from '../../redux/store-redux';
import FriendsBar from './FriendsBar/FreindsBar';

const Navbar: React.FC = () => {

    const navState = useSelector((state: AppStateType) => state.navbar.navData)

    return <nav className={s.nav}>
        {navState.map((data) => (
            <div className={s.item} key={data.id}>
                <NavLink to={'/' + data.href} className={s.itemLink}>
                    <span className={s.linkWrap}>
                        <span className={s.navbarItemImg + ' ' + s[data.name.toLowerCase().toString()]}></span>
                        <span className={s.linkName}>{data.name}</span>
                    </span>
                </NavLink>
            </div>
        ))}
        <FriendsBar />
    </nav>
}

export default Navbar;