import React, { Component } from 'react';


import Authenticate from './components/Authenticate.js';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
         <TopBar/>
         <Header/>
         <Content/>
      </div>
    );
  }
}

export default Authenticate(App);
