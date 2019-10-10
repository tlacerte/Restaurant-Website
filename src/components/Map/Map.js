import React, {Component} from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends Component {
    render(){
        return (
            <div className="map-div">
            <Map
                google={this.props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={{ lat: 30.2672, lng: -97.7431}}
            >
                <Marker position={{ lat: 30.2672, lng: -97.7431}} />
            </Map>
            </div>
        )
    }
}

const mapStyles = {
    width: '50%',
    height: '50%',
  };

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDWNA9N-aW9HQGnNFhwpgN1NkCW4qDQFcU'
  })(MapContainer);