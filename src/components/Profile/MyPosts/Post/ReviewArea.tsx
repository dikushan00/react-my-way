import React from 'react'
import sNews from '../../../News/newsItem/NewsItem.module.css'
import commentPhoto from '../../../../img/comment2.svg'
import likesPhoto from '../../../../img/heart.svg'
import likesPhotoActive from '../../../../img/heart_active.svg'
import {PostItemType} from "../../../../redux/profile_reducer";

type PropsType = {
    onAddLike: (id: number) => void
    id: number
    post: PostItemType
}
const ReviewArea: React.FC<PropsType> = ({onAddLike, id, ...props}) => {

    return <div className={sNews.reviewCount}> 
    <span>
        {
        props.post.liked 
        ? <img src={likesPhotoActive} alt="PHOTO" className={sNews.reviewIcon} onClick={() => onAddLike(id)}/>
        : <img src={likesPhoto} alt="PHOTO" className={sNews.reviewIcon} onClick={() => onAddLike(id)}/>
    } {props.post.likesCount !== 0 && props.post.likesCount} 
    </span>
     <span> 
        <img src={commentPhoto} alt="PHOTO" className={sNews.reviewIcon}/>{props.post.CommentsCount !== 0 && props.post.CommentsCount} 
     </span> 
</div>
}

export default ReviewArea