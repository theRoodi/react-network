import Post from "./Post/Post"
import style from './MyPosts.module.css'

const MyPosts = (props) => {
    
    let postsElement = props.state.postsData.map((data) => {
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