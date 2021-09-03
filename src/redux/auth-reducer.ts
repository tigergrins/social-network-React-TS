const SET_USER_DATA = 'SET_USER_DATA'


export type InitType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

const initialState: InitType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

export type UsersActionsTypes = ReturnType<typeof setAuthUserData>


export const authReducer = (state = initialState, action: UsersActionsTypes): InitType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data
            }
        }
        default:
            return state
    }
}

export const setAuthUserData = (id: number, email: string, login: string) => ({type: SET_USER_DATA, data: {id, email, login}} as const)
