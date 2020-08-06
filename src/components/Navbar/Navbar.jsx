import React from 'react';
import s from './Navbar.module.css';
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";

const Navbar = ({state}) => {
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
    </nav>
}

let mapStateToProps = (state) => ({
    state: state.navbar.navData
})

export const NavbarContainer = connect(mapStateToProps)(Navbar)

export default Navbar;