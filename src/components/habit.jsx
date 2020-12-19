import React, { Component } from 'react';

class Habit extends Component {
  /*  
  state = {
    count: 0
  };*/
  handleIncrement = ()=> {
    /*this.setState({count : this.state.count + 1});*/
    this.props.onIncrement(this.props.habit);
    console.log(`clicked the increbtn`);
  };
  handleDecrement = ()=> {
    /*const count = this.state.count - 1;*/
    /*this.setState({count : count < 0 ? 0 :  count});*/
    console.log(`clicked the decrebtn`);
    this.props.onDecrement(this.props.habit);
  };
  handleDelete = ()=> {
    console.log(`clicked the deletebtn`);
    this.props.onDelete(this.props.habit);
  };
  render() {
    /*console.log(this.props.habit); props에 외부로 가져온 데이터 가 있다
    const habitName = this.props.habit.name;
    const habitCount = this.props.habit.count;*/
    const {name, count} = this.props.habit; /* habitName 과 habitCount를 구조분해 할당 */

    return (
      <li className="habit">
        <span className ="habit-name">{name}</span>
        <span className ="habit-count">{count}</span>
        <button className ="habit-button habit-increase" onClick ={this.handleIncrement}>
          <i className="fas fa-plus"></i>
        </button>
        <button className ="habit-button habit-decrease" onClick ={this.handleDecrement}>
          <i className="fas fa-minus"></i>
        </button>
        <button className ="habit-button habit-delete" onClick = {this.handleDelete}>
          <i className="fas fa-trash"></i>
        </button>
      </li> 
    );
  }
}

export default Habit;
