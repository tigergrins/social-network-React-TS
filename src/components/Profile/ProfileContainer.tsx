import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {addPost, getProfile, ProfileStateType, updateNewPostText} from '../../redux/profile-reducer';
import {AppStateType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';

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
    profile: state.profilePage.profile
})

const withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {addPost, updateNewPostText, getProfile})(withUrlDataContainerComponent)