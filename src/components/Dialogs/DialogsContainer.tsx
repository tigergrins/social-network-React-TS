import React from 'react';
import {addMessageAC, RootStateType, updateNewTextMessageAC} from '../../redux/store';
import {Dialogs} from './Dialogs';
import { connect } from 'react-redux';
import {DispatchType} from '../../redux/redux-store';

const mapStateToProps = (state: RootStateType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
    }
}

const mapDispatchToProps = (dispatch: DispatchType) => {
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