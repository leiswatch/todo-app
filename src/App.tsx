import React, { useState } from 'react';
import Todo from './components/Todo';
import { nanoid } from 'nanoid';
import TodoForm from './components/TodoForm';
interface TodoState {
  id: string;
  text: string;
  isCompleted: boolean;
}

function App() {
  const [todos, setTodos] = useState<TodoState[]>([]);

  const addTodo = (value: string): void => {
    const newTodos: TodoState[] = [...todos, { id: nanoid(), text: value, isCompleted: false }];

    setTodos(newTodos);
  };

  const toggleCompleteTodo = (index: number): void => {
    const newTodos: TodoState[] = [...todos];

    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const deleteTodo = (index: number): void => {
    const newTodos = [...todos];

    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className='App'>
      {todos.map(({ id, text, isCompleted }, index) => (
        <Todo
          key={id}
          index={index}
          text={text}
          isCompleted={isCompleted}
          toggleCompleteTodo={toggleCompleteTodo}
          deleteTodo={deleteTodo}
        />
      ))}
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
