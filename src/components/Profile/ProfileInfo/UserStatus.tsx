import React, { PureComponent, ChangeEvent } from 'react';

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

type StateType = {
    editMode: boolean
    status: string
}

class UserStatus extends PureComponent<PropsType, StateType>{

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

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.target.value
        })
    }

    componentDidUpdate(prevProps: PropsType, prevState: StateType) {

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