import {ActionTypes, ProfilePageType} from './store';

// export type ActionTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC>

const initialState = {
    posts: [
        {id: 1, message: 'Hello!!!', likesCount: 6},
        {id: 2, message: 'My second post', likesCount: 1},
        {id: 3, message: 'My first post', likesCount: 123}
    ],
    newPostText: 'Напиши, что-думаешь...'
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes) => {
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