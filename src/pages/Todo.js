import React from "react";
import BuildTodo from "../components/todoComp/BuildTodo";

const Todo = () => {
    return (
        <div style={style.todoCont}>
            <BuildTodo />
        </div>
    );
};

export default Todo;

const style = {
    todoCont: {
        border: ".1rem solid red",
    },
};
