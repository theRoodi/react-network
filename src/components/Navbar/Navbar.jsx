import style from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={`${style.item} ${style.active}`}><a href='/profile'>Profile</a></div>
            <div className={style.item}><a href='/dialogs'>Messages</a></div>
            <div className={style.item}><a href='/news'>News</a></div>
        </nav>
    )
}

export default Navbar;