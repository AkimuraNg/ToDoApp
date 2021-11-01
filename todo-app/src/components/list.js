import React from 'react'
import Todo from './todo'
import Form from './form'
import '../css/todo.css'

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
  
    const removeTodo = id => {
      const removedArr = [...todos].filter(todo => todo.id !== id);
  
      setTodos(removedArr);
    };
  
    const completeTodo = id => {
      let updatedTodos = todos.map(todo => {
        if (todo.id === id) {
          todo.isComplete = !todo.isComplete;
        }
        return todo;
      });
      setTodos(updatedTodos);
    };
  
    return (
      <div className="todo" id="todopage">
        <h1>What Are We Doing Today?</h1>
        <Form onSubmit={addTodo} />
        <Todo
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      </div>
    );
  }
  
  export default List;
