import React from 'react'
import Todo from './todo'
import Form from './form'

function List() {
    const [todos, setTodos] = React.useState([]);

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
        const newTodos = [todo, ...todos];

        setTodos(newTodos);
        console.log(...todos);
    };
    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    };

    const deleteTodo = id => {
        const removedArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removedArr);
    };

    const doneTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    return (
        <>
            <h1>What's the Plan for Today?</h1>
            <Form onSubmit={addTodo} />
            <Todo
                todos={todos}
                completeTodo={doneTodo}
                removeTodo={deleteTodo}
                updateTodo={updateTodo}
            />
        </>
    )
}

export default List
