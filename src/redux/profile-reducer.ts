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
}

export type ProfileActionsType = ReturnType<typeof addPost> | ReturnType<typeof updateNewPostText> |
    ReturnType<typeof setUserProfile>

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
        case 'SET-USER-PROFILE': {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state
    }
}

export const addPost = () => ({type: 'ADD-POST'} as const)
export const updateNewPostText = (text: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText: text} as const)
export const setUserProfile = (profile: ProfileStateType | null) => ({type: 'SET-USER-PROFILE', profile} as const)