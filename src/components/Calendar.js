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
    })
    return(
      <div className='calendar-container'>
        <table className='calendar'>
          <thead>
            <tr className='calendar-header'>
              <td>
                Month
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              {weekdays}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

}
export default Calendar;
