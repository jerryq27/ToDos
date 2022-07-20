import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { AppContextProvider } from "./context/AppContext";
import { AppBar, Toolbar, Typography } from "@mui/material";
import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <AppContextProvider>
            <AppBar position="sticky">
                <Toolbar style={{ paddingLeft: 0 }}>
                    <img className="App-logo" src={logo} alt="React Logo"/>
                <Typography variant="h4">React Todo</Typography>
                </Toolbar>
            </AppBar>
            <TodoList />
            <TodoForm />
        </AppContextProvider>
    );
}

export default App;
