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
import {ActionTypes, RootStateType} from './redux/state';

type AppPropsType = {
    state: RootStateType
    dispatch: (action: ActionTypes) => void
}

export const App: React.FC<AppPropsType> = ({state, dispatch}) => {
    return (
        <div className="wrapper">
            <Header/>
            <main className="main">
                <Sidebar/>

                <Route path="/profile/" render={() =>
                    <Profile profilePage={state.profilePage}
                             dispatch={dispatch}
                    />}
                />
                <Route path="/dialogs/" render={() =>
                    <Dialogs messagesPage={state.messagesPage}
                             dispatch={dispatch}
                    />}/>
                <Route path="/news/" render={() => <News/>}/>
                <Route path="/settings/" render={() => <Settings/>}/>
            </main>
            <Footer/>
        </div>
    );
}