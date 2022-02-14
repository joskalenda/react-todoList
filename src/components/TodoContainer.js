import React from 'react';

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
          title: 'lov is nothing for a programmer',
          completed: true,
        },
        {
          id: 3,
          title: 'Let think positif',
          completed: true,
        },
      ],
    };
  }

  render() {
    const { todo } = this.state;
    return (
      <ul>
        {todo.map((items) => (
          <li key={items.id}>{items.title}</li>
        ))}
      </ul>
    );
  }
}

export default TodoListContainer;
