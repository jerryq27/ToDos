import React, { useState } from 'react';
import TodoForm from './components/TodoForm';

function App() {
  let [todos, setTodos] = useState<Array<string>>([
    'Learn React',
    'Create Todo app',
    'Learn TypeScript',
  ]);

  return (
    <div>
      <ul>
        {todos.map((todo: string) => {
          return <li key={todo}>{todo}</li>
        })}
      </ul>
      <TodoForm />
    </div>
  );
}

export default App;
