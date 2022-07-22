import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { Button, Grid, TextField } from "@mui/material";

const TodoForm = () => {
    const { addTodo } = useContext(AppContext);

    const [input, setInput] = useState("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    }

    const handleSubmit = () => {
        if (input) {
            addTodo({ todo: input });
            // Clear the text field.
            setInput('');
        }
        else {
            alert("Must submit a value.");
        }
    }

    return (
        <Grid container
            spacing={2}
            direction="row"
            alignItems="center"
            justifyContent="flex-end"
            style={{ padding: 10 }}>
            <Grid item xs={10}>
                <TextField
                    label="New Todo"
                    placeholder="Enter new todo"
                    value={input}
                    onChange={handleInputChange}
                    fullWidth />
            </Grid>
            <Grid item xs={2}>
                <Button
                    style={{ margin: 'auto 0 auto' }}
                    variant="contained"
                    onClick={handleSubmit}>
                    Add Todo
                </Button>
            </Grid>
        </Grid>
    );
}

export default TodoForm;
