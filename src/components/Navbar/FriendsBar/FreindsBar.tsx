import React from 'react'
import style from '../FriendsBar/FreindsBar.module.css'
import { UserType } from '../../../Types/Types'
import userPhoto from '../../../img/user(1).svg'
import { NavLink } from 'react-router-dom'

type PropsType = {
    friends: Array<UserType>
}

const FriendsBar: React.FC<PropsType> = ({friends}) => {

    return <div className={style.FriendsBar}>
        <h3 style={{textAlign: 'center'}}>Friends</h3>
        <div className={style.FriendsBarContent}>
        {
            friends.map((item, i) => {
                if(i<5){
                    return <div key={item.id}><NavLink to={`/profile/${item.id}`} className={style.item}>
                        {
                        item.photos.large 
                            ? <img src={item.photos.large as string | undefined} style={{width: '40px'}} alt="User"/>
                            : <img src={userPhoto} style={{width: '40px'}} alt="User"/>
                        }
                        <span className={style.itemName} style={{display: 'block', fontSize: '13px'}}>
                            {item.name}
                        </span>
                    </NavLink>
                    </div>
                }
            })
        }
        </div>
    </div>
}

export default FriendsBar