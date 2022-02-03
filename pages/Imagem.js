import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native';
import Header from './Header';
import * as ImagePicker from 'expo-image-picker';

function Imagem() {

    const [pickedImagePath, setPickedImagePath] = useState('');

    //Imagem da Galeria
    const showImagePicker = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("You've refused to allow this app to access your photos!");
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync();

        console.log(result);

        if (!result.cancelled) {
            setPickedImagePath(result.uri);
            console.log(result.uri);
        }
    }

    //Abrir camera
    const openCamera = async () => {
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

        if(permissionResult.granted === false) {
            alert("You've refused to aloow this app to access ypur camera!")
            return;
        }

        const result = await ImagePicker.launchCameraAsync();

        console.log(result);

        if(!result.cancelled) {
            setPickedImagePath(resut.uri);
            console.log(result.uri);
        }
    }

    return (
        <>
            <Header title="Localizacao" />
            <View style={styles.screen}>
                <View style={styles.buttonContainer}>
                    <Button onPress={showImagePicker} title="Select as Image" />
                    <Button onPress={openCamera} title="Open camera" />
                </View>

                <View style={styles.imageContainer}>
                    {
                        pickedImagePath !== '' && <Image
                            source={{ uri: pickedImagePath }}
                            style={styles.image}
                        />    
                    }
                </View>
            </View>
        </>    
    );
}

export default Imagem;

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff'
    },
    buttonContainer: {
      width: 400,
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    imageContainer: {
      padding: 30
    },
    image: {
      width: 400,
      height: 300,
      resizeMode: 'cover'
    }
});

