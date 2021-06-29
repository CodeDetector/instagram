import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Booking = () => {
    return (
        <View style={styles.container}>
            <Text>This is Booking Screen</Text>
        </View>
    )
}

export default Booking;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})
