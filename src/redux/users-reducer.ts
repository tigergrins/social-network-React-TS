const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

export type InitType = {
    users: Array<UserType>
}

const initialState: InitType = {
    users: [],
}

export type UserType = {
    id: string
    followed: boolean
    photoUrl: string
    name: string
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