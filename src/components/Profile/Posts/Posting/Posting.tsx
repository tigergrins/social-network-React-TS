import React from 'react';
import styles from './Posting.module.css';
import { useLayoutEffect } from 'react';


function Posting() {
    let newPostElement = React.useRef<HTMLInputElement>(null);

    useLayoutEffect(() => {
        console.log(newPostElement);
        if (null !== newPostElement.current) {
            let text = newPostElement.current.value;
        }
    })

    return (
                <div className={styles.sending}>
                    <h2 className={styles.title}>My post</h2>
                    <input ref={newPostElement} type="text" className={styles.input} placeholder="your news"/>
                    <button className={styles.button}>Send</button>
                </div>
    )
}

export default Posting;