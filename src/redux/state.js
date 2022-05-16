import { dialogsReducer } from "./dialogs-reducer"
import { profileReducer } from "./profile-reducer"
import { sidebarReducer } from "./sidebar-reducer"

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
        },
        sidebar : {}
    
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
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        
        this._rerender(this._state)
    }
}

window.store = store

export default store;