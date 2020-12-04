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
            <div className="form-container">
            <form className="form" onSubmit={this.handleSubmit}>
                <input className="edit-input" type="text" placeholder={t.message} onChange={this.handleChange}/>
                <div className="form-btn-container">
                    <button className="delete-btn" onClick={()=>this.props.onEdit(t, this.state.editedToDo)}>Confirm</button>
                    <button className="cancel-btn" onClick={()=>this.setState({toOperate: null, showEditForm:false})}>Cancel</button>
                </div>
            </form>
            </div>
        );
    }

    deleteForm = (t) => {
        return(
            <div className="form-container">
                <form className="form" onSubmit={this.handleSubmit}>
                    <p>Are you Sure?</p>
                    <div className="form-btn-container">
                        <button className="delete-btn" onClick={()=>this.props.onDelete(t.id)}>Done</button>
                        <button className="cancel-btn" onClick={()=>this.setState({toOperate: null, showDeleteForm:false})}>Cancel</button>
                    </div>
                </form>
            </div>
        );
    }

    render() { 
        return ( 
            <>
                {this.props.todos.map(t =>
                <div className="to-do" key={t.id}>
                    <p>
                        {t.message}
                    </p>
                    <div className="to-do-buttons">
                        <button className="delete-btn" onClick={()=>this.setState({showDeleteForm: true, toOperate:t})}>Done</button>
                        <button className="edit-btn" onClick={()=>this.setState({showEditForm: true, toOperate:t})}>Edit</button>
                    </div>
                </div>
                )}
                {this.state.showEditForm ? this.editForm(this.state.toOperate):null}
                {this.state.showDeleteForm ? this.deleteForm(this.state.toOperate):null}
            </>
        );
    }
}
 
export default ToDoList;