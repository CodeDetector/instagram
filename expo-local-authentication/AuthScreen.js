import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions,Image,Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import * as LocalAuthentication from 'expo-local-authentication';
import { biometricAuthentication } from '../redux/Application/Applications.actions';

const fingerPrintImage = require('../assets/favicon.png');

const AuthScreen=(props)=>{
    const [compatible, isCompatible] = useState(false);
    const [fingerPrints, setFingerPrints] = useState(false);


    useEffect(()=>{
        checkDeviceForHardware();
        checkForFingerprints();
     },[])
 
     const checkDeviceForHardware= async()=>{
         let compatible = await LocalAuthentication.hasHardwareAsync();
         isCompatible(compatible);
         console.log('compatible',compatible);
     }
 
     const checkForFingerprints = async () => {
         let fingerprints = await LocalAuthentication.isEnrolledAsync();
         setFingerPrints( fingerprints );
         console.log('fingerPrints', fingerprints)
       };
 
     const scanFingerprint = async () => {
          await LocalAuthentication.authenticateAsync()
          .then(res=>{
              if(res.success===true){
                useDispatch(biometricAuthentication())
                props.navigation.navigate('FLayout',{screen:'home'})
              }})
     };

    return(
       
        <View style={ styles.fingerPrint }>
            {Alert.alert("Biometric accessed")}
            <TouchableOpacity onPress={ ()=>scanFingerprint()}>
                {/* <Text allowFontScaling={ false }>SCAN</Text> */}
                <Image width={ Dimensions.get('window').width/8 } style={ styles.fpImage } source={ fingerPrintImage } />
                <Text style={ styles.fpText } allowFontScaling={ false }>One-Touch Login</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AuthScreen;

const styles = StyleSheet.create({
    fingerPrint: {
        alignItems: "center",
        marginTop: 25
    },
    fpImage: {
        alignSelf: "center",
        marginBottom: 8
    },
    fpText: {
        fontSize: 15,
        color: "#341931"
    }
});