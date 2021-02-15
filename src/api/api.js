import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '718bf453-524a-48b2-8e84-c21eb40e723c'
    }
});

const usersAPI = {
    getUsers(size = 3, page = 1) {
        return instance.get(`users?count=${size}&page=${page}`)
            .then(responce => {
                return responce.data;
            });
    },
    follow(id) {
        return instance.post(`follow/${id}`)
            .then(responce => {
               return responce.data;
            });
    },
    unFollow(id) {
        return instance.delete(`follow/${id}`)
            .then(responce => {
                return responce.data;
            })
    }
};

export default usersAPI;

