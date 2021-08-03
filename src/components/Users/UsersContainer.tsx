import React from 'react';
import { connect } from 'react-redux';
import {Users} from './Users';
import {AppDispatchType, AppStateType} from '../../redux/redux-store';
import {followAC, setUsersAC, unfollowAC, UserType} from '../../redux/users-reducer';

type MapStateToPropsType =  {
    users: Array<UserType>
}

type MapDispatchToPropsType =  {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: AppDispatchType): MapDispatchToPropsType => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: string) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
