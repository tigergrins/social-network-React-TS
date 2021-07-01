import React from 'react';
import styles from './Dialogs.module.css';
import {DialogsItem} from './DialogsItem/DialogsItem';
import MessagesItem from './MessagesItem/MessagesItem';
import {DialogsInput} from './DialogsInput/DialogsInput';
import {ActionTypes, MessagesPageType} from '../../redux/state';

type DialogsPropsType = {
    messagesPage: MessagesPageType
    dispatch: (action: ActionTypes) => void
}

export const Dialogs: React.FC<DialogsPropsType> = ({messagesPage, dispatch}) => {
    let dialogsElements = messagesPage.dialogs.map(
        (dialog: { name: string; id: number; }) => <DialogsItem name={dialog.name} id={dialog.id}/>);

    let messagesElements = messagesPage.messages.map(
        (message: { message: string}) => <MessagesItem message={message.message}/>);

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messagesItems}>
                {messagesElements}
                <DialogsInput dispatch={dispatch}
                              newMessageText={messagesPage.newMessageText}/>
            </div>
        </div>
    )
}