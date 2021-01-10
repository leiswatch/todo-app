import React, { FormEvent, useState } from 'react';

interface TodoFormProps {
  addTodo: (value: string) => void;
}

const TodoForm: React.FunctionComponent<TodoFormProps> = ({ addTodo }) => {
  const [value, setValue] = useState<string>('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!value) {
      return;
    }

    addTodo(value);
    setValue('');
  };

  return (
    <div className='todo--add'>
      <form onSubmit={handleSubmit} className="todo__form">
        <input
          type='text'
          className='todo__input'
          placeholder='Add new todo...'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type='submit' className='todo__add'>
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
