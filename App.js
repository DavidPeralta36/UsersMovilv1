import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { StyleSheet, Text, View,ScrollView, Platform, TouchableOpacity} from 'react-native';
import { Icon } from '@rneui/themed';
import SliderUsrs from './components/SliderUsrs';


export default function App() {


  return (
    <ScrollView>
      <View style={styles.container}> 
        <SliderUsrs /> 
        <StatusBar />
      </View>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


