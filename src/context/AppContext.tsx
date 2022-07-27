import React, {
    createContext,
    PropsWithChildren,
    useState
} from "react";

export interface AppContextType {
    todos: TodoType[];
    addTodo: (...todo: TodoType[]) => void;
    deleteTodo: (...todo: TodoType[]) => void;
    updateTodo: (...todo: TodoType[]) => void;

    checked: boolean[];
    setChecked: (checkedVals: boolean[]) => void;
}
export interface TodoType {
    id: number;
    todo: string;
}

export const AppContext = createContext<AppContextType>({} as AppContextType);

export const AppContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [todos, setTodos] = useState<TodoType[]>([
        { id: 1, todo: "Learn React" },
        { id: 2, todo: "Create Todo app" },
        { id: 3, todo: "Learn TypeScript" },
    ]);
    const [checked, setChecked] = useState<boolean[]>(Array(3).fill(false));

    const addTodo = (...newTodos: TodoType[]) => {
        setTodos([...todos, ...newTodos]);
    };

    const deleteTodo = (...todosToDelete: TodoType[]) => {
        let newTodos = [...todos];
        todosToDelete.forEach(todo => {
            newTodos = newTodos.filter(t => t.id !== todo.id);
        });

        setTodos(newTodos);
    };

    const updateTodo = (...todosToUpdate: TodoType[]) => {
        let newTodos = [...todos];

        todosToUpdate.forEach(utodo => {
            newTodos.forEach(todo => {
                if(utodo.id === todo.id) {
                    todo = utodo;
                }
            });
        });

        setTodos(newTodos);
    };

    return (
        <AppContext.Provider value={{ todos, addTodo, deleteTodo, updateTodo, checked, setChecked }}>
            {children}
        </AppContext.Provider>
    );
};