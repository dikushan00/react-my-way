import React, { useState } from 'react';
import {StoriesType} from '../../../redux/news_reducer'
import { useSelector, useDispatch } from 'react-redux';
import { AppStateType } from '../../../redux/store-redux';
import defaultUserPhoto from '../../../img/user(1).svg'
import nextPhoto from '../../../img/next.svg'
import backPhoto from '../../../img/back.svg'
import { actions } from './../../../redux/news_reducer';
import style from './Stories.module.css'

const StoriesItem: React.FC<PropsType> = React.memo(({story, index, arr}) => {

    const userPhoto = useSelector((state: AppStateType) => state.profilePage.photos && state.profilePage.photos.large)
    const dispatch = useDispatch()
    const [isBigMode, setBigMode] = useState(false)
    const [isStoryViewed, setStoryViewed] = useState(story.viewed)
    const [storyPhoto, setStoryPhoto] = useState(story.photo)
    const [storyIndex, setStoryIndex] = useState(index)

    const imgStyles = {width: "110px", height: "185px", borderRadius: "5px", cursor: "pointer"}
    const imgStyle = {width: "43px", borderRadius: "50%", border: story.viewed ? "4px solid #ccc" : "4px solid #4a76a8", cursor: "pointer"}

    const onStoryClick = () => {
        document.body.classList.add('pop_overflow')
        setBigMode(true)
        setStoryViewed(true)
        dispatch(actions.viewStory(story.id))
    }

    let storyTime = setInterval(() => {}, 7000);

    const changeStoryPhoto = (direction: boolean) => {
        clearInterval(storyTime)
        if(direction && storyIndex < arr.length - 1){
            setStoryPhoto(arr[storyIndex + 1].photo)
            dispatch(actions.viewStory(arr[storyIndex + 1].id))
            setStoryIndex(storyIndex + 1)
        } else if(!direction && storyIndex - 1 >= 0) {
            setStoryPhoto(arr[storyIndex - 1].photo)
            dispatch(actions.viewStory(arr[storyIndex - 1].id))
            setStoryIndex(storyIndex - 1)
        } else {
            setBigMode(false)
            setStoryIndex(0)
        }
    }

    if(isBigMode) {
        document.body.classList.add("pop_overflow")
        storyTime = setInterval(() => {
            if(arr.length === 1 || storyIndex + 1 === arr.length) {
                setBigMode(false)
            } else {
                changeStoryPhoto(true)
            }
        }, 7000)
    } else {
        document.body.classList.remove("pop_overflow")
        storyPhoto !== story.photo && setStoryPhoto(story.photo)
        clearInterval(storyTime)
    } 

    return <div style={{marginLeft: "15px", position: "relative"}}>
        <img src={story.photo} alt="Photo" style={imgStyles} onClick={onStoryClick} />
        <div style={{position: "absolute", top: "110px", left: "30px"}}>
            <img onClick={onStoryClick} src={userPhoto ? userPhoto : defaultUserPhoto} style = {imgStyle} alt="Photo"/>
        </div>
        {
            isBigMode && <StoryBigMode isBigMode = {isBigMode} 
                                        setBigMode = {setBigMode} 
                                        storyPhoto = {storyPhoto} 
                                        changeStoryPhoto = {changeStoryPhoto}
                                        storyId = {storyIndex} 
                                        key={storyIndex} />
        }
    </div>
})

const StoryBigMode: React.FC<BigModeType> = React.memo(({isBigMode, setBigMode, storyPhoto, changeStoryPhoto, storyId}) => {

    return <div>
    <div id="overlay" className = {isBigMode  ? "overlay" : ''} onClick={() => setBigMode(false)}></div>
    <div id="magnify" className={isBigMode ? "magnify" : ''}>
        <img src={ storyPhoto } alt="Photo" className={style.centerStory} />
        <img src={backPhoto} onClick={() => changeStoryPhoto(false)} alt="Back" style={{width: "35px", position: "fixed", top: "50px", left: "570px", zIndex: 10000, cursor: "pointer"}} />
        <img src={nextPhoto} onClick={() => changeStoryPhoto(true)} alt="Next" style={{width: "35px", position: "fixed", top: "50px", right: "560px", zIndex: 10000, cursor: "pointer"}} />
        <span className="popupLayer" id = {'' + storyId}/>
        <div id="close-popup" onClick={() => {setBigMode(false); document.body.classList.remove('pop_overflow')}}><i></i></div>
    </div>
</div>
})

export default StoriesItem


type PropsType = {
    story: StoriesType
    index: number
    arr: Array<StoriesType>
    key: number
}

type BigModeType = {
    isBigMode: boolean
    storyPhoto: string
    storyId: number
    setBigMode: (isMode: boolean) => void
    changeStoryPhoto: (direction: boolean) => void
}