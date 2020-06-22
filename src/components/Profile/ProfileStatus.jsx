import React, { Fragment } from 'react';

class ProfileStatus extends React.Component {
    state = {
        status: this.props.status,
        editMode: false
    }
    
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }

    hideEditMode = (e) => {
        this.setState({
            editMode: false
        });
        this.props.updateStatusThunkCreator(e.currentTarget.value);
    }

    showEditMode = () => {
        this.setState({
            editMode: true
        });
    }

    updateInputStatus = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    drawStatus = () => {

        if (!this.state.editMode) {
            return (<div>
                <span onDoubleClick={this.showEditMode}>{this.props.status}</span>
            </div>);
        } else {
            return (<div>
                <input onChange = {this.updateInputStatus} autoFocus={true} onBlur={this.hideEditMode} type="text" value={this.state.status} />
            </div>);
            }
        };
    

    render() {
        return this.drawStatus(); 
    }
        
} 

export default ProfileStatus;