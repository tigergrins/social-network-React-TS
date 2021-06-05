import React from 'react';
import styles from './Posting.module.css';

type PostingPropsType = {
    addPost: (postMessage: string) => void
}

function Posting(props: PostingPropsType) {
    let newPostElement = React.useRef<HTMLInputElement>(null);

    const sendTextToState = () => {
        debugger
        if (null !== newPostElement.current) {
            let text = newPostElement.current.value
            props.addPost(text)

            newPostElement.current.value = ''
        }
    }

    return (
                <div className={styles.sending}>
                    <h2 className={styles.title}>My post</h2>
                    <input ref={newPostElement} type="text" className={styles.input} placeholder="your news"/>
                    <button onClick={sendTextToState} className={styles.button}>Send</button>
                </div>
    )
}

export default Posting;