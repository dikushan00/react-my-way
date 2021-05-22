import {actions, NewsItemType, StoriesType} from "./news_reducer"
import newsReducer from "./news_reducer"


let state = {
    news: [
        {
            id: 1,
            fullName: 'Уютный домик',
            title: "Hello everyone. it is my first news post!",
            avatar: "http://a824.phobos.apple.com/us/r30/Purple3/v4/47/47/e2/4747e282-b06d-8c33-c4d8-b9c22db8abad/pr_source.png?downloadKey=1422036762_0750e892c607d16376f15f0523f383d6",
            photo: "https://sites.google.com/site/prirodanaha/_/rsrc/1468741750018/home/%D0%96%D0%B8%D0%B2%D0%B0%D1%8F-%D0%BF%D1%80%D0%B8%D1%80%D0%BE%D0%B4%D0%B0.jpg",
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
            photo: "https://content.onliner.by/news/original_size/9b099955c46555811d26c14efdb3af00.jpeg",
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
            photo: "https://vsluh.ru/uploads/2020/03/17/154154/fixed_large_b8213f97-e5d7-49ea-8085-2195204a7423.jpg",
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
            photo: "https://s.ura.news/images/news/upload/news/426/025/1052426025/2f82b66cdc059a737ef34fe31281c88e_760x0_700.800.0.0.jpg",
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

it('new comment should be added', () => {

    let action = actions.addNewComment(1, 'hh');

    let newState = newsReducer(state, action)

    expect(newState.news[0].comments.length).toBe(3)
})


it('add new like', () => {

    let action = actions.updateLikeCount(1);

    let newState = newsReducer(state, action)

    expect(newState.news[0].likesCount).toBe(6)
})

it('add new comments count', () => {
    
    let action = actions.addNewComment(1, 'hh');

    let newState = newsReducer(state, action)

    let action2 = actions.updateCommentCount(1);

    let newState2 = newsReducer(newState, action2)

    expect(newState2.news[0].CommentsCount).toBe(3)
})
