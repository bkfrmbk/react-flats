import React, { Component } from 'react';
import Flat from './flat';
import Flatlist from './flatlist';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="flat-list">
          <p> testies </p>
          <Flat />
        </div>
        <div className="map-container">
          <p>tstttttt</p>
        </div>
      </div>
    );
  }

}

export default App;
