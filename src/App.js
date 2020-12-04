import React, { Component } from 'react';
import CreateToDo from './components/CreateToDo.jsx';
import './App.css';

class App extends Component {
    render() { 
        return ( 
            <>
                <header>
                    <h1>To-Do App</h1>
                </header>
                <div className="container">
                    <CreateToDo />
                </div>
            </>
        );
    }
}
 
export default App;