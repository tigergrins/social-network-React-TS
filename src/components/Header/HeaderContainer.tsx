import React from 'react';
import {Header} from './Header';
import axios from 'axios';
import {setAuthUserData} from '../../redux/auth-reducer';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';

type OwnProps = {}
type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType & OwnProps

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0//auth/me`, {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login}/>
    }
}

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchToPropsType = {
    setAuthUserData: (id: number, email: string , login: string ) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}


export default connect<MapStateToPropsType, MapDispatchToPropsType, OwnProps, AppStateType>(mapStateToProps, {setAuthUserData})(HeaderContainer)
