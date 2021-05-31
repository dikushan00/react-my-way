import {InferActionsTypes} from "./store-redux";

let initialState = {
    songs: [
        [
            "Homeroad",
            "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Kai_Engel/Satin/Kai_Engel_-_09_-_Homeroad.mp3"
        ],
        [
            "Interception",
            "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Kai_Engel/Satin/Kai_Engel_-_07_-_Interception.mp3"
        ],
        [
            "Sentinel",
            "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Kai_Engel/Satin/Kai_Engel_-_04_-_Sentinel.mp3"
        ],
        [
            "Great Expectations",
            "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Kai_Engel/Satin/Kai_Engel_-_05_-_Great_Expectations.mp3"
        ],
        [
            "Downfall",
            "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Kai_Engel/Satin/Kai_Engel_-_08_-_Downfall.mp3"
        ],
        [
            "Augmentations",
            "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Kai_Engel/Satin/Kai_Engel_-_01_-_Augmentations.mp3"
        ],
        [
            "Illumination",
            "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Kai_Engel/Satin/Kai_Engel_-_02_-_Illumination.mp3"
        ],
        [
            "Cabaret",
            "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Kai_Engel/Satin/Kai_Engel_-_10_-_Cabaret.mp3"
        ],
        [
            "Contention",
            "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Kai_Engel/Satin/Kai_Engel_-_03_-_Contention.mp3"
        ],
        [
            "Dark Alleys",
            "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Kai_Engel/Satin/Kai_Engel_-_06_-_Dark_Alleys.mp3"
        ],
        [
            "Climb",
            "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Ziklibrenbib/The_Ghost_in_Your_Piano/The_Ghost_in_your_piano/The_Ghost_in_Your_Piano_-_01_-_Climb.mp3"
        ],
        [
            "Adventure",
            "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Ziklibrenbib/The_Ghost_in_Your_Piano/The_Ghost_in_your_piano/The_Ghost_in_Your_Piano_-_03_-_Adventure.mp3"
        ],
        [
            "Lullaby",
            "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Ziklibrenbib/The_Ghost_in_Your_Piano/The_Ghost_in_your_piano/The_Ghost_in_Your_Piano_-_04_-_Lullaby.mp3"
        ]
    ],
    currentSong: 0,
    currentTime: 0,
    repeat: false,
    random: false,
    playing: false,
    audio: null
}

export type MusicInitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>

let music_reducer = (state = initialState, action: ActionsType):MusicInitialStateType => {
        switch (action.type) {
            case 'SET_CURRENT_SONG':
                return {
                    ...state,
                    currentSong: action.data,
                    playing: true
                }
            case 'UPDATE_CURRENT_TIME':
                return {
                    ...state,
                    currentTime: action.time
                }
            case 'TOGGLE_RANDOM':
                return {
                    ...state,
                    random: !state.random
                }
            case 'TOGGLE_REPEAT':
                return {
                    ...state,
                    repeat: !state.playing
                }
            case 'TOGGLE_PLAYING':
                return {
                    ...state,
                    playing: !state.playing
                }
            default:
                return state
        }
    return state
}

export const actions = {
    SetCurrent: (id: number) => ({ type: 'SET_CURRENT_SONG', data: id } as const),
    updateCurrentTime: (time: any) => ({ type: 'UPDATE_CURRENT_TIME', time } as const),
    togglePlaying: () => ({ type: 'TOGGLE_PLAYING' } as const),
    toggleRepeat: () => ({ type: 'TOGGLE_REPEAT' } as const),
    toggleRandom: () => ({ type: 'TOGGLE_RANDOM' } as const),
}

export default music_reducer