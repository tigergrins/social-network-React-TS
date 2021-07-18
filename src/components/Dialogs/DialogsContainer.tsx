import React from 'react';
import {addMessageAC, updateNewTextMessageAC} from '../../redux/store';
import {Dialogs} from './Dialogs';
import {StoreContext} from '../../StoreContext';

export const DialogsContainer: React.FC = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    if (store) {
                        const dialogs = store.getState().dialogsPage.dialogs
                        const messages = store.getState().dialogsPage.messages
                        const newMessageText = store.getState().dialogsPage.newMessageText

                        const addMessage = () => {
                            store.dispatch(addMessageAC())
                        }

                        const updateNewTextMessage = (text: string) => {
                            store.dispatch(updateNewTextMessageAC(text))
                        }

                        return (<Dialogs dialogs={dialogs}
                                         messages={messages}
                                         newMessageText={newMessageText}
                                         addMessage={addMessage}
                                         updateNewTextMessage={updateNewTextMessage}/>)
                    }
                }
            }


        </StoreContext.Consumer>

    )
}