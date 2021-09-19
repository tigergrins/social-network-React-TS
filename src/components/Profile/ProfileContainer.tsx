import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {addPost, getProfile, ProfileStateType, updateNewPostText} from '../../redux/profile-reducer';
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
    }

    render() {
        return <Profile profile={this.props.profile} />
    }
}

type MapStateToPropsType = {
    profile:  ProfileStateType | null
}

type MapDispatchToProps = {
    addPost: ()=> void
    updateNewPostText: (text: string)=> void
    getProfile: (userId: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {addPost, updateNewPostText, getProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)