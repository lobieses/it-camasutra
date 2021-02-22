import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '718bf453-524a-48b2-8e84-c21eb40e723c'
    }
});

export const profileAPI = {
    getUserProfile(id) {
        return instance.get(`profile/${id}`)
            .then(response => {
                return response.data;
            });
    },
    getStatus(id) {
        return instance.get(`profile/status/${id}`)
            .then(response => {
                return response.data;
            });
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, {status})
            .then(response => {
                return response.data;
            });
    }
}

export const usersAPI = {
    getUsers(size = 3, page = 1) {
        return instance.get(`users?count=${size}&page=${page}`)
            .then(response => {
                return response.data;
            });
    },
    follow(id) {
        return instance.post(`follow/${id}`)
            .then(response => {
               return response.data;
            });
    },
    unFollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data;
            });
    },
    getUserProfile(id) {
        console.error('ABOBA');
        return profileAPI.getUserProfile((id));
    }
};

export const authMe = {
    me() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;
            });
    }
};



