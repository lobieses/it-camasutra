import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

const mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
});

export const withAuthRedirect = (Component) => {
     class RedirectComponent extends React.Component {
         render() {
             if(!this.props.isAuth) return <Redirect to={'/auth'} />
             return <Component {...this.props}/>
         }
     }

     const connectedAuthRedicrectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

     return connectedAuthRedicrectComponent;
}