const ADD_MESSAGE = 'ADD-MESSAGE';


let initialState = {
    dialogNames: [
        {id: 1, name: 'Serega'},
        {id: 2, name: 'Kate'},
        {id: 3, name: 'Eva'},
        {id: 4, name: 'Garilla'},
        {id: 5, name: 'Dodik'},
        {id: 6, name: 'Aboba Abobavich Abobkin'},
        {id: 7, name: 'Dynia Mirnaya'}
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