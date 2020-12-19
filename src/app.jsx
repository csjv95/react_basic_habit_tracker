import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    habits: [
      {id: 0, name : 'Reading', count: 0 },
      {id: 1, name : 'Jogging', count: 0 },
      {id: 2, name : 'Studying', count: 0 }
    ]
  };

  handleIncrement = habit => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({habits});
  };

  handleDecrement = habit => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count -1;
    habits[index].count = count < 0 ? 0 : count;
    this.setState({habits});
  };
  
  handleDelete = habit => {
    // const habits = [...this.state.habits];
    // const del = habits.filter(item => item.id !== habit.id);
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({habits});
  };

  handleAdd = name => {
    const habits = [...this.state.habits, {id : Date.now(), name, count : 0}];
    this.setState({habits});
  }

  handleReset = () => {
    const habits = this.state.habits.map(habits => {
      habits.count = 0;
      return habits;
    })
    this.setState({habits});
  };

  render() {
    return(
      <>
        <Navbar
          totalCount = {this.state.habits.filter(item => item.count > 0).length}
        >
        </Navbar>
        <Habits 
          habits = {this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        >
        </Habits>
      </>
    );  
  }
}

export default App;