import React from 'react';
import style from './FindUsers.module.css';
import User from './User/User';

const FindUsers = (props) => {

    if(props.findUsersPage.users.length === 0) {
        props.setUsers([
        {id: 1,fullName: 'Катя Д.', followed: true, avatarURL: 'https://n1s1.hsmedia.ru/01/35/7f/01357f0e8f70d876c90cc0f5a681c6bb/620x429_1_02503db0df69f8beb9324bb72a99e23e@1200x831_0xac120003_12947200691611090922.jpg',
            status: 'Пожилое позорище', location: {city: 'Донбас', country: 'Украина'}},
        {id: 2,fullName: 'Герой Донбасса', followed: false, avatarURL: 'https://n1s1.hsmedia.ru/01/35/7f/01357f0e8f70d876c90cc0f5a681c6bb/620x429_1_02503db0df69f8beb9324bb72a99e23e@1200x831_0xac120003_12947200691611090922.jpg',
            status: 'Я ежжу на бендерМобиле', location: {city: 'Донецк', country: 'Украина'}},
        {id: 3,fullName: 'Павел У.', followed: true, avatarURL: 'https://n1s1.hsmedia.ru/01/35/7f/01357f0e8f70d876c90cc0f5a681c6bb/620x429_1_02503db0df69f8beb9324bb72a99e23e@1200x831_0xac120003_12947200691611090922.jpg',
            status: 'Я весь в калловых массах', location: {city: 'Аква-дискотека', country: 'Геленджик'}},
    ]); 
    }

    const createUsers = props.findUsersPage.users.map(info => {
        return <User key={info.id} userInfo={info} onFollow={props.onFollow} onUnfollow={props.onUnfollow}/>
    });
    return (
        <div> 
            <div className={style.namePage}>
                Users
            </div>
            <div className={style.users}>            
                {createUsers}     
            </div>
            <div className={style.loadMore}>
                <button>Show more</button>
            </div>
        </div>
    )
}   

export default FindUsers;