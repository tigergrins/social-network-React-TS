import React from 'react';
import {addPostAC, updateNewPostTextAC} from '../../../redux/store';
import { StoreContext } from '../../../StoreContext';
import Posts from './Posts';

export function PostsContainer() {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const posts = store.getState().profilePage.posts
                    const newPostText = store.getState().profilePage.newPostText

                    const addPost = () => {
                        store.dispatch(addPostAC())
                    }

                    const onChangeInTextArea = (text: string) => {
                        const action = updateNewPostTextAC(text)
                        store.dispatch(action)
                    }

                    return (
                        <Posts posts={posts}
                               newPostText={newPostText}
                               addPost={addPost}
                               onChangeInTextArea={onChangeInTextArea}/>
                    )
                }
            }
        </StoreContext.Consumer>

    )
}