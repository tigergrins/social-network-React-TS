import React from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {follow, getUsers, setCurrentPage, unfollow, UserType} from '../../redux/users-reducer';
import {Users} from './Users';
import styles from './Users.module.css'
import {Preloader} from '../common/Preloader/Preloader';

type UsersAPIComponentPropsType = {
    users: Array<UserType>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: string[]
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setCurrentPage: (pageNumber: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

class UsersContainer extends React.Component<UsersAPIComponentPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return (
            <div className={styles.wrapper}>
                {this.props.isFetching ? <Preloader/> : null}
                <Users users={this.props.users}
                       pageSize={this.props.pageSize}
                       totalCount={this.props.totalCount}
                       currentPage={this.props.currentPage}
                       followingInProgress={this.props.followingInProgress}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       onPageChanged={this.onPageChanged}/>
            </div>
        )

    }
}

type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: string[]

}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    getUsers,
})(UsersContainer)
