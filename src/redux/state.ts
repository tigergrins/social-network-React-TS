type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type DialogsType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    message: string
}

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}

export type MessagesPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
}

export type ActionTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC>

export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    subscribe: (observer: (observer: RootStateType) => void) => void
    _callSubscriber: (state: RootStateType) => void
    dispatch: (action: ActionTypes) => void
}

export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello!!!', likesCount: 6},
                {id: 2, message: 'My second post', likesCount: 1},
                {id: 3, message: 'My first post', likesCount: 123}
            ],
            newPostText: 'Напиши, что-думаешь...'
        },

        messagesPage: {
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
        }
    },
    _callSubscriber (state: RootStateType) {},

    getState () {
        return this._state
    },
    subscribe (observer: (observer: RootStateType) => void)  {
        this._callSubscriber = observer
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = 'Напиши, что-думаешь...'
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }
    }
}

export const addPostAC = () => ({type: 'ADD-POST'} as const)
export const updateNewPostTextAC = (text: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText: text} as const)

// window.store = store
// addPost () {
//     let newPost = {
//         id: 5,
//         message: this._state.profilePage.newPostText,
//         likesCount: 0
//     };
//
//     this._state.profilePage.posts.push(newPost)
//
//     this._state.profilePage.newPostText = 'Напиши, что-думаешь...'
//
//     this._callSubscriber(this._state)
// },
// updateNewPostText (newText: string)  {
//     this._state.profilePage.newPostText = newText
//
//     this._callSubscriber(this._state)
// }




