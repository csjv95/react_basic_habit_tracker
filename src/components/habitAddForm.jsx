import React, { Component } from 'react';
import './habitAddForm.css';

class HabitAddForm extends Component {
  inputRef = React.createRef();
  formRef = React.createRef();
  
  onSubmit = event => {
    event.preventDefault(); //submit을 하면 페이지가 다시 로딩되어서 그걸 예방해준다
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    // this.inputRef.current.value =""; 초기화 방법 1
    this.formRef.current.reset();
  };

  render() {
    return (
      <form className="add-from" onSubmit={this.onSubmit} ref={this.formRef}>
        <input type="text" className="add-input" placeholder="Habit" ref={this.inputRef}/>
        <button className="add-btn">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;