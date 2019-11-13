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
        <input type="date" value={this.state.startDate} onChange={this.handleChange}>
        </input>
        <input type="date" value={this.state.endDate}>
        </input>
        <button >Result</button>
      </div>
    );
  }
}

export default App;

