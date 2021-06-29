import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const HomeScreen = () => {
    return (
        <View styles={styles.container}>
            <Text>This is HomeScreen</Text>
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container:{
            flex:1,
            alignItems:"center",
            justifyContent:"center"
    }
})
