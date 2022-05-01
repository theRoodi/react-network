import { NavLink } from 'react-router-dom'
import Dialog from './Dialog/Dialog';
import style from './Dialogs.module.css'
import Message from './Message/Message';

const Dialogs = (props) => {
    const setActive = ({ isActive }) =>(isActive ? style.active: style.dialog);

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <div className={style.dialog}>
                    <Dialog className={setActive} id='1' name= 'Igor' />
                </div>
                <div className={style.dialog}>
                <Dialog className={setActive} id='2' name= 'Max' />
                </div>
                <div className={style.dialog}>
                <Dialog className={setActive} id='3' name= 'Dima' />
                </div>
                <div className={style.dialog}>
                <Dialog className={setActive} id='4' name= 'Vova' />
                </div>
            </div>
            <div className={style.messages}>
                <Message message='one' />
                <Message message='two' />
                <Message message='three' />
            </div>

        </div>
    )
}

export default Dialogs