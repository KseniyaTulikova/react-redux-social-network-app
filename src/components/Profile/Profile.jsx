import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status = {props.status} userId ={props.userId} updateStatusThunkCreator = {props.updateStatusThunkCreator}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;