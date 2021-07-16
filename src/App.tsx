import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import {Footer} from './components/Footer/Footer';
import {Route} from 'react-router-dom';
import {Dialogs} from './components/Dialogs/Dialogs';
import {News} from './components/News/News';
import Settings from './components/Settings/Settings';
import {ActionTypes, RootStateType} from './redux/store';
import {StoreType} from './redux/redux-store';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';

type AppPropsType = {
    store: StoreType
    dispatch: (action: ActionTypes) => void
}

export const App: React.FC<AppPropsType> = ({store, dispatch}) => {
    const state = store.getState()

    return (
        <div className="wrapper">
            <Header/>
            <main className="main">
                <Sidebar/>

                <Route path="/profile/" render={() =>
                    <Profile store={store}/>}
                />
                <Route path="/dialogs/" render={() =>
                    <DialogsContainer store={store}/>}/>
                <Route path="/news/" render={() => <News/>}/>
                <Route path="/settings/" render={() => <Settings/>}/>
            </main>
            <Footer/>
        </div>
    );
}