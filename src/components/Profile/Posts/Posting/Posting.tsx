import React from 'react';
import styles from './Posting.module.css';
import {ActionTypes} from '../../../../redux/state';

type PostingPropsType = {
    newPostText: string
    dispatch: (action: ActionTypes) => void
}

function Posting(props: PostingPropsType) {
    let newPostElement = React.useRef<HTMLTextAreaElement>(null);

    const sendTextToState = () => {
            // props.addPost()
        props.dispatch({type: 'ADD-POST'})
    }

    const onChangeInTextArea = () => {
        if (null !== newPostElement.current) {
            let text = newPostElement.current.value

            // props.updateNewPostText(text)
            props.dispatch({
                type: 'UPDATE-NEW-POST-TEXT',
                newText: text
            })
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