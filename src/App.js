import React, { Component } from 'react';

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: "",
      endDate: "",
      startD:"",
      endD:"",
      sub:"",
      divide:"",
      multi:"",
      total:"",
      remaining:""
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
        startD : this.state.startDate,
        endD : this.state.endDate,
        sub : this.state.startD - this.state.endD,
        divide : this.state.sub / 11,
        multi : this.state.divide * 11,
        total : this.state.sub - this.state.multi,
        remaning : this.state.total
      }
      // console.log(remaining);
    )
  }

  render() {
    console.log(this.state.startDate);
    console.log(this.state.endDate);
    return (
      <div>
       
        <input type="date" onChange={(event) => this.setState({ startDate: new Date(event.target.value).getDate()})} />
        <input type="date" onChange={(event) => this.setState({ endDate: new Date(event.target.value).getDate() })} />

        <button onClick={this.calculate()}>Result </button>
        <h1>Remaning Leave <span>{this.state.remaining}</span></h1>
      </div>
    );
  }
}

export default App;

