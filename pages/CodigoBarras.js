import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Header from './Header';
import { useNavigation } from '@react-navigation/native';
import { BarCodeScanner } from 'expo-barcode-scanner';

function CodigoBarras() {

    const navigation = useNavigation();
    const[hasPermission, setHasPermission] = useState(null);
    const[scanned, setScanned] = useState(false);
    const[text, setText] = useState('Not yet scaned')

    const askForCameraPermission = () => {
        (async () => {
           const { status } = await BarCodeScanner.requestPermissionsAsync();
           setHasPermission(status === 'granted') 
        })()
    }

    useEffect(() => {
        askForCameraPermission();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        setText(data);
        console.log('Type: ' + type + '\nData' + data)
    }

    if(hasPermission === null) {
        return(
            <View style={styles.container}>
                <Text>Requesting for camera permission</Text>
            </View>
        )
    }

    if(hasPermission === false) {
        return(
            <View style={styles.container}>
                <Text>No access to camera</Text>
                <Button title={'Allow Camera'} onPress={() => askForCameraPermission()}/>
            </View>
        )
    }

    return(
        <>
            <Header title="Codigo de Barras" />
            <View style={styles.container}>
                <View style={styles.barcodebox}>
                    <BarCodeScanner
                        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                        style={{ height: 400, width: 400 }}>
                    </BarCodeScanner>
                </View>
                <Text style={styles.maintext}>{text}</Text>

                {scanned && <Button title={'Scan again?'} onPress={() => setScanned(false)} color='tomato' />}

                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.button}>
                <Text style={styles.textButton}>voltar</Text>
                </TouchableOpacity>
            </View>
        </>    
    )
}  

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    barcodebox: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 300,
        width: 300,
        overflow: 'hidden',
        borderRadius: 30,
        backgroundColor: 'tomato'
    }
});

export default CodigoBarras;