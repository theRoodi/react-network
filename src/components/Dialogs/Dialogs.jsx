import React from 'react';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogs-reducer';
import Dialog from './Dialog/Dialog';
import style from './Dialogs.module.css'
import Message from './Message/Message';

const Dialogs = (props) => {
    const setActive = ({ isActive }) =>(isActive ? style.active: style.dialog);

    let addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }

    let dialogsElements = props.state.dialogsData.map( (dialog) => {
        return <Dialog className={setActive} id = {dialog.id} name = {dialog.name} />
    })
    let messagesElements = props.state.messagesData.map( (message) => {
        return <Message className={setActive} message = {message.message} />
    })
    let newMessage = props.state.newMessageText

    const onNewMessage = (e) => {
        let textUpdate = e.target.value;
        props.dispatch(updateNewMessageActionCreator(textUpdate))
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>

            <div>
                <div>
                    <textarea value={newMessage}
                                onChange={onNewMessage}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Send</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs