import React, { Component } from 'react';

export default class Day extends Component {
  constructor(props) {
    super(props);

    this.state = {
      picked: this.props.date
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (JSON.stringify(prevProps) !== JSON.stringify(this.props)) {
      this.setState({
        picked: this.props.date
      });
    }
  }

  _datePicker = val => {
    this.setState({
      picked: val
    });

    let findDay = (val - this.props.date) % 7;
    let day;
    findDay < 0 ? (day = findDay + 7) : (day = (this.props.day + findDay) % 7);

    const days = [
      '일요일',
      '월요일',
      '화요일',
      '수요일',
      '목요일',
      '금요일',
      '토요일'
    ];
    console.log(
      `${this.props.year}년 ${this.props.month + 1}월 ${val}일 ${days[day]}`
    );
  };

  render() {
    let point = Math.ceil(this.props.date / 7);
    let current = this.props.day;
    let dateArray = [];
    dateArray.length = 6;

    for (let i = this.props.date; i <= this.props.monthLength; i++) {
      let order = order || point;
      let day = day || current;
      let week = week || new Array(7).fill(null);
      order = Number(order);
      day = Number(day);
      week[day] = i;
      dateArray[order] = week;

      day = day + 1;
      if (day === 7) {
        order = order + 1;
        day = 0;
        week = new Array(7).fill(null);
      }
      order = String(order);
      day = String(day);
    }

    for (let j = this.props.date; j > 0; j--) {
      let order = order || point;
      let day = day || current;
      let week = week || dateArray[order];

      order = Number(order);
      day = Number(day);
      week[day] = j;
      dateArray[order] = week;

      day = day - 1;
      if (day === -1) {
        order = order - 1;
        day = 6;
        week = new Array(7).fill(null);
      }
      order = String(order);
      day = String(day);
    }

    return (
      <div className="days">
        {dateArray.map((week, idx) => {
          return (
            <ul className="week" key={idx}>
              {week.map((day, idx) => {
                return day === this.state.picked ? (
                  <li
                    onClick={this._datePicker.bind(this, day)}
                    key={idx}
                    className="active"
                  >
                    {day}
                  </li>
                ) : (
                  <li onClick={this._datePicker.bind(this, day)} key={idx}>
                    {day}
                  </li>
                );
              })}
            </ul>
          );
        })}
      </div>
    );
  }
}
