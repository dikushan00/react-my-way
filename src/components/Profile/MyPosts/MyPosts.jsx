import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm, reset} from "redux-form";
import {maxLengthCreater, required} from "../../utils/Validators/validators";
import {Element} from "../../common/FormControl/FormControl";

const MyPosts = (props) => {

    let onAddPost = (message) => {
        props.addPost(message.newMyPostText);
        props.reset('myPostForm');
    }

    return (
        <div className={s.myPostWrap}>
            <h3>My posts</h3>
            <MyPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {[...props.state.postsData].reverse().map(post =>
                    <Post message={post.message} likeCount={post.likesCount} key={post.id}/>
                )}
            </div>
        </div>
    )
}

let maxLength15 = maxLengthCreater(15);
const Textarea = Element("textarea");

class myPostForm extends React.Component{
    render() {
        return (
            <form className={s.sendText} onSubmit={this.props.handleSubmit}>
                <Field placeholder='Enter message...' name='newMyPostText' validate={[required, maxLength15]}
                       component={Textarea}/>
                <button className="btn">Add post</button>
            </form>
        )
    }
}

const MyPostFormRedux = reduxForm({form: 'myPostForm'})(myPostForm)

export default MyPosts;