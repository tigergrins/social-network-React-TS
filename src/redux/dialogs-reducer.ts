import {AppActionsType} from './redux-store';

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

export type InitType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageText: string
}

export type DialogsType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    message: string
}

export type MessagesActionType = ReturnType<typeof addMessage> | ReturnType<typeof updateNewTextMessage>

export const dialogsReducer = (state = initialState, action: AppActionsType): InitType => {
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

export const addMessage = () => ({type: 'ADD-MESSAGE'} as const)
export const updateNewTextMessage = (text: string) => ({type: 'UPDATE-NEW-TEXT-MESSAGE', textMessage: text} as const)