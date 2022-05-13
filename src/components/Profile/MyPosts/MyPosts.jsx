import Post from "./Post/Post"
import style from './MyPosts.module.css'
import React from "react"

const MyPosts = (props) => {
    let postsElement = props.state.postsData.map((data) => {
        return <Post likeCount = {data.likeCount} views = {data.views} message = {data.message} />
    })

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({ type : 'ADD-POST' })
    }
    const onPostChange = () => {
        let textUpdate = newPostElement.current.value;
        props.dispatch({ type : 'UPDATE-NEW-POST-TEXT', newText : textUpdate})
    }

return (
    <div className={style.postsBlock}>
        My posts
        <div>
            <div>
                <textarea 
                    onChange={onPostChange} 
                    ref={newPostElement} 
                    value={props.state.newPostText}></textarea>
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