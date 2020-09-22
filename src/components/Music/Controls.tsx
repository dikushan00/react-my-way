import React, {ChangeEvent, useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store-redux";
import {actions} from "../../redux/music_reducer";
import { faPause, faPlay, faRandom, faRedoAlt, faStepBackward, faStepForward, faVolumeDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Music.css'

const Controls = () => {

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

    const fmtMSS = (s: number) => { return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + ~~(s) }

    //@ts-ignore
    const toggleAudio = () => audio.current.paused ? audio.current.play() : audio.current.pause();

    const handleVolume = (q: number ) => {
        setStateVolum(q);
        //@ts-ignore
        audio.current.volume = q;
    }

    const handleProgress = (e: ChangeEvent<HTMLInputElement>) => {
        //@ts-ignore
        let compute = (e.target.value * dur) / 100;
        setCurrentTime(compute);
        //@ts-ignore
        audio.current.currentTime = compute
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

    const SetCurrent = (id: number) => {
        dispatch(actions.SetCurrent(id))
    }

    const togglePlaying = () => {
        dispatch(actions.togglePlaying())
    }

    const toggleRandom = () => {
        dispatch(actions.toggleRandom())
    }

    const toggleRepeat = () => {
        dispatch(actions.toggleRepeat())
    }

    useEffect(() => {
        //@ts-ignore
        audio.current.volume = statevolum;
        if (playing) { toggleAudio() }
        //@ts-ignore
        audio.current.currentTime = currentTime
    }, [currentSong])

    useEffect(() => {
        setCurrentTime(currentTimeState)
        //@ts-ignore
        audio.current.currentTime = currentTime
    }, [currentTimeState])

    return (
        <div className="controls">
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
                src={songs[currentSong][1]} 
                id="audioMusic"/>
            <div className="vlme">
                <span className="volum"><FontAwesomeIcon icon={faVolumeDown} /></span>
                <input value={Math.round(statevolum * 100)} type="range" name="volBar" id="volBar" onChange={
                    (e) => {
                        //@ts-ignore
                        return handleVolume(e.target.value / 100)
                        }} />

            </div>
            <div className="musicControls">
                <span className="prev" onClick={prevSong}><FontAwesomeIcon icon={faStepBackward} /></span>
                <span className="play" onClick={() => { togglePlaying(); toggleAudio(); }}>
                    <span className={!playing ? '' : 'hide'}><FontAwesomeIcon icon={faPlay} /></span>
                    <span className={!playing ? 'hide' : ''}><FontAwesomeIcon icon={faPause} /></span>
                </span>

                <span className="next" onClick={nextSong}><FontAwesomeIcon icon={faStepForward} /></span>
            </div>
            <div className="progressb">
                <span className="currentT">{fmtMSS(currentTime)}</span>
                <input
                    onChange={handleProgress}
                    value={dur ? (currentTime * 100) / dur : 0}
                    type="range" name="progresBar" id="prgbar" />
                <span className="totalT">{fmtMSS(dur)}</span>

            </div>
            <div className="plsoptions">

        <span onClick={toggleRandom} className={"random " + (random ? 'active' : '')}>
        <FontAwesomeIcon icon={faRandom} />
        </span>
                <span onClick={toggleRepeat} className={"repeat " + (repeat ? 'active' : '')}>
                <FontAwesomeIcon icon={faRedoAlt} />
        </span>
            </div>
        </div>
    )
}

export default Controls;