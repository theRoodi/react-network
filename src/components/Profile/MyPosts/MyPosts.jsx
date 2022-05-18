import Post from "./Post/Post"
import style from './MyPosts.module.css'
import React from "react"
import { addPostActionCreator, updateNewPostActionCreator } from "../../../redux/profile-reducer"


const MyPosts = (props) => {
    let postsElement = props.state.postsData.map((data) => {
        return <Post likeCount = {data.likeCount} views = {data.views} message = {data.message} />
    })

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost() 
    }
    const onPostChange = () => {
        let textUpdate = newPostElement.current.value;
        props.updateNewPostText(textUpdate)
        }

return (
    <div className={style.postsBlock}>
        My posts
        <div>
            <div>
                <textarea 
                    onChange={onPostChange} 
                    ref={newPostElement} 
                    value={props.newPostText}></textarea>
            </div>
            <div>
                <button onClick={onAddPost}>Send</button>
            </div>

        </div>
        {postsElement}
    </div>
)
}

export default MyPosts