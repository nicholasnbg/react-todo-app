import React, { Component } from "react";
import TodoListItem from "./TodoListItem";

import moment from "moment";

class TodoList extends Component {
  render() {
    const { items, filterPeriod, filterComplete } = this.props;
    let filteredPeriodItems = Object.keys(items);
    let filteredCompleteItems = Object.keys(items);

    if (filterPeriod.start) {
      filteredPeriodItems = Object.keys(items).filter(item =>
        moment(items[item].dueDate).isBetween(
          filterPeriod.start,
          filterPeriod.end,
          null,
          "[)"
        )
      );
    }

    if (filterComplete === "complete") {
      filteredCompleteItems = Object.keys(items).filter(
        item => items[item].complete
      );
    } else if (filterComplete === "incomplete") {
      filteredCompleteItems = Object.keys(items).filter(
        item => !items[item].complete
      );
    } else if (filterComplete === "noFilter") {
      filteredCompleteItems = Object.keys(items);
    }

    const filteredItems = filteredPeriodItems.filter(item =>
      filteredCompleteItems.includes(item)
    );
    return (
      <div className="todo-list">
        {filteredItems.map(item => (
          <TodoListItem
            item={items[item]}
            key={item}
            itemKey={item}
            markComplete={this.props.markComplete}
            changeDetailsPanel={this.props.changeDetailsPanel}
            deleteTodo={this.props.deleteTodo}
          />
        ))}
      </div>
    );
  }
}

export default TodoList;
