import React, { useReducer } from 'react'
import sNews from '../../../News/newsItem/NewsItem.module.css'
import commentUserPhoto from '../../../../img/user22.jpg'
import {PostItemType} from "../../../../redux/profile_reducer";
import { AppStateType } from '../../../../redux/store-redux';
import { useSelector } from 'react-redux';
import Preloader from '../../../common/Preloader/Preloader';

type PropsType = {
    post: PostItemType
    avatarPhoto: string | null | undefined
}
const CommentsArea: React.FC<PropsType> = (props) => {

    return <div className={sNews.commentsArea}>
    { props.post.comments.map(item => (
        <div className={sNews.commentsItem} key={item.userId}>
            {
            item.photo 
                ? <img src={item.photo} alt="Photo" className={sNews.commentPhoto}/>
                : <img src={ props.avatarPhoto ?  props.avatarPhoto : commentUserPhoto} alt="Photo" className={sNews.commentPhoto}/>
            }
            <div>
                <span>{item.fullName}</span>
                <p style={{paddingLeft: '15px', margin: 0}}>{item.text}</p>
            </div>
        </div>
    ))}
</div>
}

export default CommentsArea