import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import InputTodo from './InputTodo';
import TodoList from './TodoList';

class TodoListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
    };
  }

  componentDidMount() {
    const temp = localStorage.getItem('todo');
    const loadedTodos = JSON.parse(temp);
    if (loadedTodos) {
      this.setState({
        todo: loadedTodos,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { todo } = this.state;
    if (prevState.todo !== todo) {
      const temp = JSON.stringify(todo);
      localStorage.setItem('todo', temp);
    }
  }

  handleChange = (id) => {
    this.setState((prevState) => ({
      todo: prevState.todo.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  // methode to remove the todo
  removeTodo = (id) => {
    const { todo } = this.state;
    this.setState({
      todo: [
        ...todo.filter((item) => item.id !== id),
      ],
    });
  };

  addTodoItem = (title) => {
    const { todo } = this.state;
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    this.setState({
      todo: [...todo, newTodo],
    });
  };

  render() {
    const { todo } = this.state;
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodoProps={this.addTodoItem} />
          <TodoList
            listElem={todo}
            handleChangeProps={this.handleChange}
            removeTodoProps={this.removeTodo}
          />

        </div>
      </div>
    );
  }
}

export default TodoListContainer;
