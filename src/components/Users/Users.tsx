import React from 'react';
import {UserType} from '../../redux/users-reducer';
import styles from './Users.module.css'
import userPhoto from '../../assets/images/user.png'
import {NavLink} from 'react-router-dom';

type UsersPropsType = {
    users: Array<UserType>
    pageSize: number
    totalCount: number
    currentPage: number
    followingInProgress: string[]
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
                            <NavLink to={`/profile/${u.id}`}>
                                <img src={u.photoUrl != null ? u.photoUrl : userPhoto} alt="photo"
                                     className={styles.photo}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                          onClick={() => {
                                              props.unfollow(u.id)
                                          }}>Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                          onClick={() => {
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