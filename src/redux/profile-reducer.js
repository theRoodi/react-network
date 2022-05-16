const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'


export const profileReducer = (state, action) => {
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