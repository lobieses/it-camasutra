import {APIResponseType, instance} from "./api";
import {PhotosType, profileType} from "../types/types";

type SavePhotoResponseDataType = {
    photos: PhotosType
}

export const profileAPI = {
    getUserProfile(id: number) {
        return instance.get<profileType>(`profile/${id}`)
            .then((response) => {
                return response.data;
            });
    },
    getStatus(id: number) {
        return instance.get<string>(`profile/status/${id}`)
            .then((response) => {
                return response.data;
            });
    },
    updateStatus(status: string) {
        return instance.put<APIResponseType>(`profile/status/`, {status})
            .then((response) => {
                return response.data;
            });
    },
    updatePhoto(file: File) {
        const formData = new FormData();
        formData.append("image", file);

        return instance.put<APIResponseType<SavePhotoResponseDataType>>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((response) => {
            return response.data;
        });
    },
    updateProfileData(profile: profileType) {
        return instance.put<APIResponseType>(`profile/`, profile)
            .then((response) => {
                return response.data;
            });
    }
};