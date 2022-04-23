import style from './Post.module.css'

const Post = () => {
    return (
        <div className={style.item}>
            <div><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/1200px-Breezeicons-actions-22-im-user.svg.png" /></div>
            <div>post here</div>
        </div>
    )
}

export default Post