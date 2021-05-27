import React from 'react';
import styles from './Posted.module.css';

type PostedMessagePropsType = {
    message: string,
    likesCount:number
}

function Posted(props: PostedMessagePropsType) {
    return (
        <div className={styles.item}>
            <p>{props.message}</p>
            <p>Like: {props.likesCount}</p>
        </div>

    )
}

export default Posted;