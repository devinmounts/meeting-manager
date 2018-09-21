import React from 'react';

function Calendar(){
  let divStyle = {
    width: '87%',
    backgroundColor: 'aqua',
    border: 'solid black .5px',
    display: 'inline-block',
    float: 'right',
    height: 'calc(16rem - 50px)',
    position: 'relative',
    overflow: 'hidden',
  }
  return(
    <div style={divStyle}>
    Calendar Works
    </div>
  );

}
export default Calendar;
