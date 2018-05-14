import React, { Component } from 'react'
import AddPanel from './AddPanel'

export default class TodoDetail extends Component {
  state = {
    isIndefinite: false
  }
  
  

  changeIndefinite = () => {
    console.log('changing indef')
    if(this.state.isIndefinite){
      this.setState({
        isIndefinite: false
      })
    } else {
        this.setState({
          isIndefinite: true
        })}
        
      }
  
  

  render() {
    return (
      <div className="details-panel">
        {this.props.detailsStatus==="add" && (
          <AddPanel
            addTodo={this.props.addTodo}
          />
        )}


      </div>
    )
  }
}
