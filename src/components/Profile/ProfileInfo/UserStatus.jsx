import React from 'react';

class UserStatus extends React.Component{

    state = {
        editMode: false,
        status: this.props.status
    }

    toggleEditMode = () => {
        this.setState({
            editMode: !this.state.editMode
        })
        debugger
        if (this.state.editMode) this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.target.value
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render(){

    return (<div>
        {this.state.editMode
            ? <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.toggleEditMode} type="text" value={this.state.status}/>
            : <span onDoubleClick={this.toggleEditMode}>{this.state.status || 'Напишите немного о себе'}</span>}
    </div>)
}

}

export default UserStatus;