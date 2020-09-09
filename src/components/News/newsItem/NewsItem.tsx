import React, { useState } from 'react';
import s from './NewsItem.module.css'
import commentPhoto from '../../../img/comment2.svg'
import likesPhoto from '../../../img/heart.svg'
import commentUserPhoto from '../../../img/user22.jpg'
import likesPhotoActive from '../../../img/heart_active.svg'
import userPhoto from '../../../img/user(1).svg'
import {Element} from '../../common/FormControl/FormControl';
import { reduxForm, Field, InjectedFormProps } from 'redux-form';
import {NewsItemType} from '../../../redux/news_reducer'

const NewsItem: React.FC<PropsType> = (props) => {

    const [isBigMode, setBigMode] = useState(false)

    let onAddComment = (data: any) => {
        if(data['comment' + props.post.id]){
            props.addComment(props.post.id, data['comment' + props.post.id]);
            props.updateCommentCount(props.post.id)
            props.reset('commentForm')
        }
    }

    let onAddLike = (id: number) => {
        props.updateLikeCount(id)
    }

    if(isBigMode) {
        document.body.classList.add('pop_overflow')
    } else {
        document.body.classList.remove('pop_overflow')
    }

    return (
        <div className={s.newsItem}>
            <div className = {s.newsItemContent} onClick = {() => setBigMode(true)}>
                <span style = {{display: "flex", alignItems: "center"}}>
                    <span>
                        {
                        props.post.avatar 
                            ? <img src={props.post.avatar} alt="PHOTO" className={s.userImg}/>
                            : <img src={userPhoto} alt="PHOTO" className={s.userImg}/>
                        }
                    </span>
                    <span className={s.user}>{props.post.fullName}</span>
                </span>
                <span className={s.newsTitle}> {props.post.title} </span>
                <div>
                    <img src={props.post.photo} alt="Photo"/>
                </div>
            </div>
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
            <CommentFormRedux onSubmit={onAddComment} id = {props.post.id}/>
            <NewsCommentsArea post = {props.post} avatarPhoto = {props.avatarPhoto}/>
            {
                isBigMode && <NewsItemBigMode post = {props.post} avatarPhoto = {props.avatarPhoto} onAddLike = {onAddLike} isBigMode = {isBigMode} setBigMode = {setBigMode} onAddComment = {onAddComment} />
            }
        </div>
    );
}

const NewsItemBigMode: React.FC<BigModeType> = ({post, onAddLike, isBigMode, setBigMode, onAddComment, avatarPhoto}) => {

    return <>
    <div id="overlay" className = {isBigMode ? "overlay" : ''} onClick={() => setBigMode(false)}></div>
    <div className = {isBigMode  ? s.BigModeArea : ''} id = {s.BigModeArea}>
        <div style = {{ display: "flex", alignItems: "center"}} >
            <img src={post.photo} alt="PHOTO" className = {s.postImg}/>
        </div>
        <div className = {s.rightContent} >
            <span style = {{display: "flex", alignItems: "center", height: "60px", borderBottom: "1px solid #ccc"}}>
                <span>
                    {
                    post.avatar 
                        ? <img src={post.avatar} alt="PHOTO" className={s.userImg}/>
                        : <img src={userPhoto} alt="PHOTO" className={s.userImg}/>
                    }
                </span>
                <span className={s.user}>{post.fullName}</span>
            </span>
            <div className={s.reviewCount} style = {{border: 0}}> 
                <span>
                    {
                    post.liked 
                        ? <img src={likesPhotoActive} alt="PHOTO" className={s.reviewIcon} onClick={() => onAddLike(post.id)}/>
                        : <img src={likesPhoto} alt="PHOTO" className={s.reviewIcon} onClick={() => onAddLike(post.id)}/>
                    } {post.likesCount} 
                </span>
            </div>
            <CommentFormRedux onSubmit={ onAddComment } id = {post.id}/>
            <NewsCommentsArea post = {post} avatarPhoto = {avatarPhoto}/>
        </div>
    </div>
    <span className = {s.closeBig} onClick={() => setBigMode(false)}></span>
    </>
}

const NewsCommentsArea: React.FC<NewsCommentsAreaType> = ({post, avatarPhoto}) => {

    return <div className={s.commentsArea}>
    { post.comments.map(item => (
        <div className={s.commentsItem} key={item.userId}>
            {
            item.photo 
                ? <img src={item.photo } alt="Photo" className={s.commentPhoto}/>
                : <img src={ avatarPhoto ? avatarPhoto : commentUserPhoto } alt="Photo" className={s.commentPhoto}/>
            }
          <div>
                <span>{item.fullName}</span>
                <p style={{paddingLeft: '15px', margin: 0}}>{item.text}</p>
            </div>
        </div>
    ))}
</div>
}

const Input = Element('input');

const CommentForm: React.FC<InjectedFormProps<CommentFormValuesType, CommentFormPropsType> & CommentFormPropsType> = (props) => {
    return <form className={s.inputComment} onSubmit={props.handleSubmit}>
        <Field placeholder='Write your comment' name={'comment'  + props.id as CommentFormValuesKeys} component = {Input}/>
        <button type = 'submit' className='btn'>Send</button>
    </form>
}

const CommentFormRedux = reduxForm<CommentFormValuesType, CommentFormPropsType>({form: 'commentForm'})(CommentForm)

export default NewsItem;



type CommentFormValuesType = {
    comment: string
}

type CommentFormPropsType = {
    id: number
}

type NewsCommentsAreaType = {
    post: NewsItemType
    avatarPhoto: string | null | undefined
}

type BigModeType = {
    post: NewsItemType
    isBigMode: boolean
    avatarPhoto: string | null | undefined

    onAddComment: (data: {comment: string}) => void
    setBigMode: (n: boolean) => void
    onAddLike: (id: number) => void
}

type PropsType = {
    post: NewsItemType
    avatarPhoto: string | null | undefined
    
    addComment: (id: number, data: string) => void
    updateCommentCount: (id: number) => void
    updateLikeCount: (id: number) => void
    reset: (form: string) => void
}

type CommentFormValuesKeys = Extract<keyof CommentFormValuesType, string>