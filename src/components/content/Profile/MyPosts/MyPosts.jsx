import React from 'react';
import Post from './Post/Post';
import style from './MyPosts.module.css';

class MyPosts extends React.Component {
    render() {
        return (
            <div>         
                <Post />
            </div>
        )
    }
}   

export default MyPosts;