import {combineReducers, createStore} from 'redux';
import {profileReducer} from './profile-reducer';
import {dialogsReducer} from './dialogs-reducer';

export type StoreType = typeof store;

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

export let store = createStore(reducers)