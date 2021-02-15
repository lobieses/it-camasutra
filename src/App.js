import './App.css';
import HeaderContainer from './components/header/headerContainer';
import SideBar from './components/side-bar/side-bar';
import ProfileContainer from './components/content/Profile/ProfileContainer';
import MessageContainer from './components/content/Message/MessageContainer';
import FindUsersContainer from './components/content/FindUsers/FindUsersContainer';
import {
    BrowserRouter as Router,
    Route,
  } from "react-router-dom";



const App = () => {     
    return (
        <Router>
            <div className="App">
                <HeaderContainer />
                <SideBar />
                <div className='content'>
                    <Route path='/profile/:userId?' render={() => 
                        <ProfileContainer/>}/>
                    <Route path='/message' render={() => 
                        <MessageContainer/>}/>  
                    <Route path='/FindUsers' render={() => 
                        <FindUsersContainer/>}/>    
                </div>     
            </div>
        </Router> 
  );
}

export default App;
