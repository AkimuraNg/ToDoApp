import React from 'react'
import '../css/todo.css'

function TodoForm({ addTodo }) {
    const [value, setValue] = React.useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
        </form>
    );
}

function Todos({ todo, index, completeTodo, removeTodo }) {
    return (
        // <div className="todo">
        //     {todo.text}
        // </div>
        <div
            className="todo"
            style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
        >
            {todo.text}
            <div>
                <button onClick={() => completeTodo(index)} style={{ border: "1px solid gray", borderRadius: "4px", backgroundColor: "blue" }}>
                    <img src={require('../image/check-lg.svg').default} alt="complete" height={20} />
                </button>
                <button onClick={() => removeTodo(index)} style={{ border: "1px solid gray", borderRadius: "4px", backgroundColor: "red" }}>
                    <img src={require('../image/x-lg.svg').default} alt="complete" height={20} />
                </button>
            </div>
        </div>
    )
}

const Todo = () => {
    const [todos, setTodos] = React.useState([
        {
            text: "Do laundry", isCompleted: false
        },
        {
            text: "Go shopping", isCompleted: false
        },
        {
            text: "Make dinner", isCompleted: false
        }
    ])
    const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
    };
    const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
    };
    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };
    return (
        <div className="container mt-5">
            <h1>Welcome to the Todo app</h1>
            <section id="todopage" className="todo">
                <div className="todo-list">
                    {todos.map((todo, index) => (
                        <Todos
                            key={index}
                            index={index}
                            todo={todo}
                            completeTodo={completeTodo}
                            removeTodo={removeTodo} />
                    ))}
                    <TodoForm addTodo={addTodo} />
                </div>
            </section>
        </div>
    )
}

export default Todo

