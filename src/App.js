import React from "react";
import "./App.css";
import HeaderContainer from "./components/header/headerContainer";
import SideBar from "./components/side-bar/side-bar";
import ProfileContainer from "./components/content/Profile/ProfileContainer";
import Login from "./components/content/Login/Login";
import Preloader from "./components/common/Preloader/preloader";
import { HashRouter, Route } from "react-router-dom";
import { Component } from "react";
import { connect } from "react-redux";
import { initializeApp, setTryVPN } from "./Redux/app-reducer";
import { compose } from "redux";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { withSuspense } from "./hoc/withSuspense";

const FindUsersContainer = React.lazy(() =>
  import("./components/content/FindUsers/FindUsersContainer")
);
const MessageContainer = React.lazy(() =>
  import("./components/content/Message/MessageContainer")
);

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
    setTimeout(() => {
      if (!this.props.initialized) {
        this.props.setTryVPN();
      }
    }, 1700);
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader tryVPN={this.props.tryVPN} />;
    }

    return (
      <div className="App">
        <div className="header">
          <HeaderContainer />
        </div>
        <div className="side">
          <SideBar />
        </div>
        <div className="content">
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/message" render={withSuspense(MessageContainer)} />
          <Route path="/FindUsers" render={withSuspense(FindUsersContainer)} />
          <Route path="/auth" render={() => <Login />} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
  tryVPN: state.app.tryVPN,
});

let AppContainer = compose(
  connect(mapStateToProps, { initializeApp, setTryVPN })
)(App);

const SamuraiJsApp = () => {
  return (
    <HashRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  );
};

export default SamuraiJsApp;
