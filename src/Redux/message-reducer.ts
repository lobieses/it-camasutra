import {InferActionsTypes} from "./store";

type NameType = {
    id: number,
    name: string
}

type MessageType = {
    name: string,
    message: string
}

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
    ] as Array<NameType>,
    chat: [
        {name: 'name', message: 'hi'},
        {name: 'name', message: 'hi, i am the worst student'},
    ] as Array<MessageType>,
}

export type initialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>;

const messageReducer = (state = initialState, action: ActionsTypes): initialStateType => {
    switch(action.type) {
        case 'SN/MESSAGE/ADD_MESSAGE': {
            return {
                ...state,
                chat: [...state.chat, {name: 'name', message: action.messageText}],
            };
        }
        default:
            return state;
    }
}

export const actions = {
    addMessage: (messageText: string) => ({type: 'SN/MESSAGE/ADD_MESSAGE', messageText} as const)
}

export default messageReducer;