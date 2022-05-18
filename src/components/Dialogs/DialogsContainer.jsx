import React from 'react';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }
    const onNewMessage = (text) => {
        props.store.dispatch(updateNewMessageActionCreator(text))
    }

    return (
        <div >
            <Dialogs 
                updateMessage = {onNewMessage} 
                addMessage = {addMessage} 
                dialogPage = {props.store.getState().dialogPage}/>
        </div>
    )
}

export default DialogsContainer