import React, {ChangeEvent, KeyboardEvent} from 'react';
import styles from './DialogsInput.module.css';
import {ActionTypes, addMessageAC, updateNewTextMessageAC} from '../../../redux/store';

type DialogsInputPropsType = {
    newMessageText: string
    addMessage: () => void
    updateNewTextMessage: (text: string) => void
}

export const DialogsInput: React.FC<DialogsInputPropsType> = (props) => {

    const addMessage = () => {
        props.addMessage()
    }

    const onChangeInTextAreaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (null !== e.currentTarget.value) {
            let text = e.currentTarget.value
            props.updateNewTextMessage(text)
        }
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.charCode === 13) {
            addMessage();
        }
    }

    return (
        <div>
            <textarea value={props.newMessageText}
                      onChange={onChangeInTextAreaHandler}
                      onKeyPress={onKeyPressHandler}
                      className={styles.textarea}
            >
            </textarea>
            <button onClick={addMessage}>Отправить</button>
        </div>
    )
}