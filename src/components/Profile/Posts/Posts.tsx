import React from 'react';
import styles from './Posts.module.css';
import Posting from "./Posting/Posting";
import Posted from "./Posted/Posted";
import {ActionTypes, ProfilePageType} from '../../../redux/state';

type PostsPropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionTypes) => void
}

function Posts(props: PostsPropsType) {
    let postsElements = props.profilePage.posts.map((post) => <Posted message={post.message} likesCount={post.likesCount}/>);

    return (
            <section className={styles.posts}>
                <Posting newPostText={props.profilePage.newPostText}
                         dispatch={props.dispatch}
                />
                <div className={styles.items}>
                    {postsElements}
                </div>
            </section>
    )
}

export default Posts;