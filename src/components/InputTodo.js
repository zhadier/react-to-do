import React, { useState } from 'react';

const InputTodo = ({ addTodoProps }) => {
  const [title, setTitle] = useState('');

  const onChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoProps(title);
      setTitle({ title: '' });
    } else {
      alert('Please write item');
    }
  };
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        className="input-text"
        name="title"
        type="text"
        placeholder="Add Todo..."
        value={title}
        onChange={onChange}
      />
      <button className="input-submit" type="button">
        Submit
      </button>
    </form>
  );
};

export default InputTodo;
