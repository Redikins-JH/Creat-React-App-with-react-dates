import React, { Component } from 'react'
import 'react-dates/initialize';
import { DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import momentPropTypes from 'react-moment-proptypes';

const START_DATE = momentPropTypes.momentObj;
const END_DATE = momentPropTypes.momentObj
let autoFocus = true;
let autoFocusEndDate = false;

export default class index extends Component {
  constructor(props) {
    super(props);
    
    let focusedInput = null;
    if (autoFocus) {
      focusedInput = START_DATE;
    } else if (autoFocusEndDate) {
      focusedInput = END_DATE;
    }

    this.state = {
      focusedInput,
      startDate: momentPropTypes.momentObj,
      endDate: momentPropTypes.momentObj,
    };
    
    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  onDatesChange({ startDate, endDate }) {
    this.setState({ startDate, endDate });
  }

  onFocusChange(focusedInput) {
    this.setState({ focusedInput });
  }


  

  render() {
    const { focusedInput, startDate, endDate } = this.state;

    return (
      <div>
          <DayPickerRangeController
            //focusedInput={focusedInput}
            startDate={startDate}
            endDate={endDate}
            onDatesChange={this.onDatesChange}
            onFocusChange={this.onFocusChange}
            //focused={focused}
            //date={date}
          />
      </div>
    )
  }
}