import React from "react";
const { v4: uuid4 } = require("uuid");
//console.log(uuid4);

const Local_STORAGE_KEY = "Saved-Todos";

const BuildTodo = () => {
    const [todos, setTodos] = React.useState([]);
    const [todo, setTodo] = React.useState("");
    const [todoEditing, setTodoEditing] = React.useState(null);
    const [editingText, setEditingText] = React.useState("");

    React.useEffect(() => {
        const temp = localStorage.getItem("todos");
        const loadedTodos = JSON.parse(temp);

        if (loadedTodos) {
            setTodos(loadedTodos);
        }
    }, []);

    React.useEffect(() => {
        localStorage.setItem(Local_STORAGE_KEY, JSON.stringify(todos));
    }, [todos]);

    function handleSubmit(e) {
        e.preventDefault();

        const newTodo = {
            id: uuid4(),
            text: todo,
            completed: false,
        };
        setTodos([...todos].concat(newTodo));
        setTodo("");
    }

    function deleteTodo(id) {
        let updatedTodos = [...todos].filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
    }

    function toggleComplete(id) {
        let updatedTodos = [...todos].map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        setTodos(updatedTodos);
    }

    function submitEdits(id) {
        const updatedTodos = [...todos].map((todo) => {
            if (todo.id === id) {
                todo.text = editingText;
            }
            return todo;
        });
        setTodos(updatedTodos);
        setTodoEditing(null);
    }

    return (
        <div id='todo-list'>
            <h1>Todo List</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    onChange={(e) => setTodo(e.target.value)}
                    value={todo}
                />
                <button type='submit'>Add Todo</button>
            </form>
            {todos.map((todo) => (
                <div key={todo.id} className='todo'>
                    <div className='todo-text'>
                        <input
                            type='checkbox'
                            id='completed'
                            checked={todo.completed}
                            onChange={() => toggleComplete(todo.id)}
                        />
                        {todo.id === todoEditing ? (
                            <input
                                type='text'
                                onChange={(e) => setEditingText(e.target.value)}
                            />
                        ) : (
                            <div>{todo.text}</div>
                        )}
                    </div>
                    <div className='todo-actions'>
                        {todo.id === todoEditing ? (
                            <button onClick={() => submitEdits(todo.id)}>
                                Submit Edit
                            </button>
                        ) : (
                            <button
                                className='edit-btn'
                                onClick={() => setTodoEditing(todo.id)}
                            >
                                Edit
                            </button>
                        )}

                        <button
                            className='delete-btn'
                            onClick={() => deleteTodo(todo.id)}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BuildTodo;
