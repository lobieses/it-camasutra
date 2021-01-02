import React from 'react';

class SideBar extends React.Component {
    render() {
        return (
        <div className="side-bar">
            <div className="elems">
                <ul className="sideBarElems">
                    <li>Profile</li>
                    <li>Message</li>
                    <li>News</li>
                    <li>Music</li>
                </ul>
            </div>
            <div className="elems">
                <ul className="sideBarElems">
                    <li>Settings</li>
                </ul>
            </div>
            <div className="friends">
                
            </div>
        </div>
        )
    }
}

export default SideBar;