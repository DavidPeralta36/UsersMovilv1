import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Slider, Text, Icon } from '@rneui/themed';
import GridUsers from './GridUsers';


const SliderUsrs = () => {
const [value, setValue] = useState(0);

  return (
    <View style={[styles.contentView]}>
        <Text style={styles.title}>Selecciona la cantidad de usuarios</Text>
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
                containerStyle={{ bottom: 20, right: 20 }}
              />
            ),
          }}
        />
        <Text style={styles.textt}>Cantidad de usuarios: {value}</Text>
        <GridUsers limiteUsuarios={value} />
    </View>
  )
}

const styles = StyleSheet.create({
    contentView: {
      padding: 20,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'stretch',
    },
    textt:{
        color:"white",
        paddingTop: 20
    },
    title:{
        fontWeight: 'bold',
        fontSize: 20,
        color:"#fff",
        marginBottom:10,
        marginTop:-80
      },
    });
export default SliderUsrs