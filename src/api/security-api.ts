import {instance} from "./api";

type getCaptchaUrlResponseType = {
    url: string
}

export const security = {
    getCaptchaUrl() {
        return instance.get<getCaptchaUrlResponseType>(`security/get-captcha-url`)
            .then((response: any) => {
                return response.data;
            });
    }
}