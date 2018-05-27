import React, { Component } from "react";
import FilterBar from "./FilterBar";
import { Button } from "react-materialize";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1> ToDo App </h1>
        <Button
          className="addTodo green"
          onClick={() => this.props.changeDetailsPanel("add")}
          waves="light"
        >
          ADD +
        </Button>
        <FilterBar
          setFilterPeriod={this.props.setFilterPeriod}
          setCompleteFilter={this.props.setCompleteFilter}
        />
      </div>
    );
  }
}
