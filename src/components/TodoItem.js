import React from 'react';
import styles from './TodoItem.module.css';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Item: this.props,
    };
  }

  render() {
    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };
    const { Item } = this.state;
    return (
      <li className={styles.item}>
        <input
          className={styles.checkox}
          type="checkbox"
          checked={Item.todoItem.completed}
          onChange={() => Item.handleChangeProps(Item.todoItem.id)}
        />
        <button type="button" onClick={() => Item.removeTodoProps(Item.todoItem.id)}>
          Remove
        </button>
        <span style={Item.todoItem.completed ? completedStyle : null}>
          {' '}
          {Item.todoItem.title}
        </span>
      </li>
    );
  }
}

export default TodoItem;
