import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm, InjectedFormProps} from "redux-form";
import {maxLengthCreater, required} from "../../utils/Validators/validators";
import {Element} from "../../common/FormControl/FormControl";
import Preloader from "../../common/Preloader/Preloader";
import { ProfileInitialStateType } from '../../../redux/profile_reducer';

const MyPosts: React.FC<PropsType> = (props) => {

    let onAddPost = (message: {newMyPostText: string}) => {
        props.addPost(message.newMyPostText);
        props.reset('myPostForm');
    }

    if (!props.state.profile){
        return <Preloader />
    }

    return (
        <div>
            <div className={s.addPostArea}>
                <h3>My posts</h3>
                <MyPostFormRedux onSubmit={onAddPost}/>
            </div>
            <div className={s.posts}>
                {[...props.state.postsData].reverse().map(post =>
                    <Post 
                        post = {post} 
                        key={post.id}
                        profile = {props.state.profile}
                        addComment={props.addNewComment} 
                        updateLikeCount={props.updateLikeCount}
                        updateCommentCount={props.updateCommentCount}
                        avatarPhoto={props.avatarPhoto}
                        reset={props.reset}
                        state={props.state}/>
                )}
            </div>
        </div>
    )
}

let maxLength255 = maxLengthCreater(255);
const Textarea = Element("textarea");

class myPostForm extends React.Component<InjectedFormProps<MyPostFormValuesType> >{
    render() {
        return (
            <form className={s.sendText} onSubmit={this.props.handleSubmit}>
                <Field placeholder='Enter message...' name='newMyPostText' validate={[required, maxLength255]}
                       component={Textarea}/>
                <button className="btn">Add post</button>
            </form>
        )
    }
}

const MyPostFormRedux = reduxForm<MyPostFormValuesType>({form: 'myPostForm'})(myPostForm)

export default MyPosts;


type PropsType = {
    state: ProfileInitialStateType
    avatarPhoto: string | null | undefined

    addPost: (text: string) => void
    reset: (form: string) => void
    addNewComment: (id: number, text: string) => void
    updateCommentCount: (id: number) => void
    updateLikeCount: (id: number) => void
}


type MyPostFormValuesType = {
    newMyPostText: string
}