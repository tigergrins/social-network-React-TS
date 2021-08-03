import {combineReducers, createStore, Store} from 'redux';
import {ProfileActionsType, profileReducer} from './profile-reducer';
import {dialogsReducer, MessagesActionType} from './dialogs-reducer';
import {UsersActionsTypes, usersReducer} from './users-reducer';

export type AppStoreType = typeof store
export type AppStateType = ReturnType<typeof RootReducer>
export type AppDispatchType = typeof store.dispatch
export type AppActionsType = ProfileActionsType | MessagesActionType | UsersActionsTypes

let RootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
})

export let store: Store = createStore(RootReducer)
