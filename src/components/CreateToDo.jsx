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
            alert('Cant Create empty To-Do');
        }
        else {
            if(this.state.message.length > 50) {
                alert('To-Do message too long! Keep it concise and less than 50 letters!');
            }
            else {   
                let todos = [...this.state.todos];
                todos.push({id: uuid(), message: this.state.message});
                this.setState({message:'', todos: todos});
            }
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
                <div className="create-todo-container">
                    <input type="text" placeholder="Add a To-Do.." className="input-todo"
                        value={this.state.message}
                        onChange={this.handleChange} 
                    />
                    <button type="submit" className="button-todo" onClick={this.handleSubmit}>
                        Create
                    </button>
                </div>
                <div className="todo-list-container">
                    <ToDoList 
                        todos={this.state.todos}
                        onDelete={this.handleDelete}
                        onEdit={this.handleEdit}
                    />
                </div>
            </>
        );
    }
}
 
export default CreateToDo;