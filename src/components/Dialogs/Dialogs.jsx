import React from 'react';
import Dialog from './Dialog/Dialog';
import style from './Dialogs.module.css'
import Message from './Message/Message';

const Dialogs = (props) => {
    const setActive = ({ isActive }) =>(isActive ? style.active: style.dialog);

    let dialogsElements = props.dialogPage.dialogsData.map( (dialog) => {
        return <Dialog className={setActive} id = {dialog.id} name = {dialog.name} />
    })
    let messagesElements = props.dialogPage.messagesData.map( (message) => {
        return <Message className={setActive} message = {message.message} />
    })
    let newMessage = props.dialogPage.newMessageText

    let addMessage = () => {
        props.addMessage()
    }
    const onNewMessage = (e) => {
        let textUpdate = e.target.value;
        props.updateMessage(textUpdate)
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