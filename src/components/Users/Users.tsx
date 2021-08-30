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
    onPageChanged: (pageNumber: number) => void
}

export const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return (
        <div>
            <div>
                {pages.map((p, index) => {
                    return <span
                        key={index}
                        className={`${styles.pageNumber} ${props.currentPage === p ? styles.selectedPage : ''}`}
                        onClick={() => props.onPageChanged(p)}>{p}</span>
                })}
            </div>

            {
                props.users.map(u => <div key={u.id} className={styles.users}>
                        <div>
                            <img src={u.photoUrl != null ? u.photoUrl : userPhoto} alt="photo"
                                 className={styles.photo}/>
                        </div>
                        <div>
                            {u.followed ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button> : <button onClick={() => {
                                props.follow(u.id)
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