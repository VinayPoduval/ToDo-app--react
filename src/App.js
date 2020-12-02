import React, { Component } from 'react';
import CreateToDo from './components/CreateToDo.jsx';

class App extends Component {
    render() { 
        return ( 
            <>
                <h1>To-Do App</h1>
                <CreateToDo />
            </>
        );
    }
}
 
export default App;