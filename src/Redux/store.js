import profileReducer from './profile-reducer';
import messageReducer from './message-reducer';

let store = {
    _state: {
        profilePage: {
            posts: [
                {message: '1'},
                {message: '2'},
                {message: '3'},
            ], 
            textNewPost: '',    
        },


        messagePage: {
            dialogNames: [
                {id: 1, name: 'Сережа'},
                {id: 2, name: 'Катя'},
                {id: 3, name: 'Эва'},
            ],
            chat: [
                {name: 'name', message: 'hi'},
                {name: 'name', message: 'hi'},
            ],
            textNewMessage: '',
        }
    },

    _callSubscriber() {
    
    },

    getState() {
        return this._state
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
         this._state.profilePage = profileReducer(this._state.profilePage, action);
         this._state.messagePage = messageReducer(this._state.messagePage, action);

         this._callSubscriber(this._state)
    }
}

export default store

















