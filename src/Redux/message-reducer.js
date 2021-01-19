const UPDATE_TEXT_FOR_NEW_MESSAGE = 'UPDATE-TEXT-FOR-NEW-MESSAGE';
const ADD_MESSAGE = 'ADD-MESSAGE';


let initialState = {
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
};

const messageReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'UPDATE-TEXT-FOR-NEW-MESSAGE':
            state.textNewMessage = action.text;
            return state;
        case 'ADD-MESSAGE': 
            const newMessage = {
                name: 'name', message: state.textNewMessage
            }

            state.textNewMessage = '';

            state.chat.push(newMessage);
            return state;
        default: 
            return state;
    }
}

export let updateTextForNewMessageActionCreator = (text) => {           
    return {type: UPDATE_TEXT_FOR_NEW_MESSAGE, text};
}

export let addMessageActionCreator = () => {
    return {type: ADD_MESSAGE};
}

export default messageReducer;