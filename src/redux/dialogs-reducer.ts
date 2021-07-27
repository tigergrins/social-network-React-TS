import {ActionTypes, MessagesPageType} from './store';

// export type DialogsReducerActionTypes = ReturnType<typeof addMessageAC> | ReturnType<typeof updateNewTextMessageAC>

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
        case 'ADD-MESSAGE':
            let newMessage = {id: 12, message: state.newMessageText}
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state
        case 'UPDATE-NEW-TEXT-MESSAGE':
            state.newMessageText = action.textMessage
            return state
        default:
            return state
    }
}

// export const addMessageAC = () => ({type: 'ADD-MESSAGE'} as const)
// export const updateNewTextMessageAC = (text: string) => ({type: 'UPDATE-NEW-TEXT-MESSAGE', textMessage: text} as const)