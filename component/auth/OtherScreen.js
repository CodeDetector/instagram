import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const OtherScreen = () => {
    return (
        <View style={styles.container}>
            <Text>This is OtherScreen</Text>
        </View>
    )
}

export default OtherScreen;

const styles = StyleSheet.create({
    container : {
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})
