const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

let store = {
    _state : {
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
            ],
            newMessageText: ''
        }
    
    },
    _rerender()  {
        console.log("state changed")
    },


    getState() {
        return this._state
    },
    subscribe(observer) {
        this._rerender = observer
    },

   
    dispatch(action) {
        if(action.type === ADD_POST){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCount : 0,
                views : 0
            }
            this._state.profilePage.postsData.push(newPost)
            this._state.profilePage.newPostText = ''
            this._rerender(this._state)
        } else if ( action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText;
            this._rerender(this._state);
        } else if ( action.type === UPDATE_NEW_MESSAGE_BODY ){
            this._state.dialogPage.newMessageText = action.newText
            this._rerender(this._state)
        } else if ( action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 4,
                message: this._state.dialogPage.newMessageText
            }
            this._state.dialogPage.messagesData.push(newMessage)
            this._state.dialogPage.newMessageText = ''
            this._rerender(this._state)

        }
    }
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

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}
export const updateNewMessageActionCreator = (textUpdate) => {
    return{
        type: UPDATE_NEW_MESSAGE_BODY,
        newText: textUpdate
    }
}

window.store = store

export default store;