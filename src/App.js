import React from "react";
import TodoForm from './TodoForm'
import TodoList from "./TodoList";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'
//import TodoList from "./TodoList";
function App() {
  return (
    <> 
    <Router>
          <Route exact path='/TodoForm'>
            <TodoForm/>
          </Route>
          <Route path='/TodoList'>
            <TodoList />
          </Route>
    </Router>
    </>
  );
}

export default App;
