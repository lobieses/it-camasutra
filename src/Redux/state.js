export let store = {
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
        }
    },

    getState() {
        return this._state
    },

    addPost() {
        const newPost = {
            message: this._state.profilePage.textNewPost
        };

        this._state.profilePage.textNewPost = '';

        this._state.profilePage.posts.push(newPost);
        this._callSubscriber(this._state);
    },

    updateTextNewPost(text) {
        this._state.profilePage.textNewPost = text;
        this._callSubscriber(this._state);
    },

    _callSubscriber() {
    
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
}



















