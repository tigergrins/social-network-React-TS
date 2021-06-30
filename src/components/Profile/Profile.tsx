import React from 'react';
import styles from './Profile.module.css';
import Posts from "./Posts/Posts";
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ActionTypes, ProfilePageType} from '../../redux/state';

type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionTypes) => void
}

const Profile: React.FC<ProfilePropsType> = ({profilePage, dispatch}) => {
    return (
        <section className={styles.content}>
            <ProfileInfo />
            <Posts profilePage={profilePage}
                   dispatch={dispatch}
            />
        </section>
    )
}

export default Profile;