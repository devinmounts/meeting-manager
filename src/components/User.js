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
    </div>
  );
}

User.propTypes = {
  name: PropTypes.string,
  schedule: PropTypes.object
}
export default User;
