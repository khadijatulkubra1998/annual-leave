import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
var moment = require('moment');
moment().format();
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

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
      remaining: "",
      days: ""
    }
  }
  calculate() {
    let endD = moment(this.state.endDate); //todays date
    let startD = moment(this.state.startDate); // another date
    let duration = moment.duration(endD.diff(startD));
    let days = duration.asDays();
    let divide = parseInt(days / 11);
    let multi = parseInt(divide * 11);
    let total = parseInt(days - multi);
    this.setState(
      {
        days: days,
        remaining: total,
        multi: multi,
        divide: divide,
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
      <div className="App">
        <h1>Remaining Days <span>"{this.state.remaining}"</span></h1>
        <p>Total Days: {parseInt(this.state.days)}</p>
        <p>Divide: {parseInt(this.state.days)} / 11</p>
        <p>Earnad Leaves: {this.state.divide}</p>
        <p>Days: {this.state.multi}</p>
        <label className="btn btn-info">Start Date</label>
        <DatePicker onChange={(date) => this.setState({ startDate: date })} placeholder="Select date" />
        {/* <input type="date" className="btn btn-outline-light" onChange={(event) => this.setState({ startDate: event.target.value })} /> */}
        <label className="btn btn-info"> End Date </label>
        <DatePicker onChange={(date) => this.setState({ endDate: date })} placeholder="Select date" />
        {/* <input type="date" className="btn btn-outline-light"  onChange={(event) => this.setState({ endDate: event.target.value })} /> */}
        <Button variant="outline-warning" onClick={() => this.calculate()}>Result</Button>

      </div>
    );
  }
}

export default App;

