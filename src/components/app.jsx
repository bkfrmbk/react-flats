import React, { Component } from 'react';
import Flat from './flat';
import Flatlist from './flatlist';
import flats from '../../data/flats';
import SimpleMap from './simple_map';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats: flats
    };
  }

  render() {
    return (
      <div>
        <div className="flat-list">
          <Flatlist flats={this.state.flats} />
        </div>
        <div className="map-container">
          <SimpleMap />
        </div>
      </div>
    );
  }

}

export default App;
