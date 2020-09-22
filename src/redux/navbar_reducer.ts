
let initialState = {
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
            "href": "users",
            "name": "Users",
            "photo": "https://image.flaticon.com/icons/svg/681/681494.svg"
        },
        {
            "id": 6,
            "href": "settings",
            "name": "Settings",
            "photo": "https://image.flaticon.com/icons/svg/889/889744.svg"
        }
    ] as Array<NavDataItemType>
}

export type NavbarInitialStateType = typeof initialState

let navbar_reducer = (state = initialState, action: any):NavbarInitialStateType => {

    return state
}

export default navbar_reducer

export type NavDataItemType = {
    id: number
    href: string
    name: string
    photo: string
}
