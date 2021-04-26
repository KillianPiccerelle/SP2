import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {IconButton, Colors} from 'react-native-paper';

import GetLocations from 'react-native-get-location';
import MapboxGL from '@react-native-mapbox-gl/maps';
import {lineString as makeLineString} from '@turf/helpers';
import MapboxDirectionsFactory from '@mapbox/mapbox-sdk/services/directions';

import Header from '../components/_Shared/Header';

const accessToken =
  'pk.eyJ1Ijoia2lsbGlhbnAiLCJhIjoiY2ttNmdrazVuMG56MDJubnc1cWY3Ym80ZiJ9.0LUwnm6A64t6SSMTj7VAqw';
MapboxGL.setAccessToken(accessToken);

const directionsClient = MapboxDirectionsFactory({accessToken});

class MapScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeAnnotationIndex: -1,
      previousActiveAnnotationIndex: -1,
      latitude: 46.23219,
      longitude: 2.20966,
      backgroundColor: 'blue',
      startingPoint: null,
      destinationPoint: null,
      coordinates: [
        [-73.99155, 40.73581],
        [1.8576953, 44.2012986],
        [2.295023, 48.873818],
        [1.6310642, 50.7644118],
        [3.115278, 43.310556],
      ],
    };

    this._scaleIn = null;
    this._scaleOut = null;
    this.onPress = this.onPress.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => this.findCoordinates(), 15000);
  }

  findCoordinates = () => {
    GetLocations.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 10000,
    })
      .then(position => {
        const startingPoint = [position.longitude, position.latitude];
        this.setState({startingPoint});
        console.log(this.state.startingPoint);
      })
      .catch(error => {
        const {code, message} = error;
        console.warn(code, message);
      });
  };

  onPress(feature) {
    const coords = Object.assign([], this.state.coordinates);
    coords.push(feature.geometry.coordinates);
    this.setState({coordinates: coords});
  }

  onAnnotationSelected(activeIndex, feature) {
    if (this.state.activeIndex === activeIndex) {
      return;
    }

    this.setState({activeAnnotationIndex: activeIndex});
  }

  onAnnotationDeselected(deselectedIndex) {
    const nextState = {};

    if (this.state.activeAnnotationIndex === deselectedIndex) {
      nextState.activeAnnotationIndex = -1;
    }

    nextState.previousActiveAnnotationIndex = deselectedIndex;
    this.setState(nextState);
  }

  renderAnnotations() {
    const items = [];

    for (let i = 0; i < this.state.coordinates.length; i++) {
      const coordinate = this.state.coordinates[i];
      const longitude = this.state.coordinates[i][0];
      const latitude = this.state.coordinates[i][1];
      const title = `Longitude: ${this.state.coordinates[i][0]} Latitude: ${this.state.coordinates[i][1]}`;
      const id = `pointAnnotation${i}`;

      items.push(
        <MapboxGL.PointAnnotation
          key={id}
          id={id}
          title="Test"
          selected={i === 0}
          onSelected={feature => this.onAnnotationSelected(i, feature)}
          onDeselected={() => this.onAnnotationDeselected(i)}
          coordinate={coordinate}>
          <MapboxGL.Callout title={[longitude, ' ', latitude]} />
        </MapboxGL.PointAnnotation>,
      );
    }

    return items;
  }

  centerUserCoordinates() {
    GetLocations.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location => {
        this._map.setCamera({
          centerCoordinate: [location.longitude, location.latitude],
          zoomLevel: 16,
          animationDuration: 2000,
        });
      })
      .catch(error => {
        const {code, message} = error;
        console.warn(code, message);
      });
  }

  render() {
    return (
      <View>
        <Header
          title={'Carte'}
          paddingLTitle={70}
          paddingRTitle={130}
          srcImg={'https://www.svgrepo.com/show/65818/map.svg'}
        />
        <View style={styles.container}>
          <MapboxGL.MapView
            userTrackingMode={MapboxGL.UserTrackingModes.Follow}
            centerCoordinate={[this.state.longitude, this.state.latitude]}
            style={styles.map}>
            <MapboxGL.UserLocation />
            <MapboxGL.Camera
              ref={c => (this._map = c)}
              followZoomLevel={15}
              animationMod={'flyTo'}
            />
            {this.renderAnnotations()}
          </MapboxGL.MapView>
          <View style={styles.iconButton}>
            <IconButton
              icon="crosshairs-gps"
              size={40}
              onPress={() => this.centerUserCoordinates()}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'tomato',
  },
  map: {
    flex: 1,
  },
  iconButton: {
    position: 'absolute',
    top: '65%',
    zIndex: 10,
    width: '80%',
    height: '80%',
  },
});

export default MapScreen;
