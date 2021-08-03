import React from 'react';
import Posts from './Posts';
import {AppDispatchType, AppStateType} from '../../../redux/redux-store';
import { connect } from 'react-redux';
import {addPostAC, PostsType, updateNewPostTextAC} from '../../../redux/profile-reducer';

type MapStateToPropsType =  {
    posts: Array<PostsType>
    newPostText: string
}

type MapDispatchToPropsType =  {
    addPost: () => void
    onChangeInTextArea: (text: string) => void
}

const mapStoreToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}

const mapDispatchToProps = (dispatch: AppDispatchType): MapDispatchToPropsType => {
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