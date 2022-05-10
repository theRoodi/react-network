import {rerender} from './../render'
let state = {
    profilePage: {
        postsData: [
            { id: 1, message: 'Hi!', likeCount: 15, views: 93 },
            { id: 2, message: 'Hi2!', likeCount: 11, views: 43 },
            { id: 3, message: 'Hi3!', likeCount: 12, views: 92 },
        ],
        newPostText: 'post text'
    },
    dialogPage: {
        messagesData: [
            { id: 1, message: 'one' },
            { id: 2, message: 'two' },
            { id: 3, message: 'three' },
        ],
        dialogsData: [
            { id: 1, name: 'Igor' },
            { id: 2, name: 'Max' },
            { id: 3, name: 'Dima' },
            { id: 4, name: 'Vova' }
        ]
    }

}

window.state = state

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likeCount : 0,
        views : 0
    }

    state.profilePage.postsData.push(newPost)
    state.profilePage.newPostText = ''
    rerender(state)
}

export let postUpdate = (newText) => {
    state.profilePage.newPostText = newText;
    rerender(state);
}

export default state;

