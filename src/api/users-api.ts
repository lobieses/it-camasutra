import {APIResponseType, GetItemsType, instance} from "./api";

export const usersAPI = {
    getUsers(size = 3, page = 1) {
        return instance.get<GetItemsType>(`users?count=${size}&page=${page}`)
            .then((response) => {
                return response.data;
            });
    },
    follow(id: number) {
        return instance.post<APIResponseType>(`follow/${id}`)
            .then((response) => {
                return response.data;
            });
    },
    unFollow(id: number) {
        return instance.delete(`follow/${id}`)
            .then((response) => {
                return response.data;
            }) as Promise<APIResponseType>;
    },
};