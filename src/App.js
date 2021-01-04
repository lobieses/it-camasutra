import './App.css';
import Header from './components/header/header';
import SideBar from './components/side-bar/side-bar';
import Profile from './components/content/Profile/Profile';
import Message from './components/content/Message/Message';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";



function App() {                
    return (
        <Router>
            <div className="App">
                <Header />
                <SideBar />
                <div className='content'>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/message' component={Message}/>   
                </div>     
            </div>
        </Router>
        
  );
}

export default App;
