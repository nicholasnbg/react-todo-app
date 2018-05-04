import React, { Component } from 'react';
import './App.css';
/*COMPONENT IMPORTS */
import Header from './components/Header';
import TodoDetail from './components/TodoDetail';
import TodoList from './components/TodoList';

class App extends Component {
  state={
    items:{
      item1:{
        heading: 'Get milk',
        initDate: '18/04/2018',
        dueDate: '20/04/2018',
        dueTime: '',
        location: 'Coles',
        details: 'Make sure you have $5 to buy the milk with',
        complete: false
      },
      item2:{
        heading: 'Put bins out',
        initDate: '19/04/2018',
        dueDate: '23/04/2018',
        dueTime: '22:00',
        location: 'Home',
        details: 'It is a recycling week',
        complete: false
      }
    },
    detailsSatus: ''
  }

  changeDetailsPanel = (status) => {
    this.setState({
      detailsSatus: status
    })
  }

  addTodo = (newTodo) => {
    const items = {...this.state.items};
    const timestamp = Date.now();
    items[`item-${timestamp}`] = newTodo;
    this.setState({items});
  }

  render() {
    return(
      <div className="app">
        <Header 
        changeDetailsPanel = {this.changeDetailsPanel}
        />
        <div className="todoComponents">
          <TodoDetail
          detailsStatus = {this.state.detailsSatus}
          addTodo = {this.addTodo}
           /> 
          <TodoList
            items={this.state.items}
          /> 
        </div>
      </div>
    )
  }
}

export default App;
