import React, { Fragment } from 'react';
import LoginReduxForm from './Login';
import { connect } from 'react-redux';
import { logInThunkCreator } from '../../redux/auth-reducer';

class LoginForm extends React.Component {

    onSubmit = (formData) => {
        console.log(formData);//to do api request on social network(log in/log out)
        let {login,password,rememberMe} = {...formData};
        this.props.logInThunkCreator(login,password,rememberMe);
    }

    render() {
        return ( 
            <Fragment>
                <h1>Login</h1>
                <LoginReduxForm onSubmit = {this.onSubmit} />   
            </Fragment>
            
        );
    }
}


const mapDispatchToProps = (state) => ({

});
export default connect(null, {
    logInThunkCreator
})(LoginForm);