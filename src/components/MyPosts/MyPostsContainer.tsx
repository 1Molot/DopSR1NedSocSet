import React, {ChangeEvent, useState,KeyboardEvent} from "react";
import styles from './MyPosts.module.css'
import Post from "./Post/Post";
import {ActionsTypes, addPostAC, PostDataType, ProfilePagesType, updateNewTextAC} from "../../redux/State";
import {connect, MapDispatchToProps} from "react-redux";
import {Dialogs} from "../Dialogs/Dialogs";
import MyPosts from "./MyPosts";
import {StateType} from "../../redux/Redux-store";
import {Dispatch} from "redux";

//
// export type MyPostsPropsType = {
//     profilePage: Array<PostDataType>
//     newPostText:string
//     dispatch: (action: ActionsTypes) => void
//
// }
//
// const MyPosts = (props: MyPostsPropsType) => {
//
//     let postsElements = props.profilePage.map(el => <Post key={el.id} title={el.text} likesCount={el.likesCount}/>)
//
//     const addPost = () => {
//         props.dispatch(addPostAC(props.newPostText))
//     }
//     const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
//         props.dispatch(updateNewTextAC(e.currentTarget.value))
//     }
//     const onEnterClick=(e:KeyboardEvent<HTMLTextAreaElement>)=>{
//         if (e.key === "Enter"){
//             addPost()
//         }
//     }
//     return (
//         <div className={styles.postsBlock}>
//             <h3> My posts </h3>
//             <div>
//                 <div>
//                     <textarea
//                         onKeyDown={onEnterClick}
//                         value={props.newPostText}
//                         onChange={onChangeHandler}
//                     />
//                 </div>
//
//                 <div>
//                     <button onClick={addPost}>Add post</button>
//                 </div>
//             </div>
//
//             <div className={styles.posts}>
//                 {postsElements}
//             </div>
//         </div>
//     )profilePage:
// };
// export default MyPosts;
type MapStateToPropsType = ProfilePagesType
const mapStateToProps = (store: StateType): MapStateToPropsType => {
    return {
        posts: store.profilePage.posts,
        newPostText: store.profilePage.newPostText
    }
}

type MapDispatchToPropsType = {
    addPost: (postText:string) => void
    onChangeInput: (postText:string) => void
}

export type MyPostsContainerType = MapDispatchToPropsType & MapStateToPropsType

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType=> {
    return {
        addPost: (postText:string)=>{
            dispatch(addPostAC(postText))
        },
        onChangeInput: (postText:string)=>{
            dispatch(updateNewTextAC(postText))
        }
    }
}

export const MyPostsContainer= connect(mapStateToProps, mapDispatchToProps)(MyPosts)