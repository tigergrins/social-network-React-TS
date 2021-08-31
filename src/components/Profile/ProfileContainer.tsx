import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {addPost, ProfileStateType, setUserProfile, updateNewPostText} from '../../redux/profile-reducer';
import {AppStateType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter } from 'react-router-dom';

type PathParamsType = {
    userId: string
}

type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToProps & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        const userId = this.props.match.params.userId

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)

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