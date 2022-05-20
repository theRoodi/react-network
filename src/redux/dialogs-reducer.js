const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'


let initialState = {
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
    newMessageText: '12'
}

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageText = action.newText
            break
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newMessageText
            }
            state.messagesData.push(newMessage)
            state.newMessageText = ''
            break
        default:
            break
    }


    return state
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