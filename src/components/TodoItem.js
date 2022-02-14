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
    return <li>{Item.todoItem.title}</li>;
  }
}

export default TodoItem;
