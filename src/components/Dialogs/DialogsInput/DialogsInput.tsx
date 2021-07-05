import React, {ChangeEvent, KeyboardEvent} from 'react';
import styles from './DialogsInput.module.css';
import {ActionTypes, addMessageAC, updateNewTextMessageAC} from '../../../redux/state';

type DialogsInputPropsType = {
    dispatch: (action: ActionTypes) => void
    newMessageText: string
}

export const DialogsInput: React.FC<DialogsInputPropsType> = ({dispatch, newMessageText}) => {

    const addMessage = () => {
            dispatch(addMessageAC())
    }

    const onChangeInTextAreaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (null !== e.currentTarget.value) {
            let text = e.currentTarget.value

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
                      >
            </textarea>
            <button onClick={addMessage}>Отправить</button>
        </div>
    )
}