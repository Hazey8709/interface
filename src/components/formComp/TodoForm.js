import React from "react";

const TodoForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <input type='text' onChange={props.setTodo} value={props.todo} />
            <button type='submit'>Add Todo</button>
        </form>
    );
};

export default TodoForm;

// const style = {
//     todoFormCont: {
//         border: ".1rem solid red",
//     },
// };

{
    /* <form onSubmit={handleSubmit}>
<input
    type='text'
    onChange={(e) => setTodo(e.target.value)}
    value={todo}
/>
<button type='submit'>Add Todo</button>
</form> */
}
