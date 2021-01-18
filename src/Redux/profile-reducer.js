const UPDATE_TEXT_FOR_NEW_POST = 'UPDATE-TEXT-FOR-NEW-POST';
const ADD_POST = 'ADD-POST';


const profileReducer = (state, action) => {
    
    switch(action.type) {
        case 'UPDATE-TEXT-FOR-NEW-POST':
            state.textNewPost = action.text;
            return state;
        case 'ADD-POST': 
            const newPost = {
                message: state.textNewPost
            };
            state.textNewPost = '';

            state.posts.push(newPost);
            return state;
        default: 
            return state;
    }
}

export let updateTextForNewPostActionCreator = (text) => {           //PROFILE
    return {type: UPDATE_TEXT_FOR_NEW_POST, text};
}

export let addPostActionCreator = () => {
    return {type: ADD_POST};
}


export default profileReducer;