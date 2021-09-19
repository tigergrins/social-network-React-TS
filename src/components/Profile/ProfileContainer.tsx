import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {addPost, getProfile, getStatus, ProfileStateType, updateNewPostText} from '../../redux/profile-reducer';
import {AppStateType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

type PathParamsType = {
    userId: string
}

type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToProps & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = '2'

        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return <Profile profile={this.props.profile} status={this.props.status}/>
    }
}

type MapStateToPropsType = {
    profile:  ProfileStateType | null
    status: string | null
}

type MapDispatchToProps = {
    addPost: ()=> void
    updateNewPostText: (text: string)=> void
    getProfile: (userId: string) => void
    getStatus: (userId: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {addPost, updateNewPostText, getProfile, getStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)