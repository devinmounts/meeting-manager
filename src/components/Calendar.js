import React from 'react';
import UserList from './UserList';
import moment from 'moment';
import PropTypes from 'prop-types';
import '../styles/Calendar/calendar.css';

class Calendar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dateContext: moment(),
      today: moment(),
      showMonthPopup: false,
      selectedDay: null
    }
  }

  weekdays = moment.weekdays();
  months = moment.months();

  year = () => {
    return this.state.dateContext.format('Y');
  }

  month = () => {
    return this.state.dateContext.format('MMMM');
  }

  daysInMonth = () => {
    return this.state.dateContext.daysInMonth();
  }

  currentDate = () => {
    return this.state.dateContext.get("date");
  }

  currentDay = () => {
    return this.state.dateContext.format("D");
  }

  firstDayOfMonth = () => {
    let newDateContext = this.state.dateContext;
    let firstDay = moment(newDateContext).startOf('month').format('d');
    return firstDay;
  }


  render(){

    let weekRow = {
      width: '100%'
    }

    let dayColumn = {
      display: 'inline-block',
      width: '11%',
      position: 'relative',
      height: '5%',
      border: 'solid black .5px',
      backgroundColor: 'yellow'
    }

    let userColumn = {
      display: 'inline-block',
      width: '15%',
      position: 'relative',
      height: '5%',
      border: 'solid black .5px',
      backgroundColor: 'orange'
    }

    let weekdays = this.weekdays.map((day) => {
      return(
        <td key={day}>{day}</td>
      );
    });

    let blanks = [];
    for (let i = 0; i < this.firstDayOfMonth(); i++) {
      blanks.push(<td key={i * 2} >
        {""}
        </td>
      )
    }

    let daysInMonth = [];
    for (let d = 1; d <= this.daysInMonth(); d++) {
      daysInMonth.push(
        <td key={d}>
          <span>{d}</span>
        </td>
      );
    }

    let totalSlots = [...blanks, ...daysInMonth];
    let rows = [];
    let cells = [];

    totalSlots.forEach((row, i) => {
      if ((i % 7) !== 0) {
        cells.push(row);
      } else {
        let insertRow = cells.slice();
        rows.push(insertRow);
        cells = [];
        cells.push(row)
      }
      if (i === totalSlots.length -1) {
        let insertRow = cells.slice();
        rows.push(insertRow);
      }
    });

    let trElems = rows.map((d, i) => {
      return (
        <tr key={i*3}>
          {d}
        </tr>
      );
    })
    return(
      <div className='calendar-container'>
        <table className='calendar'>
          <thead>
            <tr className='calendar-header'>
              <td>
                <this.MonthNav />
              </td>
              <td className='nav-month'>

              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              {weekdays}
            </tr>
            {trElems}
          </tbody>
        </table>
      </div>
    );
  }

}
export default Calendar;
