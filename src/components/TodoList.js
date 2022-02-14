import React from 'react';

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
        {List.listElem.map((items) => (<li key={items.id}>{items.title}</li>))}
      </ul>
    );
  }
}

export default TodoList;
