import React from 'react';
import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

class Content extends React.Component {
    render() {
        return (
        <div className={style.content}>
            <ProfileInfo postText={this.props.state.textNewPost} dispatch={this.props.dispatch}/>
            <MyPosts profilePosts={this.props.state.posts}/>
        </div>
        )
    }
}   

export default Content;