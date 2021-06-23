import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TaskForm from './template/TaskForm';
import TaskList from './template/TaskList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path='/' component={TaskList}/>
            <Route path='/Form' component={TaskForm}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
