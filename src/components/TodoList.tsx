import React, { useContext, useState } from "react";
import { AppContext, TodoType } from "../context/AppContext";
import {
    Checkbox,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const TodoList = () => {
    const { todos } = useContext(AppContext);

    const [checked, setChecked] = useState<boolean[]>(Array(3).fill(false));

    const handleCheck = (todo: TodoType) => {
        const clickedIndex = todos.indexOf(todo);

        const newCheckedVal = [...checked];
        newCheckedVal[clickedIndex] = !newCheckedVal[clickedIndex];

        setChecked(newCheckedVal);
    }

    return (
        <List>
            {todos.map((t: TodoType) => {
                return (
                    <ListItem
                        key={t.todo}
                        disablePadding
                        secondaryAction={
                            <IconButton edge="end">
                                <EditIcon />
                            </IconButton>
                        }>
                        <ListItemIcon onClick={() => handleCheck(t)}>
                            <Checkbox
                                edge="start"
                                checked={checked[(todos.indexOf(t))]}
                                tabIndex={-1} />
                        </ListItemIcon>

                        <ListItemText>{t.todo}</ListItemText>
                    </ListItem>
                )
            })}
        </List>
    )
}

export default TodoList;