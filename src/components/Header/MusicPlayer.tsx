import { faPause, faPlay, faStepBackward, faStepForward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppStateType } from '../../redux/store-redux'
import { actions } from './../../redux/music_reducer';
import './../Music/Music.css'

const MusicPlayer = () => {

    const dispatch = useDispatch()
    const playing = useSelector((state: AppStateType) => state.music.playing)
    const currentSong = useSelector((state: AppStateType) => state.music.currentSong)
    const random = useSelector((state: AppStateType) => state.music.random)
    const songs = useSelector((state: AppStateType) => state.music.songs)
    const repeat = useSelector((state: AppStateType) => state.music.repeat)
    const currentTimeState = useSelector((state: AppStateType) => state.music.currentTime)

    const audio = useRef('audio_tag');

    const [statevolum, setStateVolum] = useState(0.3)
    const [dur, setDur] = useState(0)
    const [currentTime, setCurrentTime] = useState(currentTimeState)

    const SetCurrent = (id: number) => {
        dispatch(actions.SetCurrent(id))
    }
    // Prev song
    const prevSong = () => {
        if (currentSong === 0) {
            SetCurrent(songs.length - 1)
        } else {
            SetCurrent(currentSong - 1)
        }
    }
    // Next song
    const nextSong = () => {
        if (currentSong === songs.length - 1) {
            SetCurrent(0)
        } else {
            SetCurrent(currentSong + 1)
        }
    }

    const handleEnd = () => {
        // Check for random and repeat options
        if (random) {
            return dispatch({ type: 'SET_CURRENT_SONG', data: ~~(Math.random() * songs.length) })
        } else {
            if (repeat) {
                nextSong()
            } else if ((currentSong === songs.length - 1)) {
                return
            } else {
                nextSong();
            }
        }
    }

    const handleUpdateTime = (e: any) => {
        setCurrentTime(e.target.currentTime)
        dispatch(actions.updateCurrentTime(currentTime))
    }

    const togglePlaying = () => {
        dispatch(actions.togglePlaying())
    }
    //@ts-ignore
    const toggleAudio = () => audio.current.paused ? audio.current.play() : audio.current.pause();

    useEffect(() => {
        //@ts-ignore
        audio.current.volume = statevolum;
        //@ts-ignore
        audio.current.currentTime = currentTime
        if (playing) { toggleAudio() }
    }, [currentSong])

    useEffect(() => {
        setCurrentTime(currentTimeState)
        //@ts-ignore
        audio.current.currentTime = currentTime
    }, [currentTimeState])

    return <div style = {{display: "flex", justifyContent: "left"}}>
        <audio
                //@ts-ignore
                onTimeUpdate={(e) => handleUpdateTime(e)}
                //@ts-ignore
                onCanPlay={(e) => setDur(e.target.duration)}
                onEnded={handleEnd}
                //@ts-ignore
                ref={audio}
                type="audio/mpeg"
                preload='true'
                src={songs[currentSong][1]} />
        <div className="musicControls">
                <span className="prev" onClick={prevSong}><FontAwesomeIcon icon={faStepBackward} /></span>
                <span className="play" onClick={() => { togglePlaying(); toggleAudio(); }}>
                    <span className={!playing ? '' : 'hide'}><FontAwesomeIcon icon={faPlay} /></span>
                    <span className={!playing ? 'hide' : ''}><FontAwesomeIcon icon={faPause} /></span>
                </span>

                <span className="next" onClick={nextSong}><FontAwesomeIcon icon={faStepForward} /></span>
        </div>
        <span className="song">{songs[currentSong][0]}</span>
    </div>
}

export default MusicPlayer