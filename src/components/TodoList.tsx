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
    const [checked, setChecked] = useState([0]);

    const { todos } = useContext(AppContext);

    return (
        <List>
            {todos.map((t: TodoType) => {
                return (
                    <ListItem
                        key={t.todo}
                        secondaryAction={
                            <IconButton edge="end">
                                <EditIcon />
                            </IconButton>
                        }>
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                checked={false}
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