import Post from "./Post/Post"
import style from './MyPosts.module.css'

const MyPosts = () => {
    let postsData = [
        { id: 1, text: 'Hi!', likeCount: 15, views: 93 },
        { id: 2, text: 'Hi2!', likeCount: 11, views: 43 },
        { id: 3, text: 'Hi3!', likeCount: 12, views: 92 },
    ]

    let postsElement = postsData.map((data) => {
        return <Post likeCount = {data.likeCount} views = {data.views} message = {data.message} />
    })

return (
    <div className={style.postsBlock}>
        My posts
        <div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Send</button>
            </div>

        </div>
        {postsElement}
    </div>
)
}

export default MyPosts