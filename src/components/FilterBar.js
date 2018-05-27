import React, { Component } from "react";
import moment from "moment";

export default class FilterBar extends Component {
  state = {};

  componentWillMount() {
    const today = moment(new Date()).format("YYYY-MM-DD");
    this.setState({
      filterDate: today
    });
  }

  setFilters = () => {
    this.props.setFilterPeriod(document.querySelector("#filterDate").value);
    this.props.setCompleteFilter(
      document.querySelector("#filterComplete").value
    );
  };

  render() {
    return (
      <div className="filterBar">
        <span>
          <select name="filterComplete" id="filterComplete">
            <option value="noFilter">Show All...</option>
            <option value="complete">Show Completed</option>
            <option value="incomplete">Show Incomplete</option>
          </select>
        </span>

        <span>
          <select name="filterDate" id="filterDate">
            <option value="noFilter">See All...</option>
            <option value="today">Today</option>
            <option value="tomorrow">Tomorrow</option>
            <option value="week">Next 7 Days</option>
            <option value="month">In Next Month</option>
          </select>
        </span>

        <button
          onClick={() => {
            this.setFilters();
          }}
        >
          Apply
        </button>
      </div>
    );
  }
}
