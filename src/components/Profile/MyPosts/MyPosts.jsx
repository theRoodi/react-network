import Post from "./Post/Post"

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Send</button>
            </div>
            <Post likeCount='15' message='Hi!' />
            <Post likeCount='12' message='first post' />
        </div>
    )
}

export default MyPosts