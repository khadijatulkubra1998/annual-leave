// let d = new Date();
// let startDate = document.querySelector("input").value=d.getDate();
// let endDate = document.querySelector("input").value=d.getDate();
// let sub = startDate - endDate;
// let divide = sub/11;
// let multi = divide * 11;
// let total = sub-multi;
// let remaning = total;

import { DatePicker } from 'antd';
import moment from 'moment';

const { MonthPicker, RangePicker } = DatePicker;

const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

ReactDOM.render(
  <div>
    <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
    <br />
    <DatePicker defaultValue={moment('01/01/2015', dateFormatList[0])} format={dateFormatList} />
    <br />
    <MonthPicker defaultValue={moment('2015/01', monthFormat)} format={monthFormat} />
    <br />
    <RangePicker
      defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
      format={dateFormat}
    />
  </div>,
  mountNode,
);