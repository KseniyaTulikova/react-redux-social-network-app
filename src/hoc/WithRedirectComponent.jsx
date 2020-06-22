import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

let WithRedirectComponent = (Component) => {
    class RedirectedComponent extends React.Component {
        
        render() {
            if (!this.props.isAuth) return <Redirect to='/login' />

            return <Component {...this.props}/>
        }
    }


    
    return  connect(mapStateToProps)(RedirectedComponent);
}

export default WithRedirectComponent;
