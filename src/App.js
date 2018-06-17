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
      startbarList: []
    }
  }

  addToSBList(windowName) {
    var array = this.state.startbarList;
    var index = array.indexOf(windowName);
    if(index == -1){
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

  render() {
    return (
      <div className="App">
        <Desktop addToSBList={this.addToSBList.bind(this)} removeFromSBList={this.removeFromSBList.bind(this)}/>
        <StartBar sbList={this.state.startbarList}/>
      </div>
    );
  }
}

export default App;
