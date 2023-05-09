import React from "react";
import styles from './Profile.module.css'
import MyPosts from "../MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo";

import {ActionsTypes, PostDataType} from "../../redux/State";
import {MyPostsContainer} from "../MyPosts/MyPostsContainer";

export type ProfilePropsType = {
    profilePage: PostDataType[]
    newPostText: string
    dispatch: (action: ActionsTypes) => void


}
export const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer />
            {/*<MyPosts profilePage={props.profilePage}*/}
            {/*         dispatch={props.dispatch}*/}
            {/*         newPostText={props.newPostText}*/}


        </div>
    )
};
