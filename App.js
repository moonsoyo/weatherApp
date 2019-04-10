import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Font } from 'expo';
import Weather from './weather';

const API_KEY = '9fb7a20c4989c9d1526ca909820a5aa4';

export default class App extends Component {
  state = {
    isLoaded: false,
    fontLoaded: false,
    error: null,
    temperature: null,
    name: null,
    place: null
  };

  async componentDidMount(){
    await Font.loadAsync({
      'school-bell': require('./assets/fonts/Schoolbell-Regular.ttf'),
    });

    this.setState({ fontLoaded: true });

    navigator.geolocation.getCurrentPosition(position => {
      this.getWeather(position.coords.latitude, position.coords.longitude)
    },
    error => {
      this.setState({
        error: 'Error! Something went wrong.'
      });
    }
    );
  }
  getWeather= (lat, long) =>{
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}`)
    .then(response => response.json())
    .then(json => {
      this.setState({
        temperature: json.main.temp,
        place: json.name,
        name: json.weather[0]. main,
        isLoaded: true
      });
    });
  }
  render() {
    const { isLoaded, fontLoaded, error, temperature, place, name } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden= {true} />
        {isLoaded ? (
          <Weather weatherName = { name } temp= {Math.floor(temperature - 273.15)}  weatherPlace= { place } />
        ) : (
          <View style={styles.loading}>
            {
              this.state.fontLoaded ? (
                <Text style={styles.loadingText}>soSmall is getting the weather data for you!</Text>
              ) : null
            }
            {error ? <Text style= {styles.errorText}>{ error }</Text> : null}
          </View>
          )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  errorText: {
    color: 'red',
    backgroundColor: 'transparent',
    marginBottom: 40
  },
  loading: {
    flex: 1,
    backgroundColor: '#F582AF',
    justifyContent: 'flex-end',
    paddingLeft: 25
  },
  loadingText: {
    fontFamily: 'school-bell', 
    fontSize: 38,
    marginBottom: 24,
    color: '#1E0710'
  }
});
