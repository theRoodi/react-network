const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'


let initialState = {
    postsData: [
        { id: 1, message: 'Hi!', likeCount: 15, views: 93 },
        { id: 2, message: 'Hi2!', likeCount: 11, views: 43 },
        { id: 3, message: 'Hi3!', likeCount: 12, views: 92 },
    ],
    newPostText: 'post text'
}

export const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount : 0,
                views : 0
            }
            state.postsData.push(newPost)
            state.newPostText = ''
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            break
        default:
            break
    }

    return state
}

export const addPostActionCreator = () => {
    return {
        type : ADD_POST
    }
}
export const updateNewPostActionCreator = (textUpdate) => {
    return {
        type : UPDATE_NEW_POST_TEXT,
        newText : textUpdate
    }
}