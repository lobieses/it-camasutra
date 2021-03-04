import './App.css';
import HeaderContainer from './components/header/headerContainer';
import SideBar from './components/side-bar/side-bar';
import ProfileContainer from './components/content/Profile/ProfileContainer';
import MessageContainer from './components/content/Message/MessageContainer';
import FindUsersContainer from './components/content/FindUsers/FindUsersContainer';
import Login from './components/content/Login/Login';
import {
    BrowserRouter as Router,
    Route,
  } from "react-router-dom";
import {Component} from "react";
import {connect} from "react-redux";
import {initializeApp} from './Redux/app-reducer';
import Preloader from './components/common/Preloader/preloader';


class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }



    render() {
        if(!this.props.initialized) {
           return <Preloader />
        }

        return (
            <Router>
                <div className="App">
                    <HeaderContainer/>
                    <SideBar/>
                    <div className='content'>
                        <Route path='/profile/:userId?' render={() =>
                            <ProfileContainer/>}/>
                        <Route path='/message' render={() =>
                            <MessageContainer/>}/>
                        <Route path='/FindUsers' render={() =>
                            <FindUsersContainer/>}/>
                        <Route path='/auth' render={() =>
                            <Login/>}/>
                    </div>
                </div>
            </Router>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

export default connect(mapStateToProps, {initializeApp})(App);
