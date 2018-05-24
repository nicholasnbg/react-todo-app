import React, { Component } from "react";
import "./App.css";
import moment from "moment";
/*COMPONENT IMPORTS */
import Header from "./components/Header";
import TodoDetail from "./components/TodoDetail";
import TodoList from "./components/TodoList";

//Helper Functions
import { formatDate } from "./helpers";

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
        complete: true
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
    editItem: {},
    filterPeriod: {},
    filterComplete: ""
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

  // **********************SET FILTER DATE ************
  setFilterPeriod = newFilterPeriod => {
    console.log("setting filter period to " + newFilterPeriod);
    let start, end;
    const today = new Date();
    if (newFilterPeriod === "today") {
      start = formatDate(today);
      end = formatDate(moment(today).add(1, "day"));
    } else if (newFilterPeriod === "tomorrow") {
      start = formatDate(moment(today).add(1, "day"));
      end = formatDate(moment(today).add(2, "day"));
    } else if (newFilterPeriod === "week") {
      start = formatDate(today);
      end = formatDate(moment(today).add(1, "week"));
    } else if (newFilterPeriod === "month") {
      start = formatDate(today);
      end = formatDate(moment(today).add(1, "month"));
    } else if (newFilterPeriod === "noFilter") {
      this.setState({
        filterPeriod: ""
      });
    }
    this.setState({
      filterPeriod: {
        start: start,
        end: end
      }
    });
  };

  // *****************SET COMPLETED FILTER ***************
  setCompleteFilter = newFilter => {
    console.log("setting new completed filter to " + newFilter);
    this.setState({
      filterComplete: newFilter
    });
  };

  // ***************RENDER FUNTCION*******************************
  render() {
    return (
      <div className="app">
        <Header
          changeDetailsPanel={this.changeDetailsPanel}
          setFilterPeriod={this.setFilterPeriod}
          setCompleteFilter={this.setCompleteFilter}
        />
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
            filterPeriod={this.state.filterPeriod}
            filterComplete={this.state.filterComplete}
          />
        </div>
      </div>
    );
  }
}

export default App;
