export type PostType = {
    id: number
    title: string
    likesCount: number
    photo: string
    comments: Array<CommentsType>
    CommentsCount: number
    liked: boolean
}
export type CommentsType = {
    userId: number
    commentId: number
    fullName: string
    text: string
    photo: string
}
export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type PhotosType = {
    small: string | null
    large: string | null
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: PhotosType
    fullName: string
    contacts: ContactsType
    aboutMe: string
}
export type SaveProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
}
export type UserType = {
    id: number
    name: string | null
    status: string | null
    photos: PhotosType
    followed: boolean
}
