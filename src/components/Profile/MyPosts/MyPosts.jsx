import Post from "./Post/Post"

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Send</button>
            </div>
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default MyPosts