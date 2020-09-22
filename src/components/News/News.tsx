import React from 'react';
import NewsItem from "./newsItem/NewsItem";
import s from './News.module.css'
import Stories from './Stories/Stories';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../redux/store-redux';

const News: React.FC = () => {

    const newsState = useSelector((state: AppStateType) => state.newsPage)
    
    return (
        <div className={s.newsWrap}>
            <Stories />
            <div className={s.postArea}>
                {newsState.news.map(post => (
                    <NewsItem post={post}
                             key={post.id}/>
                ))}
            </div>
        </div>
    );
}

export default News;