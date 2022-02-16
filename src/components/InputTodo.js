import React, { Component } from 'react';

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title } = this.state;
    const { addTodoProps } = this.props;
    if (title.trim()) {
      addTodoProps(title);
      this.setState({ title: '' });
    } else {
      e.preventDefault();
    }
  };

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          className="input-text"
          type="text"
          placeholder="Add Todo..."
          value={title}
          name="title"
          onChange={this.onChange}
        />
        <button type="submit" className="input-submit">Add</button>
      </form>
    );
  }
}

export default InputTodo;
