import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

const InputTodo = ({ addTodoProps }) => {
  const [title, setTitle] = useState('');

  const onChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoProps(title);
      setTitle('');
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
      <button className="input-submit" type="submit">
        Submit
      </button>
    </form>
  );
};

InputTodo.propTypes = {
  addTodoProps: PropTypes.func.isRequired,
};

export default InputTodo;
