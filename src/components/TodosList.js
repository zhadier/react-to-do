const TodosList = () => {
  return (
    <ul>
      {this.props.todos.map((todo) => (
        <li>{todo.title}</li>
      ))}
    </ul>
  );
};

export default TodosList;
