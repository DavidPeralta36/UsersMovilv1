import React, { useDebugValue } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Card from './Card';

const ListUsers = ({dtusr, cambiarAct , getUsr}) => {
  return (
    <>
      {
        dtusr.map(usuario => (
          <Card key={usuario.id} usuario={usuario} cambiarAct={cambiarAct} actualizar={getUsr} />
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