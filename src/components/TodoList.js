import React, { Component } from "react";
import TodoListItem from "./TodoListItem";

import moment from "moment";

class TodoList extends Component {
  render() {
    const { items, filterPeriod, filterComplete } = this.props;

    //Initialize both filters with unfiltered list of items, so that all are showing inintially when no filters applied
    let filteredPeriodItems = Object.keys(items);
    let filteredCompleteItems = Object.keys(items);

    //Check if there is a  period filter, if so then filter between start and end dates
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

    //Check both filtered lists against each other for matching items, this is the final filtered list. If more filters added later, it will also need to be checked in in here as well
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
