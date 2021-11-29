import React from 'react';
import { connect, useSelector } from 'react-redux';
import { setTodo, addTodo, updateTodo } from './action/index';
import { Button,Form } from 'react-bootstrap';
import {useHistory} from 'react-router-dom'
import {useEffect,useState} from 'react'
import {useDispatch} from 'react-redux';
function TodoForm (props) {
  const { todo, updatingTodoIndex } = props.todos;
  const history=useHistory();
  const dispatch=useDispatch();
  const list=useSelector((state)=>state.todos.localstorage);


  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    const updatedTodo = { ...todo, [name]: value };
    props.setTodo(updatedTodo);
  }

  

 

  const set=() => {
    localStorage.setItem('list',JSON.stringify( props.todos.records));
  }
;
  set();
  
const get=()=>{
        const data=JSON.parse(localStorage.getItem('list'));
        console.log(data)
}
 

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!todo.title) return;
    if (!updatingTodoIndex && updatingTodoIndex !== 0) {
      props.addTodo({ ...todo, id: new Date().getTime() });
    } else {
      props.updateTodo({ ...todo });
    }
  }
//   useEffect(()=>{
//       localStorage.setItem('TodoList',JSON.stringify(props.todos.records))
//   },[props.todos.records]);

  const handleClick=()=>{
        history.push('/TodoList')
  }

  return (
    <div>
      <Form onSubmit={handleSubmit} align='center'>
        <div>
          <label>
            Title:
            <input name="title" value={todo.title} onChange={handleChangeInput} />
          </label>
        </div>
        <div>
          <label>
            Description:
            <textarea name="description" value={todo.description} onChange={handleChangeInput} />
          </label>
        </div>
        <div>
          <Button type="submit">{updatingTodoIndex ? 'Update' : 'Submit'}</Button>
          <Button onClick={handleClick}>ShowAll</Button>
        </div>
      </Form>
    </div>
  );
}

const mapState = (state) => ({
  todos: state.todos,
});

const mapDispatch = {
  setTodo,
  addTodo,
  updateTodo,
};

export default connect(mapState, mapDispatch)(TodoForm);

