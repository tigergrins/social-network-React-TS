import {ActionTypes, MessagesPageType} from './state';

// export type ActionTypes = ReturnType<typeof addMessageAC> | ReturnType<typeof updateNewTextMessageAC>

export const dialogsReducer = (state: MessagesPageType, action: ActionTypes) => {
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