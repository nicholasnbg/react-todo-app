import React, { Component } from 'react'

export default class TodoListItem extends Component {

  state={
    showAll: false
  }

  toggleShow = (item) => {
    const targetDiv = document.getElementById(item);
    if(!this.state.showAll){
      // targetDiv.setAttribute('style', 'height: auto');   
      targetDiv.style.maxHeight = '500px';
      this.setState({
        showAll: true
      })
    } else {
      targetDiv.style.maxHeight = '80px';
      this.setState({
        showAll: false
      })   
    }
  }

  render() {
    const {heading, initDate, dueDate, details, dueTime, location} = this.props.item;
    const {itemKey} = this.props;

    return (
      <div className='todo-item' id={itemKey}>
        <div className="header-row">
          <h3>{heading}</h3>
          <h4>Due: {dueDate}</h4>
          <button onClick={()=>this.toggleShow(itemKey)}>>></button>
        </div>
        <div className="otherInfo">
          {initDate && <span>Date Created: {initDate}</span>}
          {dueTime && <span>Due Time: {dueTime}</span>}
          {location && <span>Location: {location}</span>}
          {details && <span>Details: {details}</span>}
        </div>
      </div>
    )
  }
}
