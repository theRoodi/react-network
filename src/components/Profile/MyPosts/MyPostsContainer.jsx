import style from './MyPosts.module.css'
import React from "react"
import { addPostActionCreator, updateNewPostActionCreator } from "../../../redux/profile-reducer"
import MyPosts from "./MyPosts"
import { connect } from 'react-redux'
 
const mapStateToProps = (state) => {
    return{
        state: state.profilePage,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        addPost: ()=> {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text) => {
            let action = updateNewPostActionCreator(text)
            dispatch(action)
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer