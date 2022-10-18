import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { StyleSheet, Text, View,ScrollView, Platform, TouchableOpacity} from 'react-native';
import { Icon } from '@rneui/themed';
import SliderUsrs from './components/SliderUsrs';


export default function App() {
  const [dark, setDark] = useState(true)

  const cambiarD = () => {
    setDark(!dark)
  }

  return (
    <ScrollView>
      <View style={dark? styles.container : styles.containerDia}> 
          <View style={styles.topp}>
          <TouchableOpacity 
          onPress={() => {
              cambiarD();
          }}>
            <Icon
            name={!dark ? 'eye' : 'eye-slash'}
            //name="eye"
            type="font-awesome"
            size={20}
            reverse
            containerStyle={{ bottom: 20, right: 20 }}
            />
          </TouchableOpacity>
          
          
          </View>
          <SliderUsrs  style={styles.sliderstyle}/> 
          
        <StatusBar style='light-content'/>
      </View>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:50,
    flex: 1,
    backgroundColor: '#09234B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerDia: {
    paddingTop:50,
    flex: 1,
    backgroundColor: '#9CD1CA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumbnail: {
    width: 200,
    height: 200,
    },
    topp:{
      alignItems: "flex-end",
      width: "100%"
    },
    sliderstyle:{
      marginTop:-80
    }
});


