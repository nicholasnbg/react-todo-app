import React, { Component } from "react";
import { formatDate } from "../helpers";

export default class TodoListItem extends Component {
  state = {
    showAll: false
  };

  toggleShow = item => {
    const targetDiv = document.getElementById(item);
    if (!this.state.showAll) {
      // targetDiv.setAttribute('style', 'height: auto');
      targetDiv.style.maxHeight = "500px";
      this.setState({
        showAll: true
      });
    } else {
      targetDiv.style.maxHeight = "80px";
      this.setState({
        showAll: false
      });
    }
  };

  render() {
    const {
      heading,
      initDate,
      dueDate,
      details,
      dueTime,
      location
    } = this.props.item;
    const { itemKey } = this.props;

    return (
      <div className="todo-item" id={itemKey}>
        <div className="header-row">
          <h3> {heading} </h3>
          <h4> Due: {dueDate ? formatDate(dueDate) : "indefinite"} </h4>
          <button onClick={() => this.toggleShow(itemKey)}>>> </button>
        </div>
        <div className="otherInfo">
          {initDate && <span> Date Created: {formatDate(initDate)}</span>}
          {dueTime && <span> Due Time: {dueTime} </span>}
          {location && <span> Location: {location} </span>}
          {details && <span> Details: {details} </span>}
          <span className="buttons">
            <button
              className="edit"
              onClick={() => this.props.changeDetailsPanel("edit", itemKey)}
            >
              Edit
            </button>
            <button
              className="cancel"
              onClick={() => this.props.deleteTodo(itemKey)}
            >
              Cancel
            </button>
            <button
              className="complete"
              onClick={() => this.props.markComplete(itemKey)}
            >
              Done
            </button>
          </span>
        </div>
      </div>
    );
  }
}
