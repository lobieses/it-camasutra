import React from 'react';
import Post from './Post/Post';
import style from './MyPosts.module.css';

class MyPosts extends React.Component {
    render() {
        return (
            <div>
                <div className={style.createPost}>
                    <h2>My posts</h2>
                    <textarea placeholder="your news..."></textarea>
                    <button>Send</button>
                </div>          
                <Post />
            </div>
        )
    }
}   

export default MyPosts;