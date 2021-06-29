import React from 'react'
import { Button,View,StyleSheet } from 'react-native'

export default function Landing({navigation}){
    
    return(<View style = {styles.container}>
        <Button title="Register" onPress={()=>navigation.navigate("register")}/>
        <Button title="LogIn" onPress = {() => navigation.navigate("logIn")}/> 
    </View>)
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})