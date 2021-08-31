import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {addPost, ProfileStateType, setUserProfile, updateNewPostText} from '../../redux/profile-reducer';
import {AppStateType} from '../../redux/redux-store';

type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToProps

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

export default connect(mapStateToProps, {addPost, updateNewPostText, setUserProfile})(ProfileContainer)