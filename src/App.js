import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import { DatePicker } from 'antd';
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
   }
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
class DateRange extends React.Component {
  state = {
    startValue: null,
    endValue: null,
    endOpen: false,
  };

  disabledStartDate = startValue => {
    const { endValue } = this.state;
    if (!startValue || !endValue) {
      return false;
    }
    return startValue.valueOf() > endValue.valueOf();
  };

  disabledEndDate = endValue => {
    const { startValue } = this.state;
    if (!endValue || !startValue) {
      return false;
    }
    return endValue.valueOf() <= startValue.valueOf();
  };

  onChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  };

  onStartChange = value => {
    this.onChange('startValue', value);
  };

  onEndChange = value => {
    this.onChange('endValue', value);
  };

  handleStartOpenChange = open => {
    if (!open) {
      this.setState({ endOpen: true });
    }
  };

  handleEndOpenChange = open => {
    this.setState({ endOpen: open });
  };

  render() {
    const { startValue, endValue, endOpen } = this.state;
    return (
      <div>
        <DatePicker
        className="btn btn-outline-light"
          disabledDate={this.disabledStartDate}
          showTime
          format="YYYY-MM-DD HH:mm:ss"
          value={startValue}
          placeholder="Start"
          onChange={this.onStartChange}
          onOpenChange={this.handleStartOpenChange}
          onChange={(event) => this.setState({ startDate: event.target.value })} 
        />
        <DatePicker
        className="btn btn-outline-light"
          disabledDate={this.disabledEndDate}
          showTime
          format="YYYY-MM-DD HH:mm:ss"
          value={endValue}
          placeholder="End"
          onChange={this.onEndChange}
          open={endOpen}
          onOpenChange={this.handleEndOpenChange}
          onChange={(event) => this.setState({ endDate: event.target.value })}
        />
      </div>
    );
  }
}

ReactDOM.render(<DateRange />, mountNode);

// export class App extends Component {
  
//   constructor(props) {
//     super(props)
//     this.state = {
//       startDate: "",
//       endDate: "",
//       startD: "",
//       endD: "",
//       sub: "",
//       divide: "",
//       multi: "",
//       total: "",
//       remaining: ""
//     }
//     // this.handleChangeStart = this.handleChangeStart.bind(this)
//     // this.handleChangeEnd = this.handleChangeEnd.bind(this)
//   }
//   // handleChangeStart(event) {
//   //   this.setState({ startDate: event.target.startDate });

//   // }
//   // handleChangeEnd(event) {
//   //   this.setState({ endDate: event.target.endDate });
//   calculate() {
//     let endD = moment(this.state.endDate); //todays date
//     let startD = moment(this.state.startDate); // another date
//     let duration = moment.duration(endD.diff(startD));
//     let days = duration.asDays();
//     let divide = parseInt(days / 11);
//     let multi = parseInt(divide * 11);
//     let total = days - multi
//     this.setState(
//       {
//         remaining: total
//       }, () => {
//         console.log(days);
//         console.log(divide);
//         console.log(multi);
//         console.log(total);
//         console.log(this.state.remaining)
//       }
//     )
//   }
//   render() {
//     // console.log(this.state.startDate);
//     // console.log(this.state.endDate);
    
//     return (
//       <div className="App">
//           <h1 >Remaining Leave <span>"{this.state.remaining}"</span></h1>
//         {/* <label  className="btn btn-info">Start Date</label>
//         <input type="date" className="btn btn-outline-light" onChange={(event) => this.setState({ startDate: event.target.value })} />
//         <label  className="btn btn-info"> End Date </label>
//         <input type="date"   className="btn btn-outline-light"  onChange={(event) => this.setState({ endDate: event.target.value })} /> */}
//         <Button  variant="outline-warning" onClick={() => this.calculate()}>Result</Button>
       
//       </div>
//     );
//   }
// }

// export default App;

