import React,{useEffect} from 'react'
import { StyleSheet, Text , SafeAreaView , ActivityIndicator } from 'react-native'
import firebase from '../../firebase/firebase'

const LoadingScreen = () => {
   
    return(
        <SafeAreaView style = {styles.container}>
            <ActivityIndicator size="large" color="#0000ff"/>
            {/* <Text>Loading...</Text> */}
        </SafeAreaView>
    )
}

export default LoadingScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})
