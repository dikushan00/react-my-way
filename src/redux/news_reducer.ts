import { InferActionsTypes } from "./store-redux";
import { stat } from "fs";

let id = 3;

type CommentsType = {
    userId: number
    commentId: number
    fullName: string
    text: string
    photo: string
}

export type StoriesType = {
    id: number
    userId: number
    viewed: boolean
    photo: string
}

export type NewsItemType = {
    id: number,
    fullName: string,
    title: string,
    avatar: string,
    photo: string,
    comments: Array<CommentsType>,
    likesCount: number,
    CommentsCount: number,
    liked: boolean
}

let initialState = {
    news: [
        {
            id: 1,
            fullName: 'Уютный домик',
            title: "Hello everyone. it is my first news post!",
            avatar: "http://a824.phobos.apple.com/us/r30/Purple3/v4/47/47/e2/4747e282-b06d-8c33-c4d8-b9c22db8abad/pr_source.png?downloadKey=1422036762_0750e892c607d16376f15f0523f383d6",
            photo: "https://sun1.dataix-kz-akkol.userapi.com/LfIHTeWVcS-8YZ_aHd92yzk14ja88dRD_nvHPQ/w073PwJeeiw.jpg",
            comments: [{userId: 1, commentId: 1, fullName: 'Башаров Максим', text: "its awesome!", photo: 'https://i.pinimg.com/736x/8f/f6/08/8ff60864af4b3eebc06a8bbabcf0c21b.jpg'}, {userId: 2, commentId: 2, fullName: 'Башаров Максим', text: "How are you?", photo: 'https://avatars.mds.yandex.net/get-zen_doc/229614/pub_5db308ea5ba2b500b6bb0d1d_5db309208d5b5f00afb1fe92/scale_1200'}],
            likesCount: 5,
            CommentsCount: 2,
            liked: false
        },
        {
            id: 2,
            fullName: 'Уютный домик',
            title: "Today wether is good",
            avatar: "https://yt3.ggpht.com/a/AATXAJwu0fvICSBsYl9qzOz1sjoyoxfEP2aPplVF7d9H=s900-c-k-c0xffffffff-no-rj-mo",
            photo: "https://sun2.dataix-kz-akkol.userapi.com/SbXuX7CfH2yP0bsr4mIs9GanXgXYs75aVATSMQ/2_lqVldYMD8.jpg",
            comments: [{userId: 2, commentId: 2, fullName: 'Бектемисов Тамерлан', text: "Kazakhstan!!!", photo: 'https://www.trendsmap.com/ipx/https://pbs.twimg.com/profile_images/926488420645523456/hwKSfqNj.jpg'}],
            likesCount: 13,
            CommentsCount: 1,
            liked: true
        },
        {
            id: 3,
            fullName: 'Приколы за 253',
            title: "Im go to school",
            avatar: "https://yt3.ggpht.com/a/AATXAJwNrBajG2GHjhDoh5dd4Ol6bgmpNmIFCcA8DeLvaA=s900-c-k-c0xffffffff-no-rj-mo",
            photo: "https://sun1.dataix-kz-akkol.userapi.com/a8fcn9yq_1q5LmUyvtlNJtpJri_4wzIhBHVBpA/l5RZ3MHaIVs.jpg",
            comments: [{userId: 3, commentId: 3, fullName: 'Байбекова Айдана', text: "COol!", photo: 'https://yt3.ggpht.com/a/AATXAJz96SEqjCTeAd4fIKN-cMmEeqGU26eHSkwB9JISgg=s900-c-k-c0xffffffff-no-rj-mo'}],
            likesCount: 12,
            CommentsCount: 1,
            liked: false
        },
        {
            id: 4,
            fullName: 'Мем фром драг дилла',
            title: "Why he not me?!",
            avatar: "https://yt3.ggpht.com/a/AATXAJw0vq_YrFUkbgA2WYAGe0upS4MeD1QJZomS4QaE=s900-c-k-c0xffffffff-no-rj-mo",
            photo: "https://sun2.dataix-kz-akkol.userapi.com/-w6xt617vU9CdgCKkmrtnCtQOnGOTT7eGIeTjA/H-8hFLwllLA.jpg",
            comments: [{userId: 4, commentId: 4, fullName: 'Тастемирова Томирис', text: "Go walk with me>", photo: 'https://cdn.freelance.ru/img/portfolio/pics/00/3A/2C/3812566.jpg?mt=d239b33b'}],
            likesCount: 1,
            CommentsCount: 1,
            liked: false
        }
    ] as Array<NewsItemType>,
    stories: [
        {id: 1, userId: 1, viewed: false, photo: 'https://avatars.mds.yandex.net/get-pdb/1996997/9c893ac4-b0d0-48ca-ba75-5c79bccf41f8/s375'},
        {id: 2, userId: 2, viewed: false, photo: 'https://photodzen.com/content/images/lines_2_2.jpg'},
        {id: 3, userId: 3, viewed: false, photo: 'https://otvet.imgsmail.ru/download/497424eb0af0d51913941be13c03b052_i-18.jpg'}
    ] as Array<StoriesType>
}

export type NewsInitialStateType = typeof initialState


let news_reducer = (state = initialState, action: ActionsType): NewsInitialStateType => {
    

    switch (action.type) {

        case 'SN/News/ADD_NEW_COMMENT': {
            if (action.newCommentText.length > 0){
                return {
                    ...state,
                    news: state.news.map(item => {
                        if(item.id === action.id)
                            item.comments = [...item.comments, {userId: 5, fullName: 'dikushan00', commentId: 5, text: action.newCommentText, photo: ''}]
                        return item
                    })
                }
                id++;
            }
            return state
        }

        case 'SN/News/UPDATE_LIKE_COUNT': {
            
            return {
                ...state,
                news: state.news.map(item => {
                    if(item.id === action.id && !item.liked){
                        item.likesCount = item.likesCount + 1
                        item.liked = !item.liked 
                    } else if(item.id === action.id && item.liked) {
                        item.likesCount = item.likesCount - 1 
                        item.liked = !item.liked 
                    }
                    return item
                })
            }
        }

        case 'SN/News/UPDATE_COMMENT_COUNT': {

            return {
                ...state,
                news: state.news.map(item => {
                    if(item.id === action.id)
                        item.CommentsCount++
                    return item
                })
            }
        }

        case 'SN/News/VIEW_STORY': {

            return {
                ...state,
                stories: state.stories.map((item) => {
                    if(item.id === action.id)
                        item.viewed = true
                    return item
                })
            }
        }

        default: {
            return state
        }
    }
}

export const actions = {
    addNewComment: (id: number, newCommentText: string) => ({type: 'SN/News/ADD_NEW_COMMENT', id, newCommentText} as const),
    updateLikeCount: (id: number) => ({type: 'SN/News/UPDATE_LIKE_COUNT', id} as const),
    updateCommentCount: (id: number) => ({type: 'SN/News/UPDATE_COMMENT_COUNT', id} as const),
    viewStory: (id: number) => ({type: 'SN/News/VIEW_STORY', id} as const)
} 

type ActionsType = InferActionsTypes<typeof actions>

export default news_reducer