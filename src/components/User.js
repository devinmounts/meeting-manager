import React from 'react';
import PropTypes from 'prop-types';

function User(props){
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
    <div>
      <div style={weekRow} >
        <div style={userColumn}>
          <span>{props.name}</span>
        </div>
        <div style={dayColumn}>
          <span>{props.schedule.sunday[0].event}: {props.schedule.sunday[0].time} </span>
        </div>
        <div style={dayColumn}>
          <span>{props.schedule.monday[0].event}: {props.schedule.monday[0].time} </span>
        </div>
        <div style={dayColumn}>
          <span>{props.schedule.tuesday[0].event}: {props.schedule.tuesday[0].time} </span>
        </div>
        <div style={dayColumn}>
          <span>{props.schedule.wednesday[0].event}: {props.schedule.wednesday[0].time} </span>
        </div>
        <div style={dayColumn}>
          <span>{props.schedule.thursday[0].event}: {props.schedule.thursday[0].time} </span>
        </div>
        <div style={dayColumn}>
          <span>{props.schedule.friday[0].event}: {props.schedule.friday[0].time} </span>
        </div>
        <div style={dayColumn}>
          <span>{props.schedule.saturday[0].event}: {props.schedule.saturday[0].time} </span>
        </div>
      </div>
    </div>
  );
}

User.propTypes = {
  name: PropTypes.string,
  schedule: PropTypes.object
}
export default User;
