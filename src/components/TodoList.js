import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      List: this.props,
    };
  }

  render() {
    const { List } = this.state;
    return (
      <ul>
        {/* {List.listElem.map((items) => (<li key={items.id}>{items.title}</li>))} */}
        {List.listElem.map((items) => (<TodoItem key={items.id} todoItem={items} />))}

      </ul>
    );
  }
}

export default TodoList;
