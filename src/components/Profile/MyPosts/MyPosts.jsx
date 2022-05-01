import Post from "./Post/Post"
import style from './MyPosts.module.css'

const MyPosts = () => {
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
            <Post likeCount='15' views='93' message='Hi!' />
            <Post likeCount='12' views='23' message='first post' />
        </div>
    )
}

export default MyPosts