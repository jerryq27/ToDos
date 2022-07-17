import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { AppContextProvider } from "./context/AppContext";

function App() {
    return (
        <AppContextProvider>
            <TodoList />
            <TodoForm />
        </AppContextProvider>
    );
}

export default App;
