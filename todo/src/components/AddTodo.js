import React, { Component } from "react";

export default class AddTodo extends Component {
  state = {
    title: ""
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };
  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }} action="">
        <input
          style={{ flex: "10", padding: "5px" }}
          type="text"
          name="title"
          placeholder="add todo"
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          className="btn"
          style={{ flex: "1" }}
          type="submit"
          value="submit"
        />
      </form>
    );
  }
}
