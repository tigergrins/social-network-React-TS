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
import {RootStateType} from './redux/state';

type AppPropsType = {
    state: RootStateType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

export const App: React.FC<AppPropsType> = ({state, addPost, updateNewPostText}) => {
    return (
        <div className="wrapper">
            <Header/>
            <main className="main">
                <Sidebar/>

                <Route path="/profile/" render={() =>
                    <Profile profilePage={state.profilePage}
                             addPost={addPost}
                             updateNewPostText={updateNewPostText}
                    />}
                />
                <Route path="/dialogs/" render={() => <Dialogs messagesPage={state.messagesPage}/>}/>
                <Route path="/news/" render={() => <News/>}/>
                <Route path="/settings/" render={() => <Settings/>}/>
            </main>
            <Footer/>
        </div>
    );
}