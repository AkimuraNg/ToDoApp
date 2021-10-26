import React from 'react'
import Form from './form'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'

const Todo = ({ todos, doneTodo, deleteTodo, updateTodo }) => {
    const [edit, setEdit] = React.useState({
        id: null,
        value: ''
    });
    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    };
    if (edit.id) {
        return <Form edit={edit} onSubmit={submitUpdate} />;
    }
    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'row-complete' : 'row'} key={index}>
            <div key={todo.id} onClick={() => doneTodo(todo.id)}>{todo.text}</div>
            <div className="icons">
                <RiCloseCircleLine onClick={() => deleteTodo(todo.id)} className="delete" />
                <TiEdit onClick={() => setEdit({ id: todo.id, value: todo.text })} className="edit" />
            </div>
        </div>
    ))
}

export default Todo
