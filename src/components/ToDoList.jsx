import React, { Component } from 'react';

class ToDoList extends Component {
    render() { 
        return ( 
            <>
                {this.props.todos.map((t) => 
                <p key={t.id}>
                    {t.message}
                    <button onClick={()=>this.props.onDelete(t.id)}>Delete</button>
                    <button onClick={()=>this.props.onEdit(t)}>Edit</button>
                </p>)}
            </>
        );
    }
}
 
export default ToDoList;