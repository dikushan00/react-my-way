import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>

      </div>
      <div className={s.posts}>
        <Post message = "Hello, how are you?" likeCount = "5"/>
        <Post message = "My, first post!" likeCount = "5"/>
      </div>
    </div>
  )

}

export default MyPosts;