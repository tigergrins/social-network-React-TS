import {ActionTypes, MessagesPageType} from './store';

const initialState = {
    dialogs: [
        {id: 1, name: 'Naida'},
        {id: 2, name: 'Valentine'},
        {id: 3, name: 'Michael'},
        {id: 4, name: 'Bob'},
    ],

    messages: [
        {id: 1, message: 'Hello!'},
        {id: 2, message: 'Are you here?'},
        {id: 3, message: 'Zzz...zzz...zzz'}
    ],
    newMessageText: ''
}

export const dialogsReducer = (state: MessagesPageType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case 'ADD-MESSAGE': {
            let newMessage = {id: 12, message: state.newMessageText}
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: '',
            }
        }
        case 'UPDATE-NEW-TEXT-MESSAGE': {
            return {
                ...state,
                newMessageText: action.textMessage
            }
        }
        default:
            return state
    }
}