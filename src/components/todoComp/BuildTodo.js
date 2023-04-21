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
        <div style={style.todoCont}>
            <h1 style={style.title}>Todo List</h1>
            <form onSubmit={handleSubmit}>
                <input
                    style={style.input}
                    type='text'
                    onChange={(e) => setTodo(e.target.value)}
                    value={todo}
                    required
                />
                <button style={style.submitBtn} type='submit'>
                    Add Todo
                </button>
            </form>
            {todos.map((todo) => (
                <div key={todo.id} style={style.todoItemCont}>
                    <div style={style.todoText}>
                        <input
                            type='checkbox'
                            //id='completed'
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
                                style={style.editBtn}
                                onClick={() => setTodoEditing(todo.id)}
                            >
                                Edit
                            </button>
                        )}

                        <button
                            style={style.deleteBtn}
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

const style = {
    todoCont: {
        border: " 0 0 0 0",
        //height: "100%",
        //width: "40rem",
        //margin: "0 auto",
        backgroundColor: "#c4c3c3",
    },

    title: {
        textAlign: "center",
        fontSize: "52px",
    },

    input: {
        display: "flex",
        border: ".1rem solid black",
        borderRadius: ".5rem",
        flexDirection: "row",
        //textAlign: "center",
        margin: "0 auto",
        marginBottom: "2rem",
        height: "2rem",
        width: "20rem",
    },

    submitBtn: {
        display: "flex",
        border: ".1rem solid black",
        borderRadius: ".5rem",
        //flexDirection: "row",
        margin: "0 auto",
        fontWeight: "bold",
        padding: ".5rem",
        backgroundColor: "lightGreen",
        color: "darkGreen",
    },

    todoItemCont: {
        display: "inline-block",
        border: ".1rem solid black",
        borderRadius: ".5rem",
        height: "10rem",
        width: "20rem",
        textAlign: "center",
        fontWeight: "bold",
        backgroundColor: "#0005",
        margin: "1.5rem",
        //padding: "1rem",
    },

    // todoText: {
    //     //display: "flex",
    //     border: ".1rem solid black",
    //     borderRadius: ".5rem",
    //     height: "12rem",
    //     width: "22rem",
    //     textAlign: "center",
    //     fontWeight: "bold",
    //     backgroundColor: "#0005",
    // },

    editBtn: {
        border: ".1rem solid black",
        borderRadius: ".2rem",
    },

    deleteBtn: {
        border: ".1rem solid black",
        borderRadius: ".2rem",
        backgroundColor: "red",
        marginLeft: "1rem",
    },
};
