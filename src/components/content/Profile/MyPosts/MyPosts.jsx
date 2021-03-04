import React from 'react';
import Post from './Post/Post';
import style from './MyPosts.module.css';
import {Field, reduxForm} from "redux-form";
import {Textarea} from '../../../common/FormControls/FormControls';
import {required, maxLength} from "../../../../utils/validator/validator";

const maxLengthForValidator = maxLength(10);

const MyPostsForm = (props) => {
    return (
        <div>
            <h2>My posts</h2>
            <form onSubmit={props.handleSubmit}>
                <Field placeholder="your news..."
                       name='postText'
                       component={Textarea}
                       validate={[required, maxLengthForValidator]}
                />
                <button>Send</button>
            </form>
        </div>
    )
}

const MyPostsReduxForm = reduxForm({form: 'myPosts'})(MyPostsForm)

const MyPosts = (props) => {
    const onSubmit = (formData) => {
        props.onAddPost(formData.postText)
    }

    const posts = props.posts.map((post,index) => {
        return <Post key={index} message={post.message}/>;
    });
    
    return (
        <div>  
            <div className={style.createPost}>
                <MyPostsReduxForm onSubmit={onSubmit}/>
            </div>   
            <div className={style.posts}>
                {posts}
            </div>     
            
        </div>
    )
}   

export default MyPosts;