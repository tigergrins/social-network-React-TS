import React from 'react';
import styles from './Posts.module.css';
import Posting from "./Posting/Posting";
import Posted from "./Posted/Posted";
import {ProfilePageType} from '../../../redux/state';

type PostsPropsType = {
    profilePage: ProfilePageType
    addPost: (postMessage: string) => void
}

function Posts(props: PostsPropsType) {
    let postsElements = props.profilePage.posts.map((post) => <Posted message={post.message} likesCount={post.likesCount}/>);

    return (
            <section className={styles.posts}>
                <Posting addPost={props.addPost}/>
                <div className={styles.items}>
                    {postsElements}
                </div>
            </section>
    )
}

export default Posts;