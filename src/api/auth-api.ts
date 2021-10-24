import {APIResponseType, instance, ResultCodeForCapctha, ResultCodes} from "./api";

type MeResponseType = {
    id: number,
    email: string,
    login: string
}

type LoginResponseDataType = {
    userId: number
}

export const authMe = {
    me() {
        return instance.get<APIResponseType<MeResponseType>>(`auth/me`)
            .then((response) => {
                return response.data;
            });
    },
    login(email: string, password: string, rememberMe: boolean, captcha: string | null) {
        return instance.post<APIResponseType<LoginResponseDataType, ResultCodes | ResultCodeForCapctha>>(`auth/login`, {email, password, rememberMe, captcha})
            .then((response) => {
                return response.data;
            });
    },
    logout() {
        return instance.post<APIResponseType>(`auth/logout`)
            .then((response) => {
                return response.data;
            });
    }
};