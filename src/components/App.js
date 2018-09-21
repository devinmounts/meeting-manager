import React, { Component } from 'react';
import logo from '../public/logo.svg';
import '../styles/App.css';
import Calendar from './Calendar';
import SideNav from './SideNav';
import TopNav from './TopNav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />
        <SideNav />
        <Calendar />
      </div>
    );
  }
}

export default App;
