import profileReducer, {addPost} from './profile-reducer';

let initialState = {
    posts: [
        {message: '1'},
        {message: '2'},
        {message: '3'},
    ]
};

it('after action posts.length should be up' , () => {
    let action = addPost('4');

    let newState = profileReducer(initialState, action);

    expect(newState.posts[3].message).toBe('4');
});