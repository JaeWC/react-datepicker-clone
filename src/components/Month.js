import React, { Component } from 'react';

export default class Month extends Component {
  _clickPrevious = () => {
    let newYear = this.props.year;
    let newMonth = this.props.month - 1;

    this.props.onPrevious(newYear, newMonth);
  };

  _clickNext = () => {
    let newYear = this.props.year;
    let newMonth = this.props.month + 1;

    this.props.onNext(newYear, newMonth);
  };

  render() {
    const months = [
      'January',
      'Feburary',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];

    return (
      <div className="month">
        <ul>
          <li onClick={this._clickPrevious} className="prev">
            ←
          </li>
          <li onClick={this._clickNext} className="next">
            →
          </li>
          <li>
            {months[this.props.month]} {this.props.year}
          </li>
        </ul>
      </div>
    );
  }
}
