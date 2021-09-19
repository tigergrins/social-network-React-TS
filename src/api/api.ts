import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'c21de9e1-5014-4f2f-9d2d-e6bed36f8ec1',
    },
})

export const usersAPI = {
    getUsers (currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    followUser (id: string) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    },
    unfollowUser (id: string) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    }
}

export const profileAPI = {
    getProfile (id: string) {
        return instance.get(`profile/${id}`)
            .then(response => response.data)
    },
    getStatus (id: string) {
        return instance.get(`profile/status/${id}`)
            .then(response => response.data)
    }
}

export const headerAPI = {
    getAuthorizedUser () {
        return instance.get(`auth/me`)
            .then(response => response.data)
    }
}