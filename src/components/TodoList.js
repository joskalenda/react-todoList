import React from 'react';
import propTypes from 'prop-types';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { listElem, handleChangeProps, removeTodoProps } = this.props;
    return (
      <ul>
        {/* {List.listElem.map((items) => (<li key={items.id}>{items.title}</li>))} */}
        {listElem.map((items) => (
          <TodoItem
            key={items.id}
            todoItem={items}
            handleChangeProps={handleChangeProps}
            removeTodoProps={removeTodoProps}
          />
        ))}

      </ul>
    );
  }
}

TodoList.propTypes = {
  handleChangeProps: propTypes.func.isRequired,
  removeTodoProps: propTypes.func.isRequired,
  listElem: propTypes.func.isRequired,

};

export default TodoList;
