import style from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://images.ctfassets.net/hrltx12pl8hq/5KiKmVEsCQPMNrbOE6w0Ot/341c573752bf35cb969e21fcd279d3f9/hero-img_copy.jpg' />
            </div>
            <div className={style.avatar}>
                <img src='https://static.vecteezy.com/system/resources/previews/000/425/632/large_2x/avatar-icon-vector-illustration.jpg' />
            </div>
        </div>
    )
}

export default ProfileInfo