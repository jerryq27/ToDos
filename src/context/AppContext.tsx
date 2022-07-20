import React, {
    createContext,
    PropsWithChildren,
    useState
} from "react";

export interface AppContextType {
    todos: TodoType[];
    addTodo: (todo: TodoType) => void;
}
export interface TodoType {
    todo: string;
}

export const AppContext = createContext<AppContextType>({} as AppContextType);

export const AppContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [todos, setTodos] = useState<TodoType[]>([
        { todo: "Learn React" },
        { todo: "Create Todo app" },
        { todo: "Learn TypeScript" },
    ]);

    const addTodo = (todo: TodoType) => {
        setTodos([...todos, todo]);
    }

    return (
        <AppContext.Provider value={{ todos, addTodo }}>
            {children}
        </AppContext.Provider>
    );
}