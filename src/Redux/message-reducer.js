const ADD_MESSAGE = 'ADD-MESSAGE';


let initialState = {
    dialogNames: [
        {id: 1, name: 'Сережа'},
        {id: 2, name: 'Катя'},
        {id: 3, name: 'Эва'},
    ],
    chat: [
        {name: 'name', message: 'hi'},
        {name: 'name', message: 'hi, i am dodik'},
    ],
};

const messageReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_MESSAGE: {       
            return {
                ...state,
                chat: [...state.chat, {name: 'name', message: action.messageText}],
            };
        }
        default: 
            return state;
    }
}

export const addMessage = (messageText) => {
    return {type: ADD_MESSAGE, messageText};
}

export default messageReducer;