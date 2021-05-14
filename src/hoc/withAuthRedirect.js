import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

const mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
});

export const withAuthRedirect = (Component) => {
     class RedirectComponent extends React.Component {
         render() {
             //the second condition need so that redirect from profile was be only at owner
             if(!this.props.isAuth && this.props.match.params.userId === undefined) return <Redirect to={'/auth'} />
             return <Component {...this.props}/>
         }
     }

     const connectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

     return connectedAuthRedirectComponent;
}