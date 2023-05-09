import React, {ChangeEvent, useState,KeyboardEvent} from "react";
import styles from './MyPosts.module.css'
import Post from "./Post/Post";
import {ActionsTypes, addPostAC, PostDataType, updateNewTextAC} from "../../redux/State";
import {MyPostsContainerType} from "./MyPostsContainer";


// export type MyPostsPropsType = {
//     profilePage: Array<PostDataType>
//     newPostText:string
//     addPost: (postText:string) => void
//     onChangeInput: (postText:string) => void
// }

const MyPosts = (props: MyPostsContainerType) => {

    let postsElements = props.posts.map(el => <Post key={el.id} title={el.text} likesCount={el.likesCount}/>)

    // const addPost = () => {
    //     props.dispatch(addPostAC(props.newPostText))
    // }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeInput(e.currentTarget.value)
    }
    const onEnterClick=(e:KeyboardEvent<HTMLTextAreaElement>)=>{
        if (e.key === "Enter"){
            props.addPost(props.newPostText)
        }
    }
    return (
        <div className={styles.postsBlock}>
            <h3> My posts </h3>
            <div>
                <div>
                    <textarea
                        onKeyDown={onEnterClick}
                        value={props.newPostText}
                        onChange={onChangeHandler}
                    />
                </div>

                <div>
                    <button onClick={()=>props.addPost(props.newPostText)}>Add post</button>
                </div>
            </div>

            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    )
};
export default MyPosts;