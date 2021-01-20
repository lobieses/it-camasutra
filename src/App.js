import './App.css';
import Header from './components/header/header';
import SideBar from './components/side-bar/side-bar';
import ProfileContainer from './components/content/Profile/ProfileContainer';
import MessageContainer from './components/content/Message/MessageContainer';
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
                </div>     
            </div>
        </Router> 
  );
}

export default App;
