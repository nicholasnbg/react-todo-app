import React, { Component } from 'react'

export default class TodoDetail extends Component {
  
  createTodo = (e) =>{
    e.preventDefault();
    console.log('addoing todo item');
    const newTodo = {
      heading: this.heading.value,
      initDate: '03/05/2018', /*MUST MAKE THIS DYNAMIC*/
      dueDate: this.dueDate.value,
      indefinite: this.indefinite.value,
      dueTime: this.dueTime.value,
      location: this.location.value,
      completed: false
    }
    this.props.addTodo(newTodo);
    this.addTodoForm.reset();
  }

  render() {
    return (
      <div className="details-panel">

      {/* Add panel, maybe componentize this later */}
        {this.props.detailsStatus==="add" && (
          <div className="addPanel">
            <form ref={(input) => this.addTodoForm = input} onSubmit={(e) => this.createTodo(e)}>
              <span><label>To Do: </label><input ref={(input) => this.heading = input} type="text" name="heading"/></span>
              <span><label>Due Date: </label><input type="text" ref={(input) => this.dueDate = input} name="dueDate"/> <br/>or <br/> Indefinite: <input type="checkbox" ref={(input) => this.indefinite = input} name="indefinite"/></span>
              <span><label>Due Time: </label><input type="text" ref={(input) => this.dueTime = input} name="dueTime"/></span>
              <span><label>Location: </label><input type="text" ref={(input) => this.location = input} name="location" /></span>   
              <button type="submit">Add +</button>           
            </form>
          </div>
        )}


      </div>
    )
  }
}
