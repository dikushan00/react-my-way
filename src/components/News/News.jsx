import React from 'react';
import NewsItem from "./newsItem/NewsItem";
import s from './News.module.css'

const News = (props) => {
    
    return (
        <div className={s.newsWrap}>
            <div className={s.story}/>
            <div className={s.postArea}>
                {props.state.news.map(post => (
                    <NewsItem post={post} 
                        newCommentText = {props.state.newCommentText} 
                        addComment={props.addNewComment} 
                        updateLikeCount={props.updateLikeCount}
                        updateCommentCount={props.updateCommentCount}
                        reset={props.reset}
                        key={post.id}/>
                ))}
            </div>
        </div>
    );
}

export default News;