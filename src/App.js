import './App.css';
import Header from './components/header/header';
import SideBar from './components/side-bar/side-bar';
import ProfileContainer from './components/content/Profile/ProfileContainer';
import MessageContainer from './components/content/Message/MessageContainer';
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
                        <ProfileContainer 
                            store={props.store}
                            dispatch={props.dispatch}/>}/>
                    <Route path='/message' render={() => 
                        <MessageContainer 
                            store={props.store}
                            dispatch={props.dispatch}/>}/>   
                </div>     
            </div>
        </Router>
        
  );
}

export default App;
