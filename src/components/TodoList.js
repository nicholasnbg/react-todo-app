import React, { Component } from "react";
import TodoListItem from "./TodoListItem";

class TodoList extends Component {
  render() {
    const { items } = this.props;

    return (
      <div className="todo-list">
        {Object.keys(items).map(
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
