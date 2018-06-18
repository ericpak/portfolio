import React, { Component } from 'react';

// components
import Desktop from './components/desktop';
import StartBar from './components/start_bar';

// include minified css
import './assets/css/default.min.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      startbarList: [],
    }
    this.addToSBList("About");
  }

  addToSBList(windowName) {
    var array = this.state.startbarList;
    var index = array.indexOf(windowName);
    if(index === -1){
      array.push(windowName);
    }
    console.log(this.state.startbarList);
  }

  removeFromSBList(windowName) {
    var array = this.state.startbarList;
    var index = array.indexOf(windowName);
    if(index > -1){
      array.splice(index, 1);
    }
    console.log(this.state.startbarList);
  }

  changeZ(windowName) {
    this._desktop.changeZ(windowName);
  }

  openWindow(windowName) {
    this._desktop.openWindow(windowName);
    console.log("APP: "+windowName);
  }

  render() {
    return (
      <div className="App">
        <Desktop addToSBList={this.addToSBList.bind(this)} removeFromSBList={this.removeFromSBList.bind(this)} ref={ref => (this._desktop = ref)}/>
        <StartBar sbList={this.state.startbarList} changeZ={this.changeZ.bind(this)} openWindow={this.openWindow.bind(this)} addToSBList={this.addToSBList.bind(this)}/>
      </div>
    );
  }
}

export default App;
