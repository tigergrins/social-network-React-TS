import {ThunkAction} from 'redux-thunk';
import {AppStateType} from './redux-store';
import {headerAPI} from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA'


export type InitType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

const initialState: InitType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

export type AuthActionsTypes = ReturnType<typeof setAuthUserData>


export const authReducer = (state = initialState, action: AuthActionsTypes): InitType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state
    }
}

export const setAuthUserData = (id: number, email: string, login: string) => ({type: SET_USER_DATA, data: {id, email, login}} as const)

export type ThunkType = ThunkAction<void, AppStateType, unknown, AuthActionsTypes>

export const getAuthorizedUser = (): ThunkType => {
    return (dispatch, getState) => {
        headerAPI.getAuthorizedUser()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data
                    dispatch(setAuthUserData(id, email, login))
                }
            })
    }

}

