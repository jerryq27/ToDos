import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Button } from "@mui/material";

const TodoForm = () => {
    const { addTodo } = useContext(AppContext);

    const handleSubmit = () => {
        // Prevent the browser from refreshing.
        // event.preventDefault();

        let newTodo = (document.getElementById("todo-text") as HTMLInputElement).value;
        if (newTodo) {
            addTodo({ todo: newTodo });
            // Clear the text field.
            (document.getElementById("todo-text") as HTMLInputElement).value = "";
        }
        else {
            alert("Must submit a value.");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="todo-text">Todo</label>
            </div>
            <div>
                <input id="todo-text" name="todo-text" type="text" />
            </div>
            <Button variant="contained" onClick={handleSubmit}>Add Todo</Button>
        </form>
    );
}

export default TodoForm;
