import {ActionTypes, ProfilePageType} from './store';

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
        case 'ADD-POST': {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = 'Напиши, что-думаешь...'
            return stateCopy
        }
        case 'UPDATE-NEW-POST-TEXT': {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText
            return stateCopy
        }
        default:
            return state
    }
}