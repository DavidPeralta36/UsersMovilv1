import React, { useDebugValue } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Cardd from './Cardd';

const ListUsers = ({dtusr, cambiarAct , getUsr,dark}) => {
  return (
    <>
      {
        dtusr.map(usuario => (
          <Cardd key={usuario.id} usuario={usuario} cambiarAct={cambiarAct} actualizar={getUsr} dark={dark}/>
        ))
      }
    </>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumbnail: {
    width: 200,
    height: 200,
    }
});
export default ListUsers