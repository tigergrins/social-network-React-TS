import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import {Footer} from './components/Footer/Footer';
import {Route} from 'react-router-dom';
import {News} from './components/News/News';
import Settings from './components/Settings/Settings';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

export const App: React.FC = () => {
    return (
        <div className="wrapper">
            <Header/>
            <main className="main">
                <Sidebar/>
                <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                <Route path="/dialogs/" render={() => <DialogsContainer/>}/>
                <Route path="/news/" render={() => <News/>}/>
                <Route path="/settings/" render={() => <Settings/>}/>
                <Route path="/users/" render={() => <UsersContainer/>}/>
            </main>
            <Footer/>
        </div>
    );
}