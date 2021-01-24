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
        case UPDATE_TEXT_FOR_NEW_MESSAGE: {
            return {
                ...state,
                textNewMessage: action.text
            };
        }      
        case ADD_MESSAGE: {       
            return {
                ...state,
                chat: [...state.chat, {name: 'name', message: state.textNewMessage}],
                textNewMessage: ''
            };
        }
        default: 
            return state;
    }
}

export const updateTextForNewMessageActionCreator = (text) => {           
    return {type: UPDATE_TEXT_FOR_NEW_MESSAGE, text};
}

export const addMessageActionCreator = () => {
    return {type: ADD_MESSAGE};
}

export default messageReducer;