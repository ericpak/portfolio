import React, { Component } from 'react';

// components
import Desktop from './components/desktop';
import StartBar from './components/start_bar';

// include minified css
import './assets/css/default.min.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Desktop />
        <StartBar />
      </div>
    );
  }
}

export default App;
