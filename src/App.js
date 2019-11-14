import React, { Component } from 'react';

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newDate: "",
      startDate: "",
      endDate: "",
    }
    this.handleChangeStart = this.handleChangeStart.bind(this)
    this.handleChangeEnd = this.handleChangeEnd.bind(this)
  }
  handleChangeStart(event) {
    this.setState({ startDate: event.target.startDate });

  }
  handleChangeEnd(event) {
    this.setState({ endDate: event.target.endDate });
  }
  render() {
    console.log (this.state.startDate);
    console.log (this.state.endDate);
    return (
      <div>
        {/* <input type="date" name="start" onChange={this.handleChangeStart}>
        </input>
        <input type="date" name="end" onChange={this.handleChangeEnd}>
        </input> */}
        <input type="date" onChange={(event) => this.setState({startDate: event.target.value})}/>

        <button >Result</button>
      </div>
    );
  }
}

export default App;

