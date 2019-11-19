import React, { Component } from 'react';
var moment = require('moment');
moment().format();
export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: "",
      endDate: "",
      startD: "",
      endD: "",
      sub: "",
      divide: "",
      multi: "",
      total: "",
      remaining: ""
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
    let endD = moment(this.state.endDate); //todays date
    let startD = moment(this.state.startDate); // another date
    let duration = moment.duration(endD.diff(startD));
    let days = duration.asDays();
    let divide = days / 11;
    let multi = divide * 11;
    let total = days - multi
    this.setState(
      {
        remaining: total
      }, () => {
        console.log(days);
        console.log(divide);
        console.log(multi);
        console.log(total);
        console.log(this.state.remaining)
      }
    )
  }

  render() {
    console.log(this.state.startDate);
    console.log(this.state.endDate);
    return (
      <div>

        <input type="date" onChange={(event) => this.setState({ startDate: event.target.value })} />
        <input type="date" onChange={(event) => this.setState({ endDate: event.target.value })} />

        <button onClick={() => this.calculate()}>Result </button>
        <h1>Remaning Leave <span>{this.state.remaining}</span></h1>
      </div>
    );
  }
}

export default App;

