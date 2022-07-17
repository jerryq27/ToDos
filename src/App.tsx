import React from "react";
import TodoForm from "./components/TodoForm";
import { useAppContext, useAppUpdateContext } from "./context/AppContext";

function App() {

  const appState = useAppContext();
  const setAppState = useAppUpdateContext();


  return (
    <div>
      <ul>
        {appState.todos.map((todo: string) => {
          return <li key={todo}>{todo}</li>
        })}
      </ul>
      <TodoForm handleClick={()=>console.log('click!')}/>
    </div>
  );
}

export default App;
