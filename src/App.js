import React, { Component } from 'react';

// components
import Desktop from './components/desktop';

// include minified css
import './assets/css/default.min.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Desktop />
      </div>
    );
  }
}

export default App;
