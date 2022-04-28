import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css'

const Navbar = () => {
    const setActive = ({ isActive }) =>(isActive ? style.active: style.item);
    return (
        <nav className={style.nav}>
            <div className={`${style.item} ${style.active}`}>
                <NavLink to='/profile' className={setActive}>Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/dialogs' className={setActive}>Messages</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/news' className={setActive}>News</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;