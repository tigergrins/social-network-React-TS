import React from 'react';
import styles from './Profile.module.css';
import Posts from './Posts/Posts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ActionTypes, ProfilePageType} from '../../redux/store';
import {PostsContainer} from './Posts/PostsContainer';
import {StoreType} from '../../redux/redux-store';

type ProfilePropsType = {
    store: StoreType
}

const Profile: React.FC<ProfilePropsType> = ({store}) => {
    return (
        <section className={styles.content}>
            <ProfileInfo/>
            <PostsContainer store={store}/>
        </section>
    )
}

export default Profile;