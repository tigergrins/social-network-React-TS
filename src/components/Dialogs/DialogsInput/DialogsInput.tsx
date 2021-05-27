import React from 'react';
import styles from './DialogsInput.module.css';

export let DialogsInput = () => {
    return (
        <div>
            <textarea className={styles.textarea}></textarea>
            <button>Отправить</button>
        </div>
    )
}