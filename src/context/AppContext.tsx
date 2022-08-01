import React, {
    createContext,
    PropsWithChildren,
    useState
} from "react";

export interface AppContextType {
    todos: Todo[];
    addTodo: (...todo: Todo[]) => void;
    deleteTodo: (...todo: Todo[]) => void;
    updateTodo: (...todo: Todo[]) => void;
}
export interface Todo {
    id: number;
    text: string;
    done: boolean;
}

export const AppContext = createContext<AppContextType>({} as AppContextType);

export const AppContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [todos, setTodos] = useState<Todo[]>([
        { id: 1, text: "Learn React", done: false },
        { id: 2, text: "Create Todo app", done: false },
        { id: 3, text: "Learn TypeScript", done: false },
    ]);

    const addTodo = (...newTodos: Todo[]) => {
        setTodos([...todos, ...newTodos]);
    };

    const deleteTodo = (...todosToDelete: Todo[]) => {
        let newTodos = [...todos];
        todosToDelete.forEach(todo => {
            newTodos = newTodos.filter(t => t.id !== todo.id);
        });

        setTodos(newTodos);
    };

    const updateTodo = (...todosToUpdate: Todo[]) => {
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
        <AppContext.Provider value={{ todos, addTodo, deleteTodo, updateTodo }}>
            {children}
        </AppContext.Provider>
    );
};