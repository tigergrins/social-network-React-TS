import React, {ChangeEvent} from 'react';
import styles from './Dialogs.module.css';
import {DialogsItem} from './DialogsItem/DialogsItem';
import MessagesItem from './MessagesItem/MessagesItem';
import {DialogsInput} from './DialogsInput/DialogsInput';
import {ActionTypes, addMessageAC, MessagesPageType, updateNewTextMessageAC} from '../../redux/store';
import {Dialogs} from './Dialogs';
import {StoreType} from '../../redux/redux-store';

type DialogsPropsType = {
    store: StoreType
}

export const DialogsContainer: React.FC<DialogsPropsType> = ({store}) => {
    const dialogs = store.getState().dialogsPage.dialogs
    const messages = store.getState().dialogsPage.messages
    const newMessageText = store.getState().dialogsPage.newMessageText

    const addMessage = () => {
        store.dispatch(addMessageAC())
    }

    const updateNewTextMessage = (text: string) => {
        store.dispatch(updateNewTextMessageAC(text))
    }


    return (
        <Dialogs dialogs={dialogs}
                 messages={messages}
                 newMessageText={newMessageText}
                 addMessage={addMessage}
                 updateNewTextMessage={updateNewTextMessage}/>
    )
}