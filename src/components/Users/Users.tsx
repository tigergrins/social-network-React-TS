import React from 'react';
import {UserType} from '../../redux/users-reducer';
import styles from './Users.module.css'
import axios from 'axios'
import userPhoto from '../../assets/images/user.png'
import {ReactComponent} from '*.svg';

type UsersPropsType = {
    users: Array<UserType>
    pageSize: number
    totalCount: number
    currentPage: number
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

export class Users extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }


        return (
            <div>
                <div>
                    {pages.map(p => {
                        return <span className={`${styles.pageNumber} ${this.props.currentPage === p ? styles.selectedPage : ''}`}
                        onClick={() => this.onPageChanged(p)}>{p}</span>
                    })}
                </div>

                {
                    this.props.users.map(u => <div key={u.id} className={styles.users}>
                            <div>
                                <img src={u.photoUrl != null ? u.photoUrl : userPhoto} alt="photo"
                                     className={styles.photo}/>
                            </div>
                            <div>
                                {u.followed ? <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>Unfollow</button> : <button onClick={() => {
                                    this.props.follow(u.id)
                                }}>Follow</button>}
                            </div>
                            <div>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                                <div>location.country</div>
                                <div>location.city</div>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}