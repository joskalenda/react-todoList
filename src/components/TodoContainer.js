import React from 'react';
import Header from './Header';
import InputTodo from './InputTodo';
import TodoList from './TodoList';

class TodoListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [
        {
          id: 1,
          title: 'setup dev environement',
          completed: false,
        },
        {
          id: 2,
          title: 'No balance nothing for a programmer',
          completed: false,
        },
        {
          id: 3,
          title: 'Suceed to render one stage',
          completed: false,
        },
      ],
    };
  }

  // using prevState methode to toggle the checkbox
  // handleChange = (id) => {
  //   this.setState((prevState) => ({
  //     todo: prevState.todo.map((item) => {
  //       if (item.id === id) {
  //         return {

  //           ...item, completed: !item.completed,
  //         };
  //       }
  //       return item;
  //     }),
  //   }));
  // };

  // using this.state methode to toggle the chekced box
  handleChange = (id) => {
    const { todo } = this.state;
    this.setState({
      todo: todo.map((item) => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      }),
    });
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

  render() {
    const { todo } = this.state;
    return (
      <div>
        <Header />
        <InputTodo />
        <TodoList
          listElem={todo}
          handleChangeProps={this.handleChange}
          removeTodoProps={this.removeTodo}
        />
      </div>
    );
  }
}

export default TodoListContainer;
