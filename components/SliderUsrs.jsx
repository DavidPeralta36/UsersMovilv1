import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Slider, Text, Icon } from '@rneui/themed';
import GridUsers from './GridUsers';


const SliderUsrs = () => {
const [value, setValue] = useState(0);
const [dark, setDark] = useState(true)

const cambiarD = () => {
  setDark(!dark)
}


  return (
    <View style={dark? styles.contentView : styles.containerDia}>
        <View style={styles.IconCon}>
          <TouchableOpacity style={styles.icon}
            onPress={() => {
                cambiarD();
            }}>
            <Icon
            name={!dark ? 'eye' : 'eye-slash'}
            //name="eye"
            type="font-awesome"
            size={20}
            reverse
            color={dark ? '#52BE80' : '#11352A'}
            containerStyle={{ bottom: 20, right: 20 }}
            />
          </TouchableOpacity>
        </View>
        <Text style={dark? styles.title : styles.titleD}>Selecciona la cantidad de usuarios</Text>
        <Slider
          value={value}
          onValueChange={setValue}
          maximumValue={30}
          minimumValue={1}
          step={1}
          allowTouchTrack
          trackStyle={{ height: 5, backgroundColor: 'transparent' }}
          thumbStyle={{ height: 20, width: 20, backgroundColor: 'transparent' }}
          thumbProps={{
            children: (
              <Icon
                name="user"
                type="font-awesome"
                size={20}
                reverse
                color={dark ? '#52BE80' : '#11352A'}
                containerStyle={{ bottom: 20, right: 20 }}
              />
            ),
          }}
        />
        <Text style={dark? styles.textt : styles.texttD}>Cantidad de usuarios: {value}</Text>
        <GridUsers limiteUsuarios={value} dark={dark}/>
    </View>
  )
}

const styles = StyleSheet.create({
    contentView: {
      paddingHorizontal:30,
      paddingTop: 110,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'stretch',
      backgroundColor: '#09234B',
      paddingBottom:355
    },
    containerDia: {
      paddingHorizontal:30,
      paddingTop: 110,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'stretch',
      backgroundColor: '#52BE80',
      paddingBottom:355
    },
    textt:{
        color:"white",
        paddingTop: 20
    },
    texttD:{
      color:"#642B01",
      paddingTop: 20
    },
    title:{
      fontWeight: 'bold',
      fontSize: 20,
      color:"#fff",
      marginBottom:10,
      marginTop:-70
    },
    titleD:{
      fontWeight: 'bold',
      fontSize: 20,
      color:"#642B01",
      marginBottom:10,
      marginTop:-70
    },
    thumbnail: {
      width: 200,
      height: 200,
    },
    IconCon:{
      alignItems: "flex-end",
      width: "95%"
    },
    icon:{
      marginTop:-70,
      marginRight:-30,
      paddingTop:10,
      paddingLeft:17,
      height:40,
      width:60,
      
    }
    });
export default SliderUsrs