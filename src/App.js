import React, { Component } from 'react';

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newDate: new Date(),
      startDate: new Date().getDate(),
      endDate: new Date().getDate(),
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({ value: event.target.startDate });
    this.setState({ value: event.target.endDate });
  }
 
  render() {
    return (
      <div>
        <input type="date" name="start" >
        </input>
        <input type="date" name="end">
        </input>
        <button >Result</button>
      </div>
    );
  }
}

export default App;

