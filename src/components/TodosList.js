import React from 'react';
import TodoItem from './TodoItem';

const TodosList = (props) => {
  const { todos, handleChangeProps, deleteTodoProps, setUpdateProps } = props;
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={handleChangeProps}
          deleteTodoProps={deleteTodoProps}
          setUpdate={setUpdateProps}
        />
      ))}
    </ul>
  );
};

TodosList.propTypes = {
  todos: React.propTypes.string.isRequired,
  handleChangeProps,
};

export default TodosList;
