import style from './MyPosts.module.css'
import React from "react"
import { addPostActionCreator, updateNewPostActionCreator } from "../../../redux/profile-reducer"
import MyPosts from "./MyPosts"


const MyPostsContainer = (props) => {
    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }
    let onPostChange = (text) => {
        let action = updateNewPostActionCreator(text)
        props.store.dispatch(action)
    }

    return (
        <div >
            <MyPosts 
                state = {props.store.getState().profilePage} 
                newPostText = {props.store.getState().profilePage.newPostText}
                updateNewPostText={onPostChange} 
                addPost={addPost} />
        </div>
    )
}

export default MyPostsContainer