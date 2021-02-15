import React from 'react';
import Post from './Post/Post';
import style from './MyPosts.module.css';

const MyPosts = (props) => {
    const changePostText = (event) => {
        props.onChangePostText(event.target.value);
    }

    const addPost = () => {
        props.onAddPost();
    }

    const posts = props.posts.map((post,index) => {
        return <Post key={index} message={post.message}/>;
    });
    
    return (
        <div>  
            <div className={style.createPost}>
                <h2>My posts</h2>
                <textarea placeholder="your news..." value={props.postText} onChange={changePostText}></textarea>
                <button onClick={addPost}>Send</button>
            </div>   
            <div className={style.posts}>
                {posts}
            </div>     
            
        </div>
    )
}   

export default MyPosts;