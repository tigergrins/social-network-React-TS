import React from 'react';
import styles from './Profile.module.css';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostsContainer} from './Posts/PostsContainer';

type ProfilePropsType = {
}

const Profile: React.FC<ProfilePropsType> = () => {
    return (
        <section className={styles.content}>
            <ProfileInfo/>
            <PostsContainer />
        </section>
    )
}

export default Profile;