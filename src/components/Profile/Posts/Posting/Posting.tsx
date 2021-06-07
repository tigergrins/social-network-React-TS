import React from 'react';
import styles from './Posting.module.css';

type PostingPropsType = {
    addPost: () => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

function Posting(props: PostingPropsType) {
    let newPostElement = React.useRef<HTMLTextAreaElement>(null);

    const sendTextToState = () => {
            props.addPost()
    }

    const onChangeInTextArea = () => {
        if (null !== newPostElement.current) {
            let text = newPostElement.current.value

            props.updateNewPostText(text)
        }
    }
    return (
                <div className={styles.sending}>
                    <h2 className={styles.title}>My post</h2>
                    <textarea onChange={onChangeInTextArea} ref={newPostElement} className={styles.textarea} value={props.newPostText}/>
                    <button onClick={sendTextToState} className={styles.button}>Send</button>
                </div>
    )
}

export default Posting;

// placeholder="your news"