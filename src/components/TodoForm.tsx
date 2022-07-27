import React, { useContext, useState } from "react";
import { AppContext, TodoType } from "../context/AppContext";
import { Button, Grid, TextField } from "@mui/material";

const TodoForm = () => {
    const {
        todos,
        addTodo,
        deleteTodo,
        checked,
        setChecked
    } = useContext(AppContext);

    const [input, setInput] = useState("");
    const [isEmpty, setIsEmpty] = useState(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    };

    const handleSubmit = () => {
        if(input) {
            setIsEmpty(false);
            addTodo({ id: todos.length + 1, todo: input });
            // Clear the text field.
            setInput("");
        }
        else {
            setIsEmpty(true);
        }
    };

    const handleDelete = () => {
        let todosToDelete: TodoType[] = [];
        checked.forEach((checkedVal, checkedIndex) => {
            if(checkedVal === true) {
                todosToDelete.push(todos[checkedIndex]);
            }
        });

        deleteTodo(...todosToDelete);
        setChecked(Array(todos.length).fill(false));
    };

    return (
        <Grid
            container
            spacing={2}
            direction="row"
            alignItems="center"
            justifyContent="flex-end"
            style={{ paddingTop: 10 }}>
            <Grid item xs={10}>
                <TextField
                    label={isEmpty ? "Error: Invalid input" : "New Todo"}
                    placeholder="Enter new todo"
                    value={input}
                    error={isEmpty}
                    onChange={handleInputChange}
                    onKeyPress={(e) => {
                        if(e.key === "Enter") {
                            handleSubmit();
                        }
                    }}
                    fullWidth
                    disabled={checked.includes(true)}
                />
            </Grid>
            <Grid item xs={2}>
                {checked.includes(true) ?
                    <Button
                        style={{ margin: "auto 0 auto" }}
                        variant="contained"
                        color="error"
                        onClick={handleDelete}>
                        Delete
                    </Button>
                    :
                    <Button
                        style={{ margin: "auto 0 auto" }}
                        variant="contained"
                        onClick={handleSubmit}>
                        Add Todo
                    </Button>
                }
            </Grid>
        </Grid>
    );
};

export default TodoForm;
