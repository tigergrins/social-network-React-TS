import React from 'react';
import styles from './Profile.module.css';
import Posts from "./Posts/Posts";
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from '../../redux/state';

type ProfilePropsType = {
    profilePage: ProfilePageType
}

const Profile: React.FC<ProfilePropsType> = ({profilePage}) => {
    return (
        <section className={styles.content}>
            <ProfileInfo />
            <Posts profilePage={profilePage}/>
        </section>
    )
}

export default Profile;