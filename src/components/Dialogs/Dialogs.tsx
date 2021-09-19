import React from 'react';
import styles from './Dialogs.module.css';
import {DialogsItem} from './DialogsItem/DialogsItem';
import MessagesItem from './MessagesItem/MessagesItem';
import {DialogsInput} from './DialogsInput/DialogsInput';
import {DialogsType, MessagesType} from '../../redux/dialogs-reducer';
import {Redirect} from 'react-router-dom';

type DialogsPropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageText: string
    addMessage: () => void
    updateNewTextMessage: (text: string) => void
}

export const Dialogs: React.FC<DialogsPropsType> = ({dialogs, messages, newMessageText, addMessage, updateNewTextMessage}) => {
    let dialogsElements = dialogs.map(
        (dialog: { name: string; id: number; }) => <DialogsItem name={dialog.name} id={dialog.id} key={dialog.id}/>);

    let messagesElements = messages.map(
        (message: { message: string }) => <MessagesItem message={message.message}/>);

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messagesItems}>
                {messagesElements}
                <DialogsInput newMessageText={newMessageText}
                              addMessage={addMessage}
                              updateNewTextMessage={updateNewTextMessage}/>
            </div>
        </div>
    )
}