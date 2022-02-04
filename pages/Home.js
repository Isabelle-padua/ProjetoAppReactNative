import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Header from './Header';
import { useNavigation } from '@react-navigation/native';

export default function Home() {

  const navigation = useNavigation();

  return (
    <>
      <Header title="MyTracking" />
      <View style={styles.container}>

        <View style={{ flex: 1}}>
            <TouchableOpacity
            onPress={() => navigation.navigate('Localizacao')}
            style={styles.button}>
            <Text style={styles.textButton}>Localizacao</Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => navigation.navigate('Imagem')}
            style={styles.button}>
            <Text style={styles.textButton}>Captura de Imagem</Text>
            </TouchableOpacity>

            <TouchableOpacity
             onPress={() => navigation.navigate('CodigoBarras')}
            style={styles.button}>
            <Text style={styles.textButton}>Leitura de Codigo de Barras</Text>
            </TouchableOpacity>
        </View>
      </View>
      </>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30
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