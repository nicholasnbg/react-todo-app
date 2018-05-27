import React, { Component } from "react";
import { formatDate } from "../helpers";

import { CardPanel, Button } from "react-materialize";

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
      <CardPanel className="todo-item teal black-text lighten-4" id={itemKey}>
        <div className="header-row">
          <h5> {heading} </h5>
          <h5> Due: {dueDate ? formatDate(dueDate) : "indefinite"} </h5>
          <Button onClick={() => this.toggleShow(itemKey)}>>> </Button>
        </div>
        <div className="otherInfo">
          {initDate && <span> Date Created: {formatDate(initDate)}</span>}
          {dueTime && <span> Due Time: {dueTime} </span>}
          {location && <span> Location: {location} </span>}
          {details && <span> Details: {details} </span>}
          <span className="buttons">
            <Button
              className="edit blue"
              onClick={() => this.props.changeDetailsPanel("edit", itemKey)}
            >
              Edit
            </Button>
            <Button
              className="cancel red"
              onClick={() => this.props.deleteTodo(itemKey)}
            >
              Cancel
            </Button>
            <Button
              className="complete green lighten-2"
              onClick={() => this.props.markComplete(itemKey)}
            >
              Done
            </Button>
          </span>
        </div>
      </CardPanel>
    );
  }
}
