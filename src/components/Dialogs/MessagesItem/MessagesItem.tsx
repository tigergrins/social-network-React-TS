import React from 'react';
import styles from './MessagesItem.module.css';

type MessagesItemPropsType = {
    message: string
};

const MessagesItem: React.FC<MessagesItemPropsType> = ({message}) => {
    return (
        <div>
            <div className={styles.message}>{message}</div>
        </div>
    )
};

export default MessagesItem;