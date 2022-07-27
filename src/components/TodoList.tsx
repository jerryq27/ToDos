import React, { useContext, useState } from "react";
import { AppContext, Todo } from "../context/AppContext";
import {
    Box,
    Checkbox,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    TextField,
    Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoList = () => {
    const {
        todos,
        deleteTodo,
        updateTodo,
        checked,
        setChecked
    } = useContext(AppContext);

    const [editable, setEditable] = useState<Todo | null>(null);

    const handleCheck = (todo: Todo) => {
        const clickedIndex = todos.indexOf(todo);

        const newCheckedVal = [...checked];
        newCheckedVal[clickedIndex] = !newCheckedVal[clickedIndex];

        setChecked(newCheckedVal);
    };

    const isEditable = (todo: Todo): boolean => todo.text === editable?.text;

    return (todos.length === 0 ?
        <Box display="flex" justifyContent="center" padding={5}>
            <Typography variant="h5" style={{ color: "gray" }}>
                Add todos to see them on the list.
            </Typography>
        </Box>
        :
        <List>
            {todos.map((todo: Todo) =>
                <ListItem key={todo.id} disablePadding>
                    <Grid container alignItems="center">
                        <Grid item xs={1}>
                            <ListItemIcon onClick={() => handleCheck(todo)}>
                                <Checkbox
                                    checked={checked[todos.indexOf(todo)]}
                                    tabIndex={-1}
                                />
                            </ListItemIcon>
                        </Grid>
                        <Grid item xs={9}>
                            {isEditable(todo) ? (
                                <TextField
                                    variant="standard"
                                    fullWidth
                                    onKeyPress={(event) => {
                                        if(event.key === "Enter") {
                                            setEditable(null);
                                        }
                                    }}
                                    onChange={(event) => {
                                        todo.text = event.target.value;
                                        updateTodo(todo);
                                    }}
                                    value={todo.text}></TextField>
                            ) : (
                                <ListItemText onClick={() => setEditable(todo)}>
                                    {todo.text}
                                </ListItemText>
                            )}
                        </Grid>
                        <Grid item xs={2}>
                            <IconButton
                                onClick={() => editable ? setEditable(null) : setEditable(todo)}
                                disabled={checked.includes(true)}>
                                <EditIcon />
                            </IconButton>
                            <IconButton
                                onClick={() => deleteTodo(todo)}
                                disabled={checked.includes(true)}>
                                <DeleteIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </ListItem>
            )}
        </List>
    );
};

export default TodoList;
