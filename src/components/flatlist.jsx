import React, { Component } from 'react';
import Flat from './flat';

class Flatlist extends Component {
  renderList = () => {
    return this.props.flats.map((flat) => {
      // console.log(flat);
      return (
        <Flat
          name={flat.name}
          price={flat.price}
          imageUrl={flat.imageUrl}
          key={flat.imageUrl}
          lat={flat.lat}
          lng={flat.lng}
        />
      );
    });
  }

  render() {
    return this.renderList();
  }
}

export default Flatlist;
