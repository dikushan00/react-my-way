import React from 'react'
import style from './Users.module.css'
import photoUser from '../../img/user.svg'
import {NavLink} from "react-router-dom";
import { UserType } from '../../Types/Types';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../redux/store-redux';
import { follow, unfollow } from '../../redux/users_reducer';

const UserItem: React.FC<PropsType> = ({user}) => {

    const switch_follow = (followed: boolean, userId: number) => {
        if (followed) {
            dispatch(unfollow(userId))
        } else {
            dispatch(follow(userId))
        }
    }

    const dispatch = useDispatch()
    const toggleProgressArr = useSelector((state: AppStateType) => state.usersPage.toggleProgressArr)

    return <div className={style.user}>
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
            </div>
}

export default UserItem

type PropsType = {
    user: UserType
}