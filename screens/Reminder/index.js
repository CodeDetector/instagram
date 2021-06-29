import React from 'react'
import { StyleSheet, Text, SafeAreaView,Pressable } from 'react-native'
import Recording from '../../component/Recording'

const index = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <Pressable onPress={()=>navigation.toggleDrawer()}>
              <Text>This is Reminder index Screen</Text>
            </Pressable>
            <Recording/>
        </SafeAreaView>
    )
}

export default index

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})

