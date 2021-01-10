import React from 'react';

interface TodoProps {
  index: number;
  text: string;
  isCompleted: boolean;
  toggleCompleteTodo: (index: number) => void;
  deleteTodo: (index: number) => void;
}

const Todo: React.FunctionComponent<TodoProps> = ({
  index,
  text,
  isCompleted,
  toggleCompleteTodo,
  deleteTodo,
}) => {
  const handleOnChange = () => toggleCompleteTodo(index);
  const handleDeleteTodo = () => deleteTodo(index);

  return (
    <>
      <input type='checkbox' name='completeTodo' id='completeTodo' onChange={handleOnChange} />
      <p style={{ textDecoration: isCompleted ? 'line-through' : '' }}>{text}</p>
      <button onClick={handleDeleteTodo}>X</button>
    </>
  );
};

export default Todo;
