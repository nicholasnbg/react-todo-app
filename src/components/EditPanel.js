import React, { Component } from "react";
import moment from "moment";

export default class EditPanel extends Component {
  state = {
    isIndefinite: false,
    item: this.props.editItem
  };

  componentWillMount = () => {
    if (this.props.editItem.indefinite) {
      this.setState({
        isIndefinite: true
      });
    }
  };

  componentWillReceiveProps = nextProps => {
    if (this.props !== nextProps) {
      document.getElementById("editForm").reset();
      this.setState({
        isIndefinite: nextProps.editItem.indefinite,
        item: nextProps.editItem
      });
    }
  };

  changeIndefinite = () => {
    console.log("changing indef");
    const item = { ...this.state.item };
    if (this.state.isIndefinite) {
      item.indefinite = false;
      this.setState({
        isIndefinite: false,
        item: item
      });
    } else {
      item.indefinite = true;
      this.setState({
        isIndefinite: true,
        item: item
      });
    }
  };

  handleChange = e => {
    const item = this.state.item;
    item[e.target.name] = e.target.value;
    this.setState({
      item
    });
  };

  editTodoItem = (e, key) => {
    e.preventDefault();
    console.log("editing item");
    this.props.editTodo(this.state.item, key);
  };

  render() {
    let item = this.props.editItem;
    const key = this.props.editKey;

    return (
      <div className="editPanel">
        <form
          ref={input => (this.editTodoForm = input)}
          id="editForm"
          onSubmit={e => this.editTodoItem(e, key)}
        >
          <span>
            <label>To Do: </label>
            <input
              ref={input => (this.heading = input)}
              type="text"
              name="heading"
              defaultValue={item.heading}
              onChange={e => this.handleChange(e)}
            />
          </span>
          <span>
            <label>Due Date: </label>
            <input
              disabled={this.state.isIndefinite}
              type="date"
              ref={input => (this.dueDate = input)}
              name="dueDate"
              defaultValue={item.dueDate}
              onChange={e => this.handleChange(e)}
            />
            <br />or
            <br />
            Indefinite:
            <input
              type="checkbox"
              ref={input => (this.indefinite = input)}
              name="indefinite"
              defaultChecked={item.indefinite}
              onChange={() => {
                this.changeIndefinite();
              }}
            />
          </span>
          <span>
            <label>Due Time: </label>
            <input
              disabled={this.state.isIndefinite}
              type="time"
              ref={input => (this.dueTime = input)}
              name="dueTime"
              defaultValue={item.dueTime}
              onChange={e => this.handleChange(e)}
            />
          </span>
          <span>
            <label>Location: </label>
            <input
              type="text"
              ref={input => (this.location = input)}
              name="location"
              defaultValue={item.location}
              onChange={e => this.handleChange(e)}
            />
          </span>
          <span>
            <label>Details: </label>
            <input
              type="textarea"
              ref={input => (this.details = input)}
              name="details"
              defaultValue={item.details}
              onChange={e => this.handleChange(e)}
            />
          </span>
          <button type="submit">EDIT</button>
        </form>
      </div>
    );
  }
}
