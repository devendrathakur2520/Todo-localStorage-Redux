import React from "react";
import TodoForm from './TodoForm'
import TodoList from "./TodoList";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'
function App() {
  return (
    <>
      <Router>

        <Link to="/TodoForm"></Link>


        <Route path='/TodoForm'>
          <TodoForm />
        </Route>
        <Route path='/TodoList'>
          <TodoList />
        </Route>
      </Router>
    </>
  );
}

export default App;
