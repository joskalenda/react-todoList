import React from 'react';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Item: this.props,
    };
  }

  render() {
    const { Item } = this.state;
    return (
      <li>
        <input
          type="checkbox"
          checked={Item.todoItem.completed}
          onChange={() => Item.handleChangeProps(Item.todoItem.id)}
        />
        {' '}
        {Item.todoItem.title}
        <button type="button" onClick={() => Item.removeTodoProps(Item.todoItem.id)}>
          Remove
        </button>
      </li>
    );
  }
}

export default TodoItem;
