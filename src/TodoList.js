import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { completeTodo, setUpdatingTodoIndex, deleteTodo } from './action/index'
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom'


export default function TodoList() {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);
    const history = useHistory();
    const handleEdit = (todoId) => {
        const todoIndex = todos.records.findIndex((todo) => todo.id === todoId);
        history.push('/TodoForm')
        dispatch(setUpdatingTodoIndex(todoIndex));
    }

    const handleDelete = (todoId) => {
        dispatch(deleteTodo(todoId));
    }

    const handleComplete = (event, todoId) => {
        dispatch(completeTodo({ todoId, completed: event.target.checked }));
    }

    return (
        <div>
            <ul align='center'>
                {todos.records.map((todo) => (
                    <li key={todo.id}>
                        <span>
                            <br />{todo.title}: {todo.description}<br />
                        </span>
                        <span>
                            <Button variant="danger" onClick={() => handleDelete(todo.id)}>Delete</Button>
                            <Button onClick={() => handleEdit(todo.id)}>Edit</Button>
                            <label>
                                complete
                                <input
                                    type="checkbox"
                                    checked={todo.completed}
                                    onClick={(event) => handleComplete(event, todo.id)}
                                />
                            </label>
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}