import React from 'react';
import {StoreFromReducersType} from './redux/redux-store';

export const StoreContext = React.createContext({} as StoreFromReducersType)

type ProviderPropsType = {
    store: StoreFromReducersType
    children: React.ReactNode
}

export const Provider = (props: ProviderPropsType) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
            </StoreContext.Provider>
    )
}