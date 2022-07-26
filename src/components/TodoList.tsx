import React, { useContext, useState } from "react";
import { AppContext, TodoType } from "../context/AppContext";
import {
    Checkbox,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoList = () => {
    const { todos, deleteTodo, updateTodo } = useContext(AppContext);

    const [checked, setChecked] = useState<boolean[]>(Array(3).fill(false));
    const [editable, setEditable] = useState<TodoType | null>(null);

    const handleCheck = (todo: TodoType) => {
        const clickedIndex = todos.indexOf(todo);

        const newCheckedVal = [...checked];
        newCheckedVal[clickedIndex] = !newCheckedVal[clickedIndex];

        setChecked(newCheckedVal);
    };

    const isEditable = (t: TodoType): boolean => t.todo === editable?.todo;

    return (
        <List>
            {todos.map((t: TodoType) => {
                return (
                    <ListItem key={t.id} disablePadding>
                        <Grid container alignItems="center">
                            <Grid item xs={1}>
                                <ListItemIcon onClick={() => handleCheck(t)}>
                                    <Checkbox
                                        checked={checked[todos.indexOf(t)]}
                                        tabIndex={-1}
                                    />
                                </ListItemIcon>
                            </Grid>
                            <Grid item xs={9}>
                                {isEditable(t) ? (
                                    <TextField
                                        variant="standard"
                                        onKeyPress={(e) => {
                                            if (e.key === "Enter") {
                                                setEditable(null);
                                            }
                                        }}
                                        onChange={(e) => {
                                            t.todo = e.target.value;
                                            updateTodo(t);
                                        }}
                                        value={t.todo}></TextField>
                                ) : (
                                    <ListItemText>{t.todo}</ListItemText>
                                )}
                            </Grid>
                            <Grid item xs={2}>
                                <IconButton onClick={() => setEditable(t)}>
                                    <EditIcon />
                                </IconButton>
                                <IconButton onClick={() => deleteTodo(t)}>
                                    <DeleteIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </ListItem>
                );
            })}
        </List>
    );
};

export default TodoList;
