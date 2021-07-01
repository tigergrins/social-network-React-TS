import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import styles from './DialogsInput.module.css';
import {ActionTypes, addMessageAC, updateNewPostTextAC, updateNewTextMessageAC} from '../../../redux/state';

type DialogsInputPropsType = {
    dispatch: (action: ActionTypes) => void
    newMessageText: string
}

export const DialogsInput: React.FC<DialogsInputPropsType> = ({dispatch, newMessageText}) => {
    let newMessageElement = React.useRef<HTMLTextAreaElement>(null);

    const addMessage = () => {
            dispatch(addMessageAC())
    }

    const onChangeInTextAreaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (null !== newMessageElement.current) {
            let text = newMessageElement.current.value

            dispatch(updateNewTextMessageAC(text))
        }
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.charCode === 13) {
            addMessage();
        }
    }

    return (
        <div>
            <textarea value={newMessageText}
                      onChange={onChangeInTextAreaHandler}
                      onKeyPress={onKeyPressHandler}
                      className={styles.textarea}
                      ref={newMessageElement}>
            </textarea>
            <button onClick={addMessage}>Отправить</button>
        </div>
    )
}