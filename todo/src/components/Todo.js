import React, { Component } from "react";
import PropTypes from "prop-types";

export class Todo extends Component {
  //   getStyle = () => {
  //     if (this.props.todo.completed) {
  //       return {
  //         textDecoration: "line-through"
  //       };
  //     } else {
  //       return {
  //         textDecoration: "none"
  //       };
  //     }
  //   };
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "10px #ccc solid",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  markComplete = e => {};

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(null, id)}
          />
          {title}
          <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>
            X
          </button>
        </p>
      </div>
    );
  }
}

Todo.propTypes = {
  todo: PropTypes.object.isRequired
};

const btnStyle = {
  background: "red",
  color: "white",
  border: "none",
  padding: "5px 8px",
  borderRadius: "50px",
  cursor: "pointer",
  float: "right"
};

export default Todo;
