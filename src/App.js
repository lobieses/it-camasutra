import './App.css';
import Header from './components/header/header';
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
                <Header />
                <SideBar />
                <div className='content'>
                    <Route path='/profile' render={() => 
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
