import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodosList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';

const getInitialTodos = () => {
  // getting stored items
  const temp = localStorage.getItem('todos');
  const savedTodos = JSON.parse(temp);
  return savedTodos || [];
};

const TodoContainer = () => {
  const [todos, setTodos] = useState(getInitialTodos());

  useEffect(() => {
    // storing todos items
    const temp = JSON.stringify(todos);
    localStorage.setItem('todos', temp);
  }, [todos]);

  const handleChange = (id) => {
    setTodos((prevState) => (
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    ));
  };

  const delTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const addTodoItem = (title1) => {
    const newTodo = {
      id: uuidv4(),
      title: title1,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos((todos) => (
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            title: updatedTitle,
          };
        }
        return todo;
      })
    ));
  };

  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo addTodoProps={addTodoItem} />
        <TodosList
          setUpdate={setUpdate}
          todos={todos}
          deleteTodoProps={delTodo}
          handleChangeProps={handleChange}
        />
      </div>
    </div>
  );
};

export default TodoContainer;
