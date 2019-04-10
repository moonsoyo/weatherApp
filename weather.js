import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import { Ionicons } from "@expo/vector-icons";
import PropTypes from 'prop-types';
import { Font } from 'expo';


const weatherCases = {
	Rain: {
		colors: ['#9CD9FA', '#125478'],
		title: "Oh no! It is raining!",
		subtitle: "Don't forget to take an umbrella☂️",
		icon: "ios-rainy"
	},
	Clear: {
		colors: ['#F6C10B', '#F68B0B'],
		title: "Yay! Today is Sunny🐳",
		subtitle: "Let's go out with soSmall❤️",
		icon: "ios-sunny"
	},
	Thunderstorm: {
		colors: ['#812EA3', '#5196EE'],
		title: "Thunderstorm!!!",
		subtitle: "Stay strong!👻",
		icon: "ios-thunderstorm"
	},
	Clouds: {
		colors: ['#B4B4BA', '#66656D'],
		title: "A cloudy day 👀",
		subtitle: "Work day?!?! 👩‍💻",
		icon: "ios-cloudy"
	},
	Snow: {
		colors: ['#C987F7', '#87E5F7'],
		title: "There's snow everywhere❤️",
		subtitle: "Do you want to build a snowman⛄️",
		icon: "ios-snow"
	},
	Drizzle: {
		colors: ['#96F787', '#87F7DF'],
		title: "It's drizzling💧",
		subtitle: "Let's have a lazy day hehe",
		icon: "ios-rainy-outline"
	},
	Haze: {
		colors: ['#A4F1DE', '#B4C2BE'],
		title: "Haze!",
		subtitle: "Cannot see you oh well",
		icon: "ios-cloud"
	}
};


function Weather({ weatherName, temp, weatherPlace}){
	
	return (
		<LinearGradient 
			  colors= {weatherCases[weatherName].colors} 
			  style={styles.container}>

			  <View style={styles.upper}>
			  	<Ionicons color= 'white' size= {144} name= {weatherCases[weatherName].icon} />
			    <Text style={styles.temp}>{temp}℃</Text>  
			    <Text style={styles.place}>{weatherPlace}</Text>    
			  </View>
			  <View style={styles.lower}>   
			  <Text style={styles.title}>{weatherCases[weatherName].title}</Text>   
			  <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>	     
			  </View>

		    </LinearGradient>
	);
}

Weather.propTypes = {
	temp: PropTypes.number.isRequired,
	weatherName: PropTypes.string.isRequired
};

export default Weather;

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	upper: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'transparent',
		marginTop: 10
	},
	temp: {
		fontSize: 70, 
		backgroundColor: 'transparent',
		color: 'white',
		marginTop: 10
	},
	place: {
		fontSize: 60, 
		fontFamily: 'school-bell', 
		backgroundColor: 'transparent',
		color: 'white',
		marginTop: 10
	},
	lower: {
		flex: 1,
		alignItems: 'flex-start',
		justifyContent: 'flex-end',
		paddingLeft: 25
	},
	title: {
		fontSize: 42,
		fontFamily: 'school-bell', 
		backgroundColor: 'transparent',
		color: 'white',
		marginBottom: 10,
		fontWeight: '300'
	},
	subtitle: {
		fontSize: 24,
		fontFamily: 'school-bell', 
		backgroundColor: 'transparent',
		color: 'white',
		marginBottom: 100
	}
})