import React, { Component } from "react";
import "./App.css";
/*COMPONENT IMPORTS */
import Header from "./components/Header";
import TodoDetail from "./components/TodoDetail";
import TodoList from "./components/TodoList";

class App extends Component {
  state = {
    items: {
      item1: {
        heading: "Get milk",
        initDate: "2018-05-20",
        dueDate: "",
        indefinite: true,
        dueTime: "",
        location: "Coles",
        details: "Make sure you have $5 to buy the milk with",
        complete: false
      },
      item2: {
        heading: "Put bins out",
        initDate: "2018-05-19",
        dueDate: "2018-05-25",
        indefinite: false,
        dueTime: "22:00",
        location: "Home",
        details: "It is a recycling week",
        complete: false
      }
    },
    detailsStatus: "",
    editKey: "",
    editItem: {}
  };

  //************CHANGES DETAILS PANE BETWEEN ADDING / EDITING ******** */
  changeDetailsPanel = (status, itemKey) => {
    this.setState({
      detailsStatus: status,
      editKey: itemKey,
      editItem: this.state.items[itemKey]
    });
  };

  // *********************ADD TODO**********************************//

  addTodo = newTodo => {
    const items = {
      ...this.state.items
    };
    const timestamp = Date.now();
    if (newTodo.indefinite) {
      newTodo.dueDate = "";
      newTodo.dueTime = "";
    }
    items[`item-${timestamp}`] = newTodo;
    this.setState({
      items
    });
    //RESET DETAILS PANEL
    this.setState({
      detailsStatus: ""
    });
  };

  // *********** EDIT TODO *************//
  editTodo = (editedTodo, editKey) => {
    const items = {
      ...this.state.items
    };
    if (editedTodo.indefinite) {
      editedTodo.dueDate = "";
      editedTodo.dueTime = "";
    }
    items[editKey] = editedTodo;
    this.setState({
      items
    });
    this.setState({
      detailsStatus: ""
    });
  };

  //MARK TODO ITEM AS COMPLETE
  markComplete = itemKey => {
    const items = {
      ...this.state.items
    };
    items[itemKey].complete = true;
    this.setState({
      items
    });
  };

  /*******************DELETE TODO************* */
  deleteTodo = itemKey => {
    if (window.confirm("Are you sure you wish to delete this?")) {
      const items = {
        ...this.state.items
      };
      const { [itemKey]: value, ...remainingItems } = items;
      this.setState({
        items: remainingItems
      });
    }
  };

  render() {
    return (
      <div className="app">
        <Header changeDetailsPanel={this.changeDetailsPanel} />
        <div className="todoComponents">
          <TodoDetail
            detailsStatus={this.state.detailsStatus}
            addTodo={this.addTodo}
            editKey={this.state.editKey}
            editItem={this.state.editItem}
            editTodo={this.editTodo}
          />
          <TodoList
            items={this.state.items}
            markComplete={this.markComplete}
            changeDetailsPanel={this.changeDetailsPanel}
            deleteTodo={this.deleteTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
