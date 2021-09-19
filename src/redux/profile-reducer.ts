import {ThunkAction} from 'redux-thunk';
import {AppStateType} from './redux-store';
import {profileAPI} from '../api/api';
import {log} from 'util';

export type ContactsType = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
}

export type PhotosType = {
    small: string
    large: string
}

export type ProfileStateType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosType
}

type PostingType = {
    posts: Array<PostsType>
    newPostText: string
}

export type PostsType = {
    id: string
    message: string
    likesCount: number
}

type InitType = {
    posting: PostingType
    profile: ProfileStateType | null
    status: string | null
}

const initialState = {
    posting: {
        posts: [
            {id: '1', message: 'Projects!!!', likesCount: 6},
            {id: '2', message: 'My second post', likesCount: 1},
            {id: '3', message: 'My first post', likesCount: 123}
        ],
        newPostText: 'Напиши, что-думаешь...',
    },
    profile: null,
    status: null,
}

export type ProfileActionsType = ReturnType<typeof addPost>
    | ReturnType<typeof updateNewPostText>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setProfileStatus>

export const profileReducer = (state: InitType = initialState, action: ProfileActionsType): InitType => {
    switch (action.type) {
        case 'ADD-POST': {
            let newPost = {
                id: '5',
                message: state.posting.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posting: {
                    posts: [...state.posting.posts, newPost],
                    newPostText: 'Напиши, что-думаешь...',
                }
            }
        }
        case 'UPDATE-NEW-POST-TEXT': {
            return {
                ...state,
                posting: {
                    ...state.posting,
                    newPostText: action.newText
                }
            }
        }
        case 'SET-PROFILE-STATUS': {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state
    }
}

export const addPost = () => ({type: 'ADD-POST'} as const)
export const updateNewPostText = (text: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText: text} as const)
export const setUserProfile = (profile: ProfileStateType | null) => ({type: 'SET-USER-PROFILE', profile} as const)
export const setProfileStatus = (status: string | null) => ({type: 'SET-PROFILE-STATUS', status} as const)

export type ThunkType = ThunkAction<void, AppStateType, unknown, ProfileActionsType>

export const getProfile = (userId: string): ThunkType => {
    return (dispatch, getState) => {
        profileAPI.getProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data))
            })
    }
}

export const getStatus = (userId: string): ThunkType => {
    return (dispatch, getState) => {
        profileAPI.getStatus(userId)
            .then(status => dispatch(setProfileStatus(status)))
    }
}