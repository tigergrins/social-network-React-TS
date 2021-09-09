import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {addPost, ProfileStateType, setUserProfile, updateNewPostText} from '../../redux/profile-reducer';
import {AppStateType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {profileAPI} from '../../api/api';

type PathParamsType = {
    userId: string
}

type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToProps & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = '2'

        profileAPI.getProfile(userId)
            .then(data => {
                this.props.setUserProfile(data)

            })
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
    setUserProfile: (profile: ProfileStateType | null)=> void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile
})

const withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {addPost, updateNewPostText, setUserProfile})(withUrlDataContainerComponent)