import dialogs_reducer from "./dialogs_reducer";
import profile_reducer from "./profile_reducer";
import navbar_reducer from "./navbar_reducer";
import news_reducer from "./news_reducer";

let store = {
    callSubsriber() {
        console.log('State changed');
    },

    state: {
        dialogPage: {
            userData: [
                {"id": 1, "name": "Dmitri"},
                {"id": 2, "name": "Svetlana"},
                {"id": 3, "name": "Nauryz"},
                {"id": 4, "name": "Dinmukhamed"},
                {"id": 5, "name": "Mukhit"}
            ],
            messageData: [
                {"id": 1, "message": "Yo"},
                {"id": 2, "message": "Hello"},
                {"id": 1, "message": "How are you"}
            ],
            newMessageText: 'fdg '
        },
        profilePage: {
            postsData: [
                {"id": 1, "message": "Hello, how are you?", "likesCount": 5},
                {"id": 2, "message": "My, first post!", "likesCount": 2},
                {"id": 3, "message": "Hello, everyone", "likesCount": 10},
            ],
            newPostText: ''
        },
        navbar: {
            navData: [
                {
                    "id": 1,
                    "href": "News",
                    "name": "News",
                    "photo": "https://image.flaticon.com/icons/svg/3158/3158703.svg"
                },
                {
                    "id": 2,
                    "href": "profile",
                    "name": "Profile",
                    "photo": "https://image.flaticon.com/icons/svg/1077/1077114.svg"
                },
                {
                    "id": 3,
                    "href": "dialogs",
                    "name": "Message",
                    "photo": "https://image.flaticon.com/icons/svg/2462/2462719.svg"
                },
                {
                    "id": 4,
                    "href": "music",
                    "name": "Music",
                    "photo": "https://image.flaticon.com/icons/svg/876/876817.svg"
                },
                {
                    "id": 5,
                    "href": "settings",
                    "name": "Settings",
                    "photo": "https://image.flaticon.com/icons/svg/889/889744.svg"
                }
            ]
        },
        newsPage: {
            news: [
                {
                    id: 1,
                    title: "Hello everyone. it is my first news post!",
                    photo: "https://sun1.dataix-kz-akkol.userapi.com/LfIHTeWVcS-8YZ_aHd92yzk14ja88dRD_nvHPQ/w073PwJeeiw.jpg",
                    comments: [{userId: 1, commentId: 1, text: "its awesome!"}],
                    likesCount: 5,
                    CommentsCount: 1
                },
                {
                    id: 2,
                    title: "Today wether is good",
                    photo: "https://sun2.dataix-kz-akkol.userapi.com/SbXuX7CfH2yP0bsr4mIs9GanXgXYs75aVATSMQ/2_lqVldYMD8.jpg",
                    comments: [{userId: 2, commentId: 2, text: "Kazakhstan!!!"}],
                    likesCount: 13,
                    CommentsCount: 1
                },
                {
                    id: 3,
                    title: "Im go to school",
                    photo: "https://sun1.dataix-kz-akkol.userapi.com/a8fcn9yq_1q5LmUyvtlNJtpJri_4wzIhBHVBpA/l5RZ3MHaIVs.jpg",
                    comments: [{userId: 3, commentId: 3, text: "COol!"}],
                    likesCount: 12,
                    CommentsCount: 1
                },
                {
                    id: 4,
                    title: "Why he not me?!",
                    photo: "https://sun2.dataix-kz-akkol.userapi.com/-w6xt617vU9CdgCKkmrtnCtQOnGOTT7eGIeTjA/H-8hFLwllLA.jpg",
                    comments: [{userId: 4, commentId: 4, text: "Go walk with me>"}],
                    likesCount: 1,
                    CommentsCount: 1
                }
            ]
        }
    },

    subscribe(observer) {
        this.callSubsriber = observer;  // observer
    },
    getState() {
        return this.state;
    },

    dispatch(action) {

        this.state.dialogPage = dialogs_reducer(this.state.dialogPage, action)
        this.state.profilePage = profile_reducer(this.state.profilePage, action)
        this.state.navbar = navbar_reducer(this.state.navbar, action)
        this.state.newsPage = news_reducer(this.state.newsPage, action)

        this.callSubsriber(this.state)

    }

}


export default store