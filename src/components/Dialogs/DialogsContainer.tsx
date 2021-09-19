import React from 'react';
import {Dialogs} from './Dialogs';
import { connect } from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {addMessage, DialogsType, MessagesType, updateNewTextMessage} from '../../redux/dialogs-reducer';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

type MapStateToPropsType =  {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageText: string
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
        isAuth: state.auth.isAuth,
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        addMessage,
        updateNewTextMessage,
    }),
    withAuthRedirect
)(Dialogs)

