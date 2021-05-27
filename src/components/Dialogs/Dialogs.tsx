import React from 'react';
import styles from './Dialogs.module.css';
import {DialogsItem} from './DialogsItem/DialogsItem';
import MessagesItem from './Messages/MessagesItem';
import {DialogsInput} from './DialogsInput/DialogsInput';
import {MessagesPageType} from '../../redux/state';

type DialogsPropsType = {
    messagesPage: MessagesPageType
}



export const Dialogs: React.FC<DialogsPropsType> = ({messagesPage}) => {
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
                <DialogsInput/>
            </div>
        </div>
    )
}