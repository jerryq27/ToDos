import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { Button, Grid, TextField } from "@mui/material";

const TodoForm = () => {
    const {
        todos,
        addTodo,
    } = useContext(AppContext);

    const [input, setInput] = useState("");
    const [isEmpty, setIsEmpty] = useState(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    };

    const handleSubmit = () => {
        if(input) {
            setIsEmpty(false);
            addTodo({
                id: todos.length + 1,
                text: input,
                done: false
            });
            // Clear the text field.
            setInput("");
        }
        else {
            setIsEmpty(true);
        }
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
                    fullWidth
                    placeholder="Enter new todo"
                    label={isEmpty ? "Error: Invalid input" : "New Todo"}
                    value={input}
                    error={isEmpty}
                    onChange={handleInputChange}
                    onKeyPress={(event) => {
                        if(event.key === "Enter") {
                            handleSubmit();
                        }
                    }}
                />
            </Grid>
            <Grid item xs={2}>
                <Button
                    style={{ margin: "auto 0 auto" }}
                    variant="contained"
                    onClick={handleSubmit}>
                    Add Todo
                </Button>
            </Grid>
        </Grid>
    );
};

export default TodoForm;
