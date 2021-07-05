import {ActionTypes, ProfilePageType} from './state';

// export type ActionTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC>

export const profileReducer = (state: ProfilePageType, action: ActionTypes) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost)
            state.newPostText = 'Напиши, что-думаешь...'
            return state
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

// export const addPostAC = () => ({type: 'ADD-POST'} as const)
// export const updateNewPostTextAC = (text: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText: text} as const)