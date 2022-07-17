import React, { useContext } from "react";
import {
    AppContext,
    TodoType,
} from "../context/AppContext";


const TodoList = () => {
    const { todos } = useContext(AppContext);

    return (
        <ul>
            {todos.map((t: TodoType) => {
                return <li key={t.todo}>{t.todo}</li>
            })}
        </ul>
    )
}

export default TodoList;