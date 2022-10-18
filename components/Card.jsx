import React from 'react'
import { Image, StyleSheet, Text, View,TextInput,TouchableOpacity,Alert,ScrollView, Pressable   } from 'react-native';


const Card = ({usuario, cambiarAct, getUsr}) => {

  const {id, first, last, photo, active, gender } = usuario

  const cambiaractivo = (id) => {
    cambiarAct(id   )
    console.log("Activo cambiado en onlonppress")
}
  return (
    <View style={styles.container}>
        <Pressable onLongPress={() => {
          cambiaractivo(id);
        }}>
          <Image 
            source= {{uri: usuario.photo}} 
            //style={styles.thumbnailDes} 
            style={active? styles.thumbnail : styles.thumbnailDes}
            //className={active?'card-photo':'card-photo suspendido'}
            />
        </Pressable>
        {
          /* 
            <TouchableOpacity onPress={() => {
            cambiaractivo(id);
            }}>
            <Image 
            source= {{uri: usuario.photo}} 
            //style={styles.thumbnailDes} 
            style={active? styles.thumbnail : styles.thumbnailDes}
            //className={active?'card-photo':'card-photo suspendido'}
            />
        </TouchableOpacity>
          */
        }
        
      <View style={styles.nombreCard}>
        {   (active)?
            <>
                <Text style={styles.textNombre}>{first}</Text>
                <Text style={styles.textNombre}>{last}</Text>
            </>
            :
            <Text style={styles.textNombre}>{
                (gender === 'male')?
                'Suspendido'
                :
                'Suspendida'
                }</Text>
            
        } 
      </View>
        
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#68042A',
    alignItems: 'center',
    justifyContent: 'center',
    height:250,
    width:250,
    margin:10,
    borderRadius:20,
    borderWidth:2,
    borderColor:"white",

    shadowColor: "#fff",
    shadowOffset: {
	  width: 0,
	  height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

elevation: 24,
  },

  thumbnail: {
    width: 150,
    height: 150,
    borderRadius:30
    },
    thumbnailDes:{
      width: 150,
      height: 150,
      borderRadius:30,
      opacity:0.5
    },
  nombreCard:{
    marginTop:14,
    paddingTop:6,
    borderTopWidth:2,
    borderColor:"white",
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textNombre:{
    color:"white",
    fontSize: 20,
  },
});
export default Card