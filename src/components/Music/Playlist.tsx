import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store-redux";
import {actions} from "../../redux/music_reducer";
import { faListUl, faMusic } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Music.css'

const Playlist = () => {

    const dispatch = useDispatch()
    const songs = useSelector((state: AppStateType) => state.music.songs)
    const currentSong = useSelector((state: AppStateType) => state.music.currentSong)

    const SetCurrent = (id: number) => {
        dispatch(actions.SetCurrent(id))
    }

    return (
        <div className="playlist">
            <div className="header">
            <FontAwesomeIcon icon={faListUl} />
                <span className="pltext">Play List</span>
            </div>
            <div className="songlist">
                <ul className="loi">
                    {
                        songs.map((song, i) =>
                            <li className={'songContainer ' + (currentSong === i ? 'selected' : '')} key={i}
                                onClick={() => {
                                    SetCurrent(i);
                                }}>
                                <div className = 'musicIcon'>
                                    <FontAwesomeIcon icon = {faMusic} />
                                </div>
                                <span className="song">{song[0]}</span>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default Playlist