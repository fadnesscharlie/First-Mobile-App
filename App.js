import React, { useState, useContext } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import {LinearGradient} from 'expo-linear-gradient'

export default function App() {
  let [ bgcolor, setBgcolor ] = useState({
  colorBlue: 255,
  colorGreen: 255,
  secondBlue: 255,
  secondGreen: 255
  })

  const handlePress = (evt) => {

  let colorGreen = Math.floor(evt.nativeEvent.locationX * 599 % 255)
  let colorBlue = Math.floor(evt.nativeEvent.locationY * 599 % 255)
  let secondBlue = Math.abs(colorBlue - 255)
  let secondGreen = Math.abs(colorGreen - 255)

  setBgcolor({
    colorBlue,
    colorGreen,
    secondBlue,
    secondGreen
  })
  }
  return (
    <LinearGradient
      colors={[`rgb(00, ${bgcolor.colorGreen}, ${bgcolor.colorBlue})`, `rgb(00, ${bgcolor.secondGreen}, ${bgcolor.secondBlue})`]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View>
        <TouchableOpacity onPress={(evt) => handlePress(evt)}>
          <Text style={styles.paragraph}>
            Would you like an app that changes color depending on where you click?? Well you have come to the right place! Click inside this box to change the background color and create an amazing effect! Wow! It works like magic!
          </Text>
          <LinearGradient
          colors={[`rgb(00, ${bgcolor.secondGreen}, ${bgcolor.secondBlue})`, `rgb(00, ${bgcolor.colorGreen}, ${bgcolor.colorBlue})`]}
          style={styles.circle}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          >
            <View style={styles.circle}></View>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </LinearGradient>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
  circle: {
    width: 120,
    height:120,
    borderRadius: 120/2,
    marginLeft: '35%'
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});