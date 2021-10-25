export type PhotosType = {
    small: string | null,
    large: string | null
}

export type userType = {
    name: string,
    id: number,
    uniqueUrlName: string | null,
    photos: PhotosType
    status: string | null,
    followed: boolean
}

export type profileType = {
    aboutMe: string,
    contacts: {
        facebook: string,
        website: string,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: string,
        github: string,
        mainLink: string
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: PhotosType
}

export type DialogName = {
    id: number,
    name: string
}