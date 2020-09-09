import React from 'react';
import StoriesItem from './StoriesItem';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../../redux/store-redux';

const Stories = () => {
    
    const stories = useSelector((state: AppStateType) => state.newsPage.stories)

    return <div className = "pageArea" style ={{display: "flex", padding: "10px 15px"}}>
        {
            stories.map((item, index, arr) => {
                return <StoriesItem story = {item} index = {index} arr = {arr} key={item.id}/>
            })
        }
    </div>
}

export default Stories
