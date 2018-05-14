import React, {
  Component
} from 'react';
import './App.css';
/*COMPONENT IMPORTS */
import Header from './components/Header';
import TodoDetail from './components/TodoDetail';
import TodoList from './components/TodoList';

class App extends Component {
  state = {
    items: {
      item1: {
        heading: 'Get milk',
        initDate: '18/04/2018',
        dueDate: '20/04/2018',
        dueTime: '',
        location: 'Coles',
        details: 'Make sure you have $5 to buy the milk with',
        complete: false
      },
      item2: {
        heading: 'Put bins out',
        initDate: '19/04/2018',
        dueDate: '23/04/2018',
        dueTime: '22:00',
        location: 'Home',
        details: 'It is a recycling week',
        complete: false
      }
    },
    detailsStatus: '',
    editKey: ''
  }

  changeDetailsPanel = (status, itemKey) => {
    this.setState({
      detailsStatus: status,
      editKey: itemKey
    })
  }

  addTodo = (newTodo) => {
    const items = { ...this.state.items
    };
    const timestamp = Date.now();
    if (newTodo.indefinite) {
      newTodo.dueDate = '';
      newTodo.dueTime = '';
    }
    items[`item-${timestamp}`] = newTodo;
    this.setState({
      items
    });
    this.setState({
      detailsStatus: ''
    });
  }

  markComplete = (itemKey) => {
    const items = { ...this.state.items
    };
    items[itemKey].complete = true;
    this.setState({
      items
    })
  }

  render() {
    return ( 
    <div className = "app" >
      <Header changeDetailsPanel = {this.changeDetailsPanel}/> 
      <div className = "todoComponents" >
      <TodoDetail 
        detailsStatus = {this.state.detailsStatus} 
        addTodo = {this.addTodo}
      />  
      <TodoList 
        items = {this.state.items} 
        markComplete = {this.markComplete}
        changeDetailsPanel = {this.changeDetailsPanel}
      />  
      </div> 
    </div>
    )
  }
}

export default App;