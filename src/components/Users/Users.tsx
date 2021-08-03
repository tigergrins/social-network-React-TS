import React from 'react';
import {UserType} from '../../redux/users-reducer';
import styles from './Users.module.css'

type UsersPropsType = {
    users: Array<UserType>
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
}

export function Users(props: UsersPropsType) {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: '1',
                followed: true,
                photoUrl: 'https://skafeto.com/wp-content/uploads/2019/08/812321739111.jpeg',
                fullName: 'Danila',
                status: 'I\'m developer',
                location: {country: 'Russia', city: 'Moscow'}
            },
            {
                id: '2',
                followed: false,
                photoUrl: 'https://skafeto.com/wp-content/uploads/2019/08/812321739111.jpeg',
                fullName: 'Naida',
                status: 'I\'m psychologist',
                location: {country: 'Russia', city: 'Moscow'}
            },
            {
                id: '3',
                followed: true,
                photoUrl: 'https://skafeto.com/wp-content/uploads/2019/08/812321739111.jpeg',
                fullName: 'Mike',
                status: 'I\'m product-manager',
                location: {country: 'Russia', city: 'Moscow'}
            }
        ])
    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                        <div>
                            <img src={u.photoUrl} alt="photo" className={styles.photo}/>
                        </div>
                        <div>
                            {u.followed ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button> : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                        </div>
                        <div>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}