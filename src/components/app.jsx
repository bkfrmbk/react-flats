import React, { Component } from 'react';
import Flatlist from './flatlist';
import flats from '../../data/flats';
import SimpleMap from './simple_map';

console.log(process.env.REACT_APP_MAP_API_KEY);


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
          <SimpleMap lat={this.state.flats[0].lat} lng={this.state.flats[0].lng} />
        </div>
      </div>
    );
  }

}

export default App;
