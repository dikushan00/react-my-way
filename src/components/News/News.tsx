import React from 'react';
import NewsItem from "./newsItem/NewsItem";
import s from './News.module.css'
import { NewsInitialStateType } from '../../redux/news_reducer';
import Stories from './Stories/Stories';

const News: React.FC<PropsType> = (props) => {
    
    return (
        <div className={s.newsWrap}>
            <Stories />
            <div className={s.postArea}>
                {props.state.news.map(post => (
                    <NewsItem post={post} 
                        addComment={props.addNewComment} 
                        updateLikeCount={props.updateLikeCount}
                        updateCommentCount={props.updateCommentCount}
                        avatarPhoto = {props.avatarPhoto}
                        reset={props.reset}
                        key={post.id}/>
                ))}
            </div>
        </div>
    );
}

export default News;

type PropsType = {
    state: NewsInitialStateType
    avatarPhoto: string | null | undefined

    addNewComment: (id:number, str: string) => void
    reset: (form: string) => void
    updateCommentCount: (id: number) => void
    updateLikeCount: (id: number) => void
}