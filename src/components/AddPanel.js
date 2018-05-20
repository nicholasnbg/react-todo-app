import React, { Component } from "react";
import moment from "moment";

export default class AddPanel extends Component {
  state = {
    isIndefinite: false
  };

  createTodo = e => {
    e.preventDefault();
    console.log("addoing todo item");
    const newTodo = {
      heading: this.heading.value,
      initDate: moment(new Date()).format("YYYY/MM/DD"),
      /*MUST MAKE THIS DYNAMIC*/
      dueDate: this.dueDate.value,
      indefinite: this.state.isIndefinite,
      dueTime: this.dueTime.value,
      location: this.location.value,
      details: this.details.value,
      completed: false
    };
    this.props.addTodo(newTodo);
    this.addTodoForm.reset();
    !this.dueDate.disabled;
    !this.dueTime.disabled;
  };

  changeIndefinite = () => {
    console.log("changing indef");
    if (this.state.isIndefinite) {
      this.setState({
        isIndefinite: false
      });
    } else {
      this.setState({
        isIndefinite: true
      });
    }
  };
  render() {
    return (
      <div className="addPanel">
        <form
          ref={input => (this.addTodoForm = input)}
          onSubmit={e => this.createTodo(e)}
        >
          <span>
            <label> To Do: </label>
            <input
              ref={input => (this.heading = input)}
              type="text"
              name="heading"
            />
          </span>
          <span>
            <label> Due Date: </label>
            <input
              disabled={this.state.isIndefinite}
              type="date"
              defaultValue={moment(new Date())
                .add(1, "day")
                .format("YYYY-MM-DD")}
              ref={input => (this.dueDate = input)}
              name="dueDate"
            />
            <br /> or <br /> Indefinite:
            <input
              type="checkbox"
              onClick={this.changeIndefinite}
              ref={input => (this.indefinite = input)}
              name="indefinite"
            />
          </span>
          <span>
            <label> Due Time: </label>
            <input
              disabled={this.state.isIndefinite}
              type="time"
              ref={input => (this.dueTime = input)}
              name="dueTime"
            />
          </span>
          <span>
            <label> Location: </label>
            <input
              type="text"
              ref={input => (this.location = input)}
              name="location"
            />
          </span>
          <span>
            <label> Details: </label>
            <input
              type="textarea"
              ref={input => (this.details = input)}
              name="details"
            />
          </span>
          <button type="submit"> Add + </button>
        </form>
      </div>
    );
  }
}
