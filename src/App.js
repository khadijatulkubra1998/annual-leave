import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import './App.css';
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
    let divide = parseInt(days / 11);
    let multi = parseInt(divide * 11);
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
    // console.log(this.state.startDate);
    // console.log(this.state.endDate);
    
    return (
      <div className="App">
          <h1 >Remaning Leave <span>"{this.state.remaining}"</span></h1>
        <label  className="btn btn-secondary">Start Date</label>
        <input type="date" className="btn btn-outline-danger" onChange={(event) => this.setState({ startDate: event.target.value })} />
        <label className="btn btn-secondary"> End Date </label>
        <input type="date"  className="btn btn-outline-danger"  onChange={(event) => this.setState({ endDate: event.target.value })} />
        <Button variant="outline-info" onClick={() => this.calculate()}>Result</Button>
        
      
      </div>
    );
  }
}

export default App;

