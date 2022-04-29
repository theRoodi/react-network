import { NavLink } from 'react-router-dom'
import style from './Dialogs.module.css'

const Dialogs = (props) => {
    const setActive = ({ isActive }) =>(isActive ? style.active: style.dialog);

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <div className={style.dialog}>
                    <NavLink className={setActive} to='/1'>One</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink className={setActive} to='/2'>Two</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink className={setActive} to='/3'>Three</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink className={setActive} to='/4'>Four</NavLink>
                </div>
            </div>
            <div className={style.messages}>
                <div className={style.message}>hi</div>
                <div className={style.message}>hi2</div>
                <div className={style.message}>hi3</div>
            </div>

        </div>
    )
}

export default Dialogs