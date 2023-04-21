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
        border: ".1rem solid",
        height: "100%",
        width: "100%",
        backgroundColor: "#c4c3c3",
    },
};
