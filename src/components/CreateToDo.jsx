import React, { Component } from 'react';
import ToDoList from './ToDoList.jsx';
import uuid from 'react-uuid';
 
class CreateToDo extends Component {
    state = { 
        message: '',
        todos: [],
    }

    handleChange = (event) => {
        this.setState({message: event.target.value});
    }

    handleSubmit = () => {
        if(this.state.message === '') {
            console.log('empty');
        }
        else {
            let todos = [...this.state.todos];
            todos.push({id: uuid(), message: this.state.message});
            this.setState({message:'', todos: todos});
        }
    }

    handleDelete = (todoId) => {
        let todos = this.state.todos.filter(t=> t.id !== todoId );
        this.setState({todos: todos});
    }

    handleEdit = (todo, editedMesg) => {
        let todos = [...this.state.todos];
        let updatedTodos = todos.map((t) => {
            if (t.id === todo.id) {
                t.message = editedMesg;
            }
            return t;
        })
        this.setState({todos: updatedTodos});
    }

    render() { 
        return (
            <> 
                <input type="text" placeholder="To-Do.." 
                    value={this.state.message}
                    onChange={this.handleChange} 
                />
                <button type="submit" onClick={this.handleSubmit}>
                    Create To-Do
                </button>
                <ToDoList 
                    todos={this.state.todos}
                    onDelete={this.handleDelete}
                    onEdit={this.handleEdit}
                />
            </>
        );
    }
}
 
export default CreateToDo;