import React, { Component } from 'react';

class ToDoList extends Component {
    state = {
        showEditForm: false,
        showDeleteForm: false,
        editedToDo: '',
        toOperate: null
    }

    handleChange = (event) => {
        this.setState({editedToDo: event.target.value});
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        this.setState({showEditForm:false, editedToDo:'', toOperate:null, showDeleteForm:false});
    }

    editForm = (t) => {
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder={t.message} onChange={this.handleChange}/>
                <button onClick={()=>this.props.onEdit(t, this.state.editedToDo)}>Confirm</button>
            </form>
            </div>
        );
    }

    deleteForm = (t) => {
        return(
            <form onSubmit={this.handleSubmit}>
                <p>Are you Sure?</p>
                <button onClick={()=>this.props.onDelete(t.id)}>Delete</button>
            </form>
        );
    }

    render() { 
        return ( 
            <>
                {this.props.todos.map(t =>
                <p key={t.id}>
                    {t.message}
                    <button onClick={()=>this.setState({showDeleteForm: true, toOperate:t})}>Delete</button>
                    <button onClick={()=>this.setState({showEditForm: true, toOperate:t})}>Edit</button>
                </p>
                )}
                {this.state.showEditForm ? this.editForm(this.state.toOperate):null}
                {this.state.showDeleteForm ? this.deleteForm(this.state.toOperate):null}
            </>
        );
    }
}
 
export default ToDoList;