import React,{useState,useEffect} from 'react';
import { useSelector } from 'react-redux';
import { Text,SafeAreaView, StyleSheet, Button } from 'react-native';
import { Audio } from 'expo-av';


async function PlaySound({uri}) {
    const {sound} = await Audio.Sound.createAsync(
        {
            uri:`${uri}`
        }
    );
    await sound.playAsync()
    .then(
      sound?sound.unloadAsync():null
    ).catch(error=>console.log("unload success"))
  } 

export default PlaySound;

// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         alignItems:"center",
//         justifyContent:"center"
//     }
// })

// function PlayBack(){

// }