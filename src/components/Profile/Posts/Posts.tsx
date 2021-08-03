import React from 'react';
import styles from './Posts.module.css';
import Posting from "./Posting/Posting";
import Posted from "./Posted/Posted";
import {PostsType} from '../../../redux/profile-reducer';

type PostsPropsType = {
    posts: Array<PostsType>
    newPostText: string
    addPost: () => void
    onChangeInTextArea: (text: string) => void
}

function Posts(props: PostsPropsType) {
    let postsElements = props.posts.map((post) => <Posted message={post.message} likesCount={post.likesCount}/>);

    return (
            <section className={styles.posts}>
                <Posting newPostText={props.newPostText}
                         addPost={props.addPost}
                         onChangeInTextArea={props.onChangeInTextArea}
                />
                <div className={styles.items}>
                    {postsElements}
                </div>
            </section>
    )
}

export default Posts;