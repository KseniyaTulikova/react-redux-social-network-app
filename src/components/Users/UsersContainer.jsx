import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    unfollow,
    followInProgress,
    getUsersThunkCreator,
    getNewUsersThunkCreator,
    followMeThunkCreator,
    unFollowMeThunkCreator
} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize);
        // this.props.toggleIsFetching(true);
        // userAPI.getUsers(this.props.currentPage,this.props.pageSize).then(data => {
        //     this.props.toggleIsFetching(false);
        //     this.props.setUsers(data.items);
        //     this.props.setTotalUsersCount(data.totalCount);
        // });
    }

    onPageChanged = (pageNumber) => {
        this.props.getNewUsersThunkCreator(pageNumber, this.props.pageSize);
        // this.props.setCurrentPage(pageNumber);
        // this.props.toggleIsFetching(true);
        // userAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
        //     this.props.toggleIsFetching(false);
        //     this.props.setUsers(data.items);
        // });
        
    }

    render() {
        return <>
            { this.props.isFetching ? <Preloader /> : null }
            <Users totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged}
                        users={this.props.users}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                        followInProgress = {this.props.followInProgress}
                        followProgress = {this.props.followProgress}
                        unFollowMeThunkCreator = {this.props.unFollowMeThunkCreator}
                        followMeThunkCreator = {this.props.followMeThunkCreator}
                        
             />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followProgress: state.usersPage.followProgress
    }
}

export default connect(mapStateToProps,
    {follow, unfollow, followInProgress,
     getUsersThunkCreator, getNewUsersThunkCreator, followMeThunkCreator, unFollowMeThunkCreator})(UsersContainer);