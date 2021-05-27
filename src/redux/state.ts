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
}

export type MessagesPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
}

export let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hello!!!', likesCount: 6},
            {id: 2, message: 'My second post', likesCount: 1},
            {id: 3, message: 'My first post', likesCount: 123}
        ]
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
}

export const addPost = (postMessage: string) => {
    debugger
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
}