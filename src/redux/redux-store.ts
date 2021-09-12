import {combineReducers, createStore, Store, applyMiddleware} from 'redux';
import {ProfileActionsType, profileReducer} from './profile-reducer';
import {dialogsReducer, MessagesActionType} from './dialogs-reducer';
import {UsersActionsTypes, usersReducer} from './users-reducer';
import {authReducer} from './auth-reducer';
import thunkMiddleware from 'redux-thunk';

export type AppStoreType = typeof store
export type AppStateType = ReturnType<typeof RootReducer>
export type AppDispatchType = typeof store.dispatch
export type AppActionsType = ProfileActionsType | MessagesActionType | UsersActionsTypes

let RootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export let store: Store = createStore(RootReducer, applyMiddleware(thunkMiddleware))
