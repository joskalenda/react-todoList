import React from 'react';
import Header from './Header';
import TodoList from './TodoList';

class TodoListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [
        {
          id: 1,
          title: 'setup dev environement',
          completed: true,
        },
        {
          id: 2,
          title: 'No balance nothing for a programmer',
          completed: true,
        },
        {
          id: 3,
          title: 'Suceed to render one stage',
          completed: true,
        },
      ],
    };
  }

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

  render() {
    const { todo } = this.state;
    return (
      <div>
        <Header />
        <TodoList listElem={todo} handleChangeProps={this.handleChange} />
      </div>
    );
  }
}

export default TodoListContainer;
