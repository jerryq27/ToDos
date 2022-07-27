import React, {
    createContext,
    PropsWithChildren,
    useState
} from "react";

export interface AppContextType {
    todos: TodoType[];
    addTodo: (todo: TodoType) => void;
    deleteTodo: (todo: TodoType) => void;
    updateTodo: (todo: TodoType) => void;

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

    const addTodo = (todo: TodoType) => {
        setTodos([...todos, todo]);
    };

    const deleteTodo = (todo: TodoType) => {
        setTodos(todos.filter(t => t.id !== todo.id));
    };

    const updateTodo = (todo: TodoType) => {
        let newTodos = [...todos];
        newTodos.forEach(t => {
            if(t.id === todo.id) {
                t = todo;
            }
        });

        setTodos(newTodos);
    };

    return (
        <AppContext.Provider value={{ todos, addTodo, deleteTodo, updateTodo, checked, setChecked }}>
            {children}
        </AppContext.Provider>
    );
};