const ADD_NEW_COMMENT = "ADD_NEW_COMMENT";
const UPDATE_NEW_COMMENT = "UPDATE_NEW_COMMENT";
const UPDATE_LIKE_COUNT = "UPDATE_LIKE_COUNT";
const UPDATE_COMMENT_COUNT = "UPDATE_COMMENT_COUNT";
let id = 3;

let initialState = {
    news: [
        {
            id: 1,
            title: "Hello everyone. it is my first news post!",
            photo: "https://sun1.dataix-kz-akkol.userapi.com/LfIHTeWVcS-8YZ_aHd92yzk14ja88dRD_nvHPQ/w073PwJeeiw.jpg",
            comments: [{userId: 1, commentId: 1, text: "its awesome!"}, {userId: 2, commentId: 2, text: "How are you?"}],
            likesCount: 5,
            CommentsCount: 2,
            liked: false
        },
        {
            id: 2,
            title: "Today wether is good",
            photo: "https://sun2.dataix-kz-akkol.userapi.com/SbXuX7CfH2yP0bsr4mIs9GanXgXYs75aVATSMQ/2_lqVldYMD8.jpg",
            comments: [{userId: 2, commentId: 2, text: "Kazakhstan!!!"}],
            likesCount: 13,
            CommentsCount: 1,
            liked: true
        },
        {
            id: 3,
            title: "Im go to school",
            photo: "https://sun1.dataix-kz-akkol.userapi.com/a8fcn9yq_1q5LmUyvtlNJtpJri_4wzIhBHVBpA/l5RZ3MHaIVs.jpg",
            comments: [{userId: 3, commentId: 3, text: "COol!"}],
            likesCount: 12,
            CommentsCount: 1,
            liked: false
        },
        {
            id: 4,
            title: "Why he not me?!",
            photo: "https://sun2.dataix-kz-akkol.userapi.com/-w6xt617vU9CdgCKkmrtnCtQOnGOTT7eGIeTjA/H-8hFLwllLA.jpg",
            comments: [{userId: 4, commentId: 4, text: "Go walk with me>"}],
            likesCount: 1,
            CommentsCount: 1,
            liked: false
        }
    ]
}


let news_reducer = (state = initialState, action) => {
    

    switch (action.type) {

        case ADD_NEW_COMMENT: {
            if (action.newCommentText.length > 0){
                return {
                    ...state,
                    news: state.news.map(item => {
                        if(item.id === action.id)
                            item.comments = [...item.comments, {userId: 5, commentId: 5, text: action.newCommentText}]
                        return item
                    })
                }
                id++;
            }
            return state
        }

        case UPDATE_LIKE_COUNT: {
            
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

        case UPDATE_COMMENT_COUNT: {

            return {
                ...state,
                news: state.news.map(item => {
                    if(item.id === action.id)
                        item.CommentsCount++
                    return item
                })
            }
        }

        default: {
            return state
        }
    }
}

export const addNewComment = (id, newCommentText) => ({type: ADD_NEW_COMMENT, id, newCommentText})
export const updateLikeCount = (id) => ({type: UPDATE_LIKE_COUNT, id})
export const updateCommentCount = (id) => ({type: UPDATE_COMMENT_COUNT, id})

export default news_reducer