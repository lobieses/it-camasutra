import { createSelector } from 'reselect';

export const getUsers = (state) => {
    return state.findUsersPage.users;
}

export const getSuperUsers = createSelector(getUsers,
        (users) => {
        console.error('ABOBA ВЫРУБИ НАХУЙ ОБУЧАЛКУ ПО РЕСЕЛЕКТОРУ')
        return users.filter(u => true);
        }
    );

export const getPageSize = (state) => {
    return state.findUsersPage.pageSize;
}

export const getFocusPage = (state) => {
    return state.findUsersPage.focusPage;
}

export const getTotalCounts = (state) => {
    return state.findUsersPage.totalCounts;
}

export const getFollowingInProgressUsers = (state) => {
    return state.findUsersPage.followingInProgressUsers;
}

export const getIsFetching = (state) => {
    return state.findUsersPage.isFetching;
}