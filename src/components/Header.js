import React, { Component } from "react";
import FilterBar from "./FilterBar";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1> ToDo App </h1>
        <button
          className="addTodo"
          onClick={() => this.props.changeDetailsPanel("add")}
        >
          ADD +
        </button>
        <FilterBar
          setFilterPeriod={this.props.setFilterPeriod}
          setCompleteFilter={this.props.setCompleteFilter}
        />
      </div>
    );
  }
}
