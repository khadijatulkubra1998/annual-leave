import React, { Component } from 'react';

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newDate: "",
      startDate: "",
      endDate: "",
    }
    // this.handleChangeStart = this.handleChangeStart.bind(this)
    // this.handleChangeEnd = this.handleChangeEnd.bind(this)
  }
  // handleChangeStart(event) {
  //   this.setState({ startDate: event.target.startDate });

  // }
  // handleChangeEnd(event) {
  //   this.setState({ endDate: event.target.endDate });
  calculate() {
    this.setState(

      {
        startD = this.state.startDate,
        endD = this.state.endDate,
        sub = this.state.startD - this.state.endD,
        divide = this.state.sub / 11,
        multi = this.state.divide * 11,
        total = this.state.sub - multi,
        remaning = this.state.total
      }
    )
    return remaning;
  }

  render() {
    console.log(this.state.startDate);
    console.log(this.state.endDate);
    return (
      <div>
        {/* <input type="date" name="start" onChange={this.handleChangeStart}>
        </input>
        <input type="date" name="end" onChange={this.handleChangeEnd}>
        </input> */}
        <input type="date" onChange={(event) => this.setState({ startDate: event.target.value })} />
        <input type="date" onChange={(event) => this.setState({ endDate: event.target.value })} />

        <button onClick{calculate()}>Result</button>
        <h1>Remaning Leave <span>{this.state.remaining}</span></h1>
      </div>
    );
  }
}

export default App;

