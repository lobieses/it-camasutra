const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    dialogNames: [
        {id: 1, name: 'Sergey'},
        {id: 2, name: 'Katya'},
        {id: 3, name: 'Eva'},
        {id: 4, name: 'Milla'},
        {id: 5, name: 'Masha'},
        {id: 6, name: 'Vera'},
        {id: 7, name: 'Andrusha'},
        {id: 8, name: 'Petrysha'},
        {id: 9, name: 'Bob'}

    ],
    chat: [
        {name: 'name', message: 'hi'},
        {name: 'name', message: 'hi, i am the worst student'},
    ],
}

type initialStateType = typeof  initialState

const messageReducer = (state = initialState, action: any): initialStateType => {
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

type addMessageType = {
    type: typeof  ADD_MESSAGE,
    messageText: string
}

export const addMessage = (messageText: string): addMessageType => {
    return {type: ADD_MESSAGE, messageText};
}

export default messageReducer;