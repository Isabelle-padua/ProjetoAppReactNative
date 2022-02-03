import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Header from './Header';
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';
 
function Localizacao() {

  const navigation = useNavigation();
  const [location, setLocation] = React.useState(null);
  const [errorMsg, setErrorMsg] = React.useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location =  await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let latitude = 'Waiting..';
  let longitude = '';
  let hora = '';
  let horaFormatada = '';
  if (errorMsg) {
    latitude = errorMsg;
  } else if (location) {
    latitude = JSON.stringify(location.coords.latitude);
    longitude = JSON.stringify(location.coords.longitude);
    hora = JSON.stringify(location.timestamp)
    horaFormatada = JSON.stringify(new Date(hora));
  }
  return (
      <>
        <Header title="Localizacao" />
        <View style={styles.container}>
            <View style={styles.containerText}>
              <Text style={styles.text}>Latitude: {latitude}</Text>
              <Text style={styles.text}>Longitude: {longitude}</Text>
              <Text style={styles.text}>Hora: {horaFormatada}</Text>
            </View>

            <View style={styles.containerButton}>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.button}>
              <Text style={styles.textButton}>voltar</Text>
              </TouchableOpacity>
            </View>
        </View>
      </>
  );
}
 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    containerText: {
      flex:1,
      maxWidth: 500,
      paddingTop: 20
    },
    containerButton: {
      flex: 2
    },
    text: {
      fontSize:20,
      color:'blue'
    },
    button: {
      backgroundColor: '#fafaff', 
      marginBottom: 15, 
      borderWidth: 2, 
      borderRadius:7, 
      borderColor: '#8390a5'
    },
    textButton: {
      textAlign: 'center',
      fontSize:20,
      color: '#1c4083',
      padding: 10
    }
  });
 
export default Localizacao;