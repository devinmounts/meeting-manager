import React from 'react';

function Calendar(){
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
    width: '100%',
    height: '100%'

  }

  let dayColumn = {
    display: 'inline-block',
    width: '14%',
    position: 'relative',
    height: '100%',
    border: 'solid black .5px',
    backgroundColor: 'yellow'

  }
  return(
    <div style={divStyle}>
      <div style={weekRow} >
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
export default Calendar;
