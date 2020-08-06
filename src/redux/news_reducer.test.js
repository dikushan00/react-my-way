import {addNewComment, updateLikeCount, updateCommentCount} from "./news_reducer"
import newsReducer from "./news_reducer"


let state = {
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
    ],
    newCommentText: ""
}

it('new comment should be added', () => {

    let action = addNewComment(1);

    let newState = newsReducer(state, action)

    expect(newState.news[0].comments.length).toBe(3)
})


it('add new like', () => {

    let action = updateLikeCount(1);

    let newState = newsReducer(state, action)

    expect(newState.news[0].likesCount).toBe(6)
})

it('add new comments count', () => {
    
    let action = addNewComment(1);

    let newState = newsReducer(state, action)

    let action2 = updateCommentCount(1);

    let newState2 = newsReducer(newState, action2)

    expect(newState2.news[0].CommentsCount).toBe(3)
})
