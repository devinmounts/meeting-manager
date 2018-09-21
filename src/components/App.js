import React, { Component } from 'react';
import '../styles/App.css';
import Calendar from './Calendar';
import SideNav from './SideNav';
import TopNav from './TopNav';
import PropTypes from 'prop-types';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      masterUserList: {
        0: {
          name: 'Devin',
          schedule: {
            sunday: [{
              event: 'Lunch',
              time : '1:00pm - 2:00pm'
            }],
            monday: [{
              event: 'Lunch',
              time : '1:00pm - 2:00pm'
            }],
            tuesday: [{
              event: 'Lunch',
              time : '1:00pm - 2:00pm'
            }],
            wednesday: [{
              event: 'Lunch',
              time : '1:00pm - 2:00pm'
            }],
            thursday: [{
              event: 'Lunch',
              time : '1:00pm - 2:00pm'
            }],
            friday: [{
              event: 'Lunch',
              time : '1:00pm - 2:00pm'
            }],
            saturday:[{
              event: 'Lunch',
              time : '1:00pm - 2:00pm'
            }],
          }
        }
      }
    }
  }
  render() {
    return (
      <div className="App">
        <SideNav />
        <TopNav />
        <Calendar userList={this.state.masterUserList}/>
      </div>
    );
  }
}

App.propTypes = {
  masterUserList: PropTypes.object
}
export default App;
