import React from 'react';
import Post from './Post/Post';
import style from './MyPosts.module.css';

const MyPosts = (props) => {
    const posts = props.profilePosts.map(post => {
        return <Post message={post.message} />;
    });
    
    return (
        <div>         
            {posts}
        </div>
    )
}   

export default MyPosts;