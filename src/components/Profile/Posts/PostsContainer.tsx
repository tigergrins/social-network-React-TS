import React from 'react';
import {addPostAC, RootStateType, updateNewPostTextAC} from '../../../redux/store';
import Posts from './Posts';
import {DispatchType} from '../../../redux/redux-store';
import { connect } from 'react-redux';

const mapStoreToProps = (state: RootStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}

const mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        onChangeInTextArea: (text: string) => {
            const action = updateNewPostTextAC(text)
            dispatch(action)
        },
    }
}

export const PostsContainer = connect(mapStoreToProps, mapDispatchToProps)(Posts)