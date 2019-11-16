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
        sub = startD - endD,
        divide = sub / 11,
        multi = divide * 11,
        total = sub - multi,
        remaning = total
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

        <button >Result</button>
        <h1>Remaning Leave <span>0</span></h1>
      </div>
    );
  }
}

export default App;

