import React from 'react';
import UserList from './UserList';
import moment from 'moment';
import PropTypes from 'prop-types';

class Calendar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dateContext: moment(),
    }
  }
  let divStyle = {
    width: '87%',
    backgroundColor: 'aqua',
    border: 'solid black .5px',
    display: 'inline-block',
    float: 'right',
    height: 'calc(60vh - 0px)',
    position: 'relative',
    overflow: 'hidden',
  }

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
  return(
    <div style={divStyle}>
      <div style={weekRow} >
        <div style={userColumn}>
          <span>Users</span>
        </div>
        <div style={dayColumn}>
          <span>Sunday</span>
        </div>
        <div style={dayColumn}>
          <span>Monday</span>
        </div>
        <div style={dayColumn}>
          <span>Tuesday</span>
        </div>
        <div style={dayColumn}>
          <span>Wednesday</span>
        </div>
        <div style={dayColumn}>
          <span>Thursday</span>
        </div>
        <div style={dayColumn}>
          <span>Friday</span>
        </div>
        <div style={dayColumn}>
          <span>Saturday</span>
        </div>
      </div>
      <UserList userList={props.userList}/>
    </div>
  );

Calendar.propTypes = {
  userList: PropTypes.object
}

}
export default Calendar;
