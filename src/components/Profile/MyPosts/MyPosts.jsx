import Post from "./Post/Post"
import style from './MyPosts.module.css'
import React from "react"

const MyPosts = (props) => {
    
    let postsElement = props.state.postsData.map((data) => {
        return <Post likeCount = {data.likeCount} views = {data.views} message = {data.message} />
    })

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text)
    }

return (
    <div className={style.postsBlock}>
        My posts
        <div>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Send</button>
            </div>

        </div>
        {postsElement}
    </div>
)
}

export default MyPosts