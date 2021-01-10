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
    <div className='todo'>
      <input
        type='checkbox'
        name='completeTodo'
        id='completeTodo'
        onChange={handleOnChange}
        className='todo__checkbox'
      />
      <p style={{ textDecoration: isCompleted ? 'line-through' : '' }} className='todo__text'>
        {text}
      </p>
      <button onClick={handleDeleteTodo} className='todo__button'>
        X
      </button>
    </div>
  );
};

export default Todo;
