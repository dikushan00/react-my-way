import React, { Props } from 'react';
import s from './Navbar.module.css';
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import {NavDataItemType} from "../../redux/navbar_reducer";
import { AppStateType } from '../../redux/store-redux';
import FriendsBar from './FriendsBar/FreindsBar';
import { UserType } from '../../Types/Types';

type PropsType = {
    state: Array<NavDataItemType>
    friends: Array<UserType>
}

const Navbar: React.FC<PropsType> = ({state, friends}) => {
    return <nav className={s.nav}>
        {state.map((data) => (
            <div className={s.item} key={data.id}>
                <NavLink to={'/' + data.href} className={s.itemLink}>
                    <span className={s.linkWrap}>
                        <span className={s.navbarItemImg + ' ' + s[data.name.toLowerCase().toString()]}></span>
                        <span className={s.linkName}>{data.name}</span>
                    </span>
                </NavLink>
            </div>
        ))}
        <FriendsBar friends = {friends}/>
    </nav>
}

let mapStateToProps = (state: AppStateType) => ({
    state: state.navbar.navData,
    friends: state.usersPage.friends
})

export const NavbarContainer = connect(mapStateToProps)(Navbar)

export default Navbar;