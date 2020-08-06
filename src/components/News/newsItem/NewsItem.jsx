import React from 'react';
import s from './NewsItem.module.css'
import commentPhoto from '../../../img/comment2.svg'
import likesPhoto from '../../../img/heart.svg'
import likesPhotoActive from '../../../img/heart_active.svg'
import userPhoto from '../../../img/user (1).svg'
import {Element} from '../../common/FormControl/FormControl';
import { reduxForm, Field } from 'redux-form';

const NewsItem = (props) => {

    let onAddComment = (data) => {
        props.addComment(props.post.id, data.comment);
        props.updateCommentCount(props.post.id)
        props.reset('commentForm')
    }

    let onAddLike = (id) => {
        props.updateLikeCount(id)
    }

    return (
        <div className={s.newsItem}>
            <span>
                <span><img src={userPhoto} alt="PHOTO" className={s.userImg}/></span>
                <span className={s.user}> User - {props.post.id} </span>
            </span>
            <span className={s.newsTitle}> {props.post.title} </span>
            <div><img src={props.post.photo} alt="Photo"/></div>
            <div className={s.reviewCount}> 
                <span>
                    {
                    props.post.liked 
                    ? <img src={likesPhotoActive} alt="PHOTO" className={s.reviewIcon} onClick={() => onAddLike(props.post.id)}/>
                    : <img src={likesPhoto} alt="PHOTO" className={s.reviewIcon} onClick={() => onAddLike(props.post.id)}/>
                } {props.post.likesCount} 
                </span>
                 <span> 
                    <img src={commentPhoto} alt="PHOTO" className={s.reviewIcon}/>{props.post.CommentsCount} 
                 </span> 
            </div>
            <CommentFormRedux onSubmit={onAddComment}/>
            <div className={s.commentsArea}>
                { props.post.comments.map(item => (
                    <div className={s.commentsItem} key={item.userId}>
                        <span>User - {item.userId} </span>
                        <span>{item.text}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

const Input = Element('input');

const CommentForm = (props) => {
    return <form className={s.inputComment} onSubmit={props.handleSubmit}>
        <Field placeholder='Write your comment' name='comment' component = {Input}/>
        <button type = 'submit' className='btn'>Send</button>
    </form>
}

const CommentFormRedux = reduxForm({form: 'commentForm'})(CommentForm)

export default NewsItem;