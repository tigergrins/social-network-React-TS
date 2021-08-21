import React from 'react';
import {UserType} from '../../redux/users-reducer';
import styles from './Users.module.css'
import axios from 'axios'

type UsersPropsType = {
    users: Array<UserType>
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
}

export function Users(props: UsersPropsType) {
    if (props.users.length === 0) {

        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
            props.setUsers(response.data.items)
            console.log(response)
        })
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