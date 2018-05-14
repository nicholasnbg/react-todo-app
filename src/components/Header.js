import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>ToDo App</h1>
        <button 
        className="addTodo"
        onClick={() => this.props.changeDetailsPanel('add')}
        >
        ADD +</button>
      </div>
    )
  }
}
