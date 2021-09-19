import React from 'react';
import styles from './Profile.module.css';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostsContainer} from './Posts/PostsContainer';
import {ProfileStateType} from '../../redux/profile-reducer';

type ProfilePropsType = {
    profile: ProfileStateType | null
    status: string | null
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <section className={styles.content}>
            <ProfileInfo profile={props.profile} status={props.status}/>
            <PostsContainer/>
        </section>
    )
}

export default Profile;