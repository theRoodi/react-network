import { NavLink } from 'react-router-dom'
import Dialog from './Dialog/Dialog';
import style from './Dialogs.module.css'
import Message from './Message/Message';

const Dialogs = (props) => {
    const setActive = ({ isActive }) =>(isActive ? style.active: style.dialog);

    let messagesData = [
        {id : 1, message : 'one'},
        {id : 2, message : 'two'},
        {id : 3, message : 'three'},
    ]

    let dialogsData = [
        {id:1, name : 'Igor'},
        {id:2, name : 'Max'},
        {id:3, name : 'Dima'},
        {id:4, name : 'Vova'}
    ]

    let dialogsElements = dialogsData.map( (dialog) => {
        return <Dialog className={setActive} id = {dialog.id} name = {dialog.name} />
    })
    let messagesElements = messagesData.map( (message) => {
        return <Message className={setActive} message = {message.message} />
    })

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>

        </div>
    )
}

export default Dialogs