import React, {ComponentType} from 'react'
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {AppStateType} from '../redux/redux-store';

type MapStateToPropsType = {
    isAuth:  boolean
}

const mapStateToPropsForRedirect = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
    }
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: MapStateToPropsType) => {
        const {isAuth, ...restProps} = props

        console.log(isAuth)

        if (!isAuth) return <Redirect to={'/login'}/>

        return <Component {...restProps as T}/>
    }

    const ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent
}


