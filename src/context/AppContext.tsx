import React, { createContext, useContext, useState } from "react";

let initialState = {
    todos: [
        "Learn React",
        "Create Todo app",
        "Learn TypeScript",
    ]
};
const updateState = (update: typeof initialState) => {
    initialState = {...initialState, ...update};
}


const AppContext = createContext(initialState);
const AppUpdateContext = createContext(updateState);

// Custom hooks for a cleaner implementation.

export const useAppContext = () => useContext(AppContext);
export const useAppUpdateContext = () => useContext(AppUpdateContext);

interface AppContextProps {
    children: React.ReactNode;
}

export const AppContextProvider = ({ children }: AppContextProps) => {
    // const [appState, setAppState] = useState<typeof initialState>(initialState);
    return (
        <AppContext.Provider value={initialState}>
            <AppUpdateContext.Provider value={updateState}>
                { children }
            </AppUpdateContext.Provider>
        </AppContext.Provider>
    );
}