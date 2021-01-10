import React from 'react';
import Post from './Post/Post';
import style from './MyPosts.module.css';

class MyPosts extends React.Component {
    render() {
        const posts = this.props.profilePosts.map(post => {
            return <Post message={post.message} />;
        });
        return (
            <div>         
                {posts}
            </div>
        )
    }
}   

export default MyPosts;