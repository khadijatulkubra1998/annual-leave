// // let d = new Date();
// // let startDate = document.querySelector("input").value=d.getDate();
// // let endDate = document.querySelector("input").value=d.getDate();
// // let sub = startDate - endDate;
// // let divide = sub/11;
// // let multi = divide * 11;
// // let total = sub-multi;
// // let remaning = total;

// // var endDate = moment("2019-11-19"); //todays date
// // var startDate = moment("2019-11-1"); // another date
// // var duration = moment.duration(endDate.diff(startDate));
// // var days = duration.asDays();
// // console.log(days)
// import { DatePicker } from 'antd';

// class DateRange extends React.Component {
//   state = {
//     startValue: null,
//     endValue: null,
//     endOpen: false,
//   };

//   disabledStartDate = startValue => {
//     const { endValue } = this.state;
//     if (!startValue || !endValue) {
//       return false;
//     }
//     return startValue.valueOf() > endValue.valueOf();
//   };

//   disabledEndDate = endValue => {
//     const { startValue } = this.state;
//     if (!endValue || !startValue) {
//       return false;
//     }
//     return endValue.valueOf() <= startValue.valueOf();
//   };

//   onChange = (field, value) => {
//     this.setState({
//       [field]: value,
//     });
//   };

//   onStartChange = value => {
//     this.onChange('startValue', value);
//   };

//   onEndChange = value => {
//     this.onChange('endValue', value);
//   };

//   handleStartOpenChange = open => {
//     if (!open) {
//       this.setState({ endOpen: true });
//     }
//   };

//   handleEndOpenChange = open => {
//     this.setState({ endOpen: open });
//   };

//   render() {
//     const { startValue, endValue, endOpen } = this.state;
//     return (
//       <div>
//         <DatePicker
//         className="btn btn-outline-light"
//           disabledDate={this.disabledStartDate}
//           showTime
//           format="YYYY-MM-DD HH:mm:ss"
//           value={startValue}
//           placeholder="Start"
//           onChange={this.onStartChange}
//           onOpenChange={this.handleStartOpenChange}
//           onChange={(event) => this.setState({ startDate: event.target.value })} 
//         />
//         <DatePicker
//         className="btn btn-outline-light"
//           disabledDate={this.disabledEndDate}
//           showTime
//           format="YYYY-MM-DD HH:mm:ss"
//           value={endValue}
//           placeholder="End"
//           onChange={this.onEndChange}
//           open={endOpen}
//           onOpenChange={this.handleEndOpenChange}
//           onChange={(event) => this.setState({ endDate: event.target.value })}
//         />
//       </div>
//     );
//   }
// }

// ReactDOM.render(<DateRange />, mountNode);
// import { DatePicker } from 'antd';

// const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

// function onChange(date, dateString) {
//   console.log(date, dateString);
// }

// ReactDOM.render(
//   <div>
//     <DatePicker onChange={onChange} />
//     <br />
//     <MonthPicker onChange={onChange} placeholder="Select month" />
//     <br />
//     <RangePicker onChange={onChange} />
//     <br />
//     <WeekPicker onChange={onChange} placeholder="Select week" />
//   </div>,
//   mountNode,
// );