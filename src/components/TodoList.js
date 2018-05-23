import React, { Component } from "react";
import TodoListItem from "./TodoListItem";

import moment from "moment";

class TodoList extends Component {
  render() {
    const { items, filterPeriod } = this.props;
    let filteredItems = Object.keys(items);

    if (filterPeriod.start) {
      filteredItems = Object.keys(items).filter(item =>
        moment(items[item].dueDate).isBetween(
          filterPeriod.start,
          filterPeriod.end,
          null,
          "[)"
        )
      );
    }

    console.log(filteredItems);
    return (
      <div className="todo-list">
        {filteredItems.map(
          item =>
            !items[item].complete && (
              <TodoListItem
                item={items[item]}
                key={item}
                itemKey={item}
                markComplete={this.props.markComplete}
                changeDetailsPanel={this.props.changeDetailsPanel}
                deleteTodo={this.props.deleteTodo}
              />
            )
        )}
      </div>
    );
  }
}

export default TodoList;
