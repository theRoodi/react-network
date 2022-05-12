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
            ]
        }
    
    },
    getState() {
        return this._state
    },
    _rerender()  {
        console.log("state changed")
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likeCount : 0,
            views : 0
        }
        this._state.profilePage.postsData.push(newPost)
        this._state.profilePage.newPostText = ''
        this._rerender(this._state)
    },
    postUpdate(newText) {
        this._state.profilePage.newPostText = newText;
        this._rerender(this._state);
    },    
    subscribe(observer) {
        this._rerender = observer
    }
}

window.store = store

export default store;