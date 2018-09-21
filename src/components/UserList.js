import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

function UserList(props){
  console.log(props);
  return(
    <div>
    <User name={props.userList[0].name}
          schedule={props.userList[0].schedule}/>
    </div>
  );
}

UserList.propTypes = {
  userList: PropTypes.object,
  schedule: PropTypes.object
}
export default UserList;
