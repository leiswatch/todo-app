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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          className='input'
          placeholder="Add new todo..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </div>
  );
};

export default TodoForm;
