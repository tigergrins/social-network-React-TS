const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

const initialState: InitType = {
    users: [
        {id: '1', followed: true, photoUrl: 'https://skafeto.com/wp-content/uploads/2019/08/812321739111.jpeg', fullName: 'Danila', status: 'I\'m developer', location: {country: 'Russia', city: 'Moscow'}},
        {id: '2', followed: false, photoUrl: 'https://skafeto.com/wp-content/uploads/2019/08/812321739111.jpeg', fullName: 'Naida', status: 'I\'m psychologist', location: {country: 'Russia', city: 'Moscow'}},
        {id: '3', followed: true, photoUrl: 'https://skafeto.com/wp-content/uploads/2019/08/812321739111.jpeg', fullName: 'Mike', status: 'I\'m product-manager', location: {country: 'Russia', city: 'Moscow'}}
    ],
}

export type InitType = {
    users: Array<UserType>
}

export type UserType = {
    id: string
    followed: boolean
    photoUrl: string
    fullName: string
    status: string
    location: LocationType
}

type LocationType = {
    country: string
    city: string
}

export type UsersActionsTypes = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC>

export const usersReducer = (state  = initialState, action: UsersActionsTypes): InitType => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map((user: UserType) => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map((user: UserType) => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state
    }
}

export const followAC = (userId: string) => ({type: FOLLOW, userId: userId} as const)
export const unfollowAC = (userId: string) => ({type: UNFOLLOW, userId: userId} as const)
export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users: users} as const)