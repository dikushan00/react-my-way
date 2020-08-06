import React from 'react'
import style from './Users.module.css'
import photoUser from '../../img/user.svg'
import {NavLink} from "react-router-dom";

const UserItem = ({user, switch_follow, toggleProgressArr}) => {

    return <div key={user.id} className={style.user}>
                <NavLink to={"/profile/" + user.id}>
                        <span>
                            <img className={style.avaImg}
                                src={user.photos.small !== null ? user.photos.small : photoUser}/>
                        </span>
                </NavLink>
                <span className={style.userInfo}>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                    <button className={style.btn + ' ' + (user.followed ? style.btnBlue : style.btnRed)} onClick={() => switch_follow(user.followed, user.id)}
                            disabled={toggleProgressArr.some(id => id === user.id)}>{user.followed ? "Unfollow" : "Follow"}
                    </button>
                </span>

                {/*<span>*/}
                {/*    <div>{"user.location.city"}</div>*/}
                {/*    <div>{"user.location.country"}</div>*/}
                {/*</span>*/}
            </div>
}

export default UserItem