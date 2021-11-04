import React from 'react'
//create form to add to do items
function Form(props) {
    const [input, setInput] = React.useState(props.edit ? props.edit.value : '');

    const inputRef = React.useRef(null);

    React.useEffect(() => {
        inputRef.current.focus();
    });
    // changing items
    const handleChange = e => {
        setInput(e.target.value);
    };
    //submit changed items
    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
    };

    return (
        <form onSubmit={handleSubmit} className='todo-form'>
            {props.edit ? (
                <>
                    <input
                        placeholder='Update your task'
                        value={input}
                        onChange={handleChange}
                        name='text'
                        ref={inputRef}
                        className='todo-input edit'
                    />
                    <button onClick={handleSubmit} className='todo-button edit'>
                        Update Task
                    </button>
                </>
            ) : (
                <>
                    <input
                        placeholder='New Task'
                        value={input}
                        onChange={handleChange}
                        name='text'
                        className='todo-input'
                        ref={inputRef}
                    />
                    <button onClick={handleSubmit} className='todo-button'>
                        Add Task
                    </button>
                </>
            )}
        </form>
    );
}

export default Form;