import React from 'react';
import styles from './TodoItem.module.css';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };
    const {handleChangeProps, removeTodoProps, todoItem} = this.props;
    const {completed, id, title} = todoItem;
    return (
      <li className={styles.item}>
        <input
          className={styles.checkox}
          type="checkbox"
          checked={completed}
          onChange={() => handleChangeProps(id)}
        />
        <button type="button" onClick={() => removeTodoProps(id)}>
          Remove
        </button>
        <span style={completed ? completedStyle : null}>
          {' '}
          {title}
        </span>
      </li>
    );
  }
}

export default TodoItem;
