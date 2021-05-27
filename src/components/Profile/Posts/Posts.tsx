import React from 'react';
import styles from './Posts.module.css';
import Posting from "./Posting/Posting";
import Posted from "./Posted/Posted";


function Posts(props: any) {
    let postsElements = props.profilePage.posts.map((post: any) => <Posted message={post.message} likesCount={post.likesCount}/>);

    return (
            <section className={styles.posts}>
                <Posting />
                <div className={styles.items}>
                    {postsElements}
                </div>
            </section>
    )
}

export default Posts;