import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const PremiumInsurance = () => {
    return (
        <View style={styles.container}>
            <Text>This is Premium Insurance Screen</Text>
        </View>
    )
}

export default PremiumInsurance

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})

