import React, { FormEventHandler, SetStateAction } from "react";

const TodoForm = () => {
    return (
        <form>
            <div>
                <label htmlFor="todo-text">Todo</label>
            </div>
            <div>
                <input id="todo-text" name="todo-text" type="text" />
            </div>
            <button type="button">Add Todo</button>
        </form>
    );
}

export default TodoForm;
