import React from 'react'
import { Image, StyleSheet, Text, View,TextInput,TouchableOpacity,Alert  } from 'react-native';
import ListUsers from './ListUsers';
import { useEffect, useState } from "react";


const GridUsers = ({limiteUsuarios}) => {
    const urlAPI =`https://randomuser.me/api/?results=${limiteUsuarios}`;

    const [dtusr, setdtusr]= useState([])
    const [hidden, setHidden] = useState(false)

    const getUsr = async ()=>
    {
        const data = await fetch(urlAPI);
        const {results} = await data.json()
        const nuevousr = results.map( usr => {
            return {
              id: usr.login.uuid,
              first: usr.name.first,
              last: usr.name.last,
              gender: usr.gender,
              photo: usr.picture.large,
              active: true,
            }
          })
        setdtusr(nuevousr)
    };

    const consultar = () => {
      try{
        getUsr()
      }
      catch (e){
        Alert.alert(
          "Ups..",
          {e},
          [
            { text: "Entendido"}
          ]
        );
      }
      setHidden(true)
    }
    const actualizar = () => {
      try{
        getUsr()
      }
      catch (e){
        Alert.alert(
          "Ups..",
          {e},
          [
            { text: "Entendido"}
          ]
        );
      }
    }
    const cambiarAct = (id)=>{
        const nuevousr = dtusr.filter(usuario => usuario.id === id)
        nuevousr[0].active = !nuevousr[0].active
        setdtusr([...dtusr])
    }

  return (
    <View style={styles.container}>
        <TouchableOpacity 
          //style={styles.loginBtn} 
          style={!hidden? styles.loginBtn : styles.loginBtnDes}
          onPress={() => {
            if(!hidden){
              consultar();
            }
            else{
              console.log("Boton desactivado")
            }
          }}>
          <Text style={!hidden? styles.loginText : styles.loginTextDes}>Consultar</Text>
        </TouchableOpacity>
        <Text 
        style={!hidden? styles.title : styles.title2}
        >Usuarios random del interné</Text>
        <TouchableOpacity style={styles.loginBtn2} onPress={() => {
          actualizar();
        }}>
          <Text style={styles.loginText}>Actualizar Usuarios :)</Text>
        </TouchableOpacity>
        <ListUsers dtusr={dtusr} cambiarAct={cambiarAct} actualizar={getUsr} />
    </View>
    
    
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#09234B',
      alignItems: 'center',
      justifyContent: 'center',
      height: "100%"
    },
    title:{
      fontWeight: 'bold',
      fontSize: 20,
      color:"#fff"
    },
    title2:{
      fontWeight: 'bold',
      fontSize: 20,
      color:"#fff",
      marginTop: -90,
      marginBottom:5
    },
    loginBtn: {
        width: 210,
        borderRadius: 10,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        backgroundColor: "#2AB57C",
        marginBottom:40
      },
    loginBtnDes: {
      width: 210,
      borderRadius: 10,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
      backgroundColor: "#09234B",
      marginBottom:40
    },
    loginTextDes:{
      color:"#09234B"
    },
    loginBtn2: {
      width: 210,
      borderRadius: 10,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
      backgroundColor: "#6A30A8",
      marginBottom:40
    },
    loginText:{
      color:"#fff"
    }
  });
  

export default GridUsers