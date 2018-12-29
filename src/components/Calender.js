import React, { Component } from 'react';
import Month from './Month';
import Day from './Day';
import '../css/style.css';

export default class Calender extends Component {
  constructor(props) {
    super(props);

    let monthLength;
    if ([0, 2, 4, 6, 7, 9, 11].includes(new Date().getMonth())) {
      monthLength = 31;
    } else if ([3, 5, 8, 10].includes(new Date().getMonth())) {
      monthLength = 30;
    } else {
      monthLength = 28;
    }

    this.state = {
      currentYear: new Date().getFullYear(),
      month: new Date().getMonth(),
      date: new Date().getDate(),
      day: new Date().getDay(),
      monthLength: monthLength
    };
  }

  _onPrevious = (newYear, newMonth) => {
    if (newMonth === -1) {
      newYear = newYear - 1;
      newMonth = 11;
    }

    let monthLength;
    if ([0, 2, 4, 6, 7, 9, 11].includes(newMonth)) {
      monthLength = 31;
    } else if ([3, 5, 8, 10].includes(newMonth)) {
      monthLength = 30;
    } else {
      monthLength = 28;
    }

    let newDay = this.state.day - ((this.state.date + (monthLength - 1)) % 7);
    if (newDay < 0) {
      newDay = 7 + newDay;
    }

    this.setState({
      currentYear: newYear,
      month: newMonth,
      date: 1,
      day: newDay,
      monthLength: monthLength
    });
  };

  _onNext = (newYear, newMonth) => {
    if (newMonth === 12) {
      newYear = newYear + 1;
      newMonth = 0;
    }

    let monthLength;
    if ([0, 2, 4, 6, 7, 9, 11].includes(newMonth)) {
      monthLength = 31;
    } else if ([3, 5, 8, 10].includes(newMonth)) {
      monthLength = 30;
    } else {
      monthLength = 28;
    }

    this.setState({
      currentYear: newYear,
      month: newMonth,
      date: 1,
      day:
        (this.state.day + (this.state.monthLength - this.state.date + 1)) % 7,
      monthLength: monthLength
    });
  };

  render() {
    return (
      <div>
        <Month
          year={this.state.currentYear}
          month={this.state.month}
          onPrevious={this._onPrevious}
          onNext={this._onNext}
        />
        <ul className="week">
          <li>Su</li>
          <li>Mo</li>
          <li>Tu</li>
          <li>We</li>
          <li>Th</li>
          <li>Fr</li>
          <li>Sa</li>
        </ul>
        <Day
          month={this.state.month}
          date={this.state.date}
          day={this.state.day}
          monthLength={this.state.monthLength}
        />
      </div>
    );
  }
}
