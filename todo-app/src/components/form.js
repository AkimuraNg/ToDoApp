import React from 'react'

function Form(props) {
    const [input, setInput] = React.useState(props.edit ? props.edit.value : '');

    const inputRef = React.useRef(null);

    React.useEffect(() => {
        inputRef.current.focus();
    })
    const handleChange = e => {
        setInput(e.target.value);
    };
    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            {props.edit ? (
                <>
                    <input
                        placeholder="Update todo"
                        value={input}
                        onChange={handleChange}
                        name='text'
                        ref={inputRef}
                        className="input-edit"
                    />
                    <button onClick={handleSubmit} className="edit-button">Update</button>
                </>
            ) : (
                <>
                    <input
                        placeholder="Add todo"
                        value={input}
                        onChange={handleChange}
                        name='text'
                        ref={inputRef}
                        className="input"
                    />
                    <button onClick={handleSubmit} className="edit-button">Add Todo</button>
                </>
            )}
        </form>
    )
}

export default Form
