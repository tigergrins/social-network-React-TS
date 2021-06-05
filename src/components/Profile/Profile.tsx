import React from 'react';
import styles from './Profile.module.css';
import Posts from "./Posts/Posts";
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from '../../redux/state';

type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: (postMessage: string) => void
}

const Profile: React.FC<ProfilePropsType> = ({profilePage, addPost}) => {
    return (
        <section className={styles.content}>
            <ProfileInfo />
            <Posts profilePage={profilePage} addPost={addPost}/>
        </section>
    )
}

export default Profile;