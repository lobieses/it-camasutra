import './App.css';
import Header from './components/header/header';
import SideBar from './components/side-bar/side-bar';
import Profile from './components/content/Profile/Profile';
import Message from './components/content/Message/Message';
import {
    BrowserRouter as Router,
    Route,
  } from "react-router-dom";



function App(props) {           
    return (
        <Router>
            <div className="App">
                <Header />
                <SideBar />
                <div className='content'>
                    <Route path='/profile' render={() => 
                    <Profile 
                        profilePosts={props.profilePosts}
                    />}/>

                    <Route path='/message' render={() => 
                    <Message 
                        dialogNames={props.dialogNames}
                        dialogChatMessages={props.dialogChatMessages}
                    />}/>   
                </div>     
            </div>
        </Router>
        
  );
}

export default App;
