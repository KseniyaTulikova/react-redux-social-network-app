import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileThunkCreator, updateStatusThunkCreator, getStatusThunkCreator} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import WithRedirectComponent from '../../hoc/WithRedirectComponent';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {

            userId = this.props.authorizedUserId;
        }
        this.props.getProfileThunkCreator(userId);
        this.props.getStatusThunkCreator(userId);
    }


    render() {

        return (
            <Profile {...this.props} profile={this.props.profile} status = {this.props.status} updateStatusThunkCreator = {this.props.updateStatusThunkCreator}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id
});


export default compose(
    connect(mapStateToProps, {getProfileThunkCreator, updateStatusThunkCreator, getStatusThunkCreator}),
    withRouter,
    WithRedirectComponent
    )(ProfileContainer);
