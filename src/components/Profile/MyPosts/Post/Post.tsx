import React from 'react';
import s from './Post.module.css';
import sNews from '../../../News/newsItem/NewsItem.module.css'
import userPhoto from '../../../../img/user.svg'
import {Element} from '../../../common/FormControl/FormControl';
import { reduxForm, Field, InjectedFormProps } from 'redux-form';
import CommentsArea from './CommentsArea';
import ReviewArea from './ReviewArea';
import {ProfileInitialStateType, PostItemType} from '../../../../redux/profile_reducer';
import { ProfileType } from '../../../../Types/Types';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../../../redux/store-redux';

let id = 5;

type PropsType = {
    state: ProfileInitialStateType
    profile: ProfileType | null
    post: PostItemType
    avatarPhoto: string | null | undefined

    reset: (form: string) => void
    addComment: (id: number, text: string) => void
    updateCommentCount: (id: number) => void
    updateLikeCount: (id: number) => void
}

const Post: React.FC<PropsType> = (props) => {

  let onAddComment = (data: any) => {
      props.addComment(props.post.id, data['comment' + props.post.id]);
      props.updateCommentCount(props.post.id)
      props.reset('commentFormMyPost')
  }

  let onAddLike = (id: number) => {
      props.updateLikeCount(id)
  }

  return (
      <div className={sNews.newsItem}>
          <span style = {{display: "flex", alignItems: "center"}}>
              <span>
                  {
                  props.state.photos && props.state.photos.large
                      ? <img src={props.state.photos.large} alt="PHOTO1" className={sNews.userImg}/>
                      : <img src={userPhoto} alt="PHOTO2" className={sNews.userImg}/>
                  }
              </span>
              <span className={sNews.user}>{props.profile && props.profile.fullName || ' '}</span>
          </span>
          <span className={sNews.newsTitle}> {props.post.title} </span>
          <div>
            { props.post.photo && <img src={props.post.photo} alt="Photo"/> }
          </div>
          <ReviewArea onAddLike = {onAddLike} id={props.post.id} post={props.post}/>
          <CommentFormRedux onSubmit={onAddComment} id={props.post.id}/>
          <CommentsArea post = {props.post} avatarPhoto = {props.avatarPhoto}/>
      </div>
  );
}

type PostFormPropsType = {
    id: number
}

type PostFormValuesType = {
    id: number
}

const Input = Element('input');
    
const CommentForm: React.FC<InjectedFormProps<PostFormValuesType, PostFormPropsType> & PostFormPropsType> = (props) => {
    return <form className={sNews.inputComment} onSubmit={props.handleSubmit}>
        <Field placeholder='Write your comment' name = {'comment' + props.id} component = {Input}/>
        <button type = 'submit' className='btn'>Send</button>
    </form>
}

const CommentFormRedux = reduxForm<PostFormValuesType, PostFormPropsType>({form: 'commentFormMyPost'})(CommentForm)


export default Post;