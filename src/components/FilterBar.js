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

  render() {
    return (
      <div className="filterBar">
        <span>
          <select name="filterDate" id="filterDate">
            <option value="today">Today</option>
            <option value="tomorrow">Tomorrow</option>
            <option value="week">Next 7 Days</option>
            <option value="month">In Next Month</option>
            <option value="noFilter">See All...</option>
          </select>
        </span>

        {/* <span>
          Custom Date:{" "}
          <input
            type="date"
            defaultValue={moment(new Date()).format("YYYY-MM-DD")}
          />
        </span> */}

        <button
          onClick={() =>
            this.props.setFilterPeriod(
              document.querySelector("#filterDate").value
            )
          }
        >
          Apply
        </button>
      </div>
    );
  }
}
