import * as axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { logoutThunkCreator, authMeThunk } from '../../redux/auth-reducer';
import Header from './Header';


class HeaderContainer extends React.Component {
    componentDidMount() {
        // authAPI.authMe().then(data => {
        //     if(data.resultCode === 0 ) {
        //         let {email, login, id} = data.data;
        //         this.props.setUserData(email, login, id);
        //     }
                
        // });
        this.props.authMeThunk();
    }
    render() {
        return <Header  { ...this.props}/>
    }
} 

const mapStateToProps = (state) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth,
    email: state.auth.email,
});

export default connect(mapStateToProps, {authMeThunk, logoutThunkCreator})(HeaderContainer);
