import React from 'react';
import {ActionTypes, addPostAC, ProfilePageType, updateNewPostTextAC} from '../../../redux/store';
import Posts from './Posts';
import {StoreType} from '../../../redux/redux-store';

type PostsPropsType = {
    store: StoreType
}

export function PostsContainer(props: PostsPropsType) {
    const posts = props.store.getState().profilePage.posts
    const newPostText = props.store.getState().profilePage.newPostText

    const addPost = () => {
        props.store.dispatch(addPostAC())
    }

    const onChangeInTextArea = (text: string) => {
        const action = updateNewPostTextAC(text)
        props.store.dispatch(action)
    }

    return (
        <Posts posts={posts}
               newPostText={newPostText}
               addPost={addPost}
               onChangeInTextArea={onChangeInTextArea}/>
    )
}