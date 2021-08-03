import React from 'react';
import {Dialogs} from './Dialogs';
import { connect } from 'react-redux';
import {AppDispatchType, AppStateType} from '../../redux/redux-store';
import {addMessageAC, DialogsType, MessagesType, updateNewTextMessageAC} from '../../redux/dialogs-reducer';
import {UserType} from '../../redux/users-reducer';

type MapStateToPropsType =  {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageText: string
}

type MapDispatchToPropsType =  {
    addMessage: () => void
    updateNewTextMessage: (text: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
    }
}

const mapDispatchToProps = (dispatch: AppDispatchType): MapDispatchToPropsType => {
    return {
        addMessage: () => {
            dispatch(addMessageAC())
        },
        updateNewTextMessage: (text: string) => {
            dispatch(updateNewTextMessageAC(text))
        },
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)