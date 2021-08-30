import {AppActionsType} from './redux-store';


const initialState = {
    posts: [
        {id: '1', message: 'Hello!!!', likesCount: 6},
        {id: '2', message: 'My second post', likesCount: 1},
        {id: '3', message: 'My first post', likesCount: 123}
    ],
    newPostText: 'Напиши, что-думаешь...'
}

type InitType = {
    posts: Array<PostsType>
    newPostText: string
}

export type PostsType = {
    id: string
    message: string
    likesCount: number
}

export type ProfileActionsType = ReturnType<typeof addPost> | ReturnType<typeof updateNewPostText>

export const profileReducer = (state= initialState, action: AppActionsType): InitType => {
    switch (action.type) {
        case 'ADD-POST': {
            let newPost = {
                id: '5',
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: 'Напиши, что-думаешь...'
            }
        }
        case 'UPDATE-NEW-POST-TEXT': {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default:
            return state
    }
}

export const addPost = () => ({type: 'ADD-POST'} as const)
export const updateNewPostText = (text: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText: text} as const)