import React from 'react';

function SideNav(){
  let divStyle = {
    width: '12%',
    height: 'calc(110vh - 50px)',
    border: 'solid black .5px',
    float: 'left',
    display: 'inline-block',
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: 'aqua'

  }
  return(
    <div style={divStyle}>
    SideNav Works
    </div>
  );

}
export default SideNav;
