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

  render() {
    const { todo } = this.state;
    return (
      <div>
        <Header />
        <TodoList listElem={todo} />
      </div>
    );
  }
}

export default TodoListContainer;
