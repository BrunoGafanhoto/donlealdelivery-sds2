import { useFonts, OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';


import { StyleSheet, Text, View } from 'react-native';
import Header from './src/Header';
import AppLoading from 'expo-app-loading';
import Home from './src/Home';
import Routes from './src/Routes';

export default function App() {

  let[fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold
  });

  if(!fontsLoaded) {
    return <AppLoading/>
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
     <Routes/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,

  },
});
