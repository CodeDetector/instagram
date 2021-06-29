import React from 'react'
import { StyleSheet, Text, SafeAreaView,Pressable} from 'react-native'

const ProfileScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container} >
            <Pressable onPress={()=>navigation.toggleDrawer()}>
                <Text>Profile Screen</Text>
            </Pressable>
        </SafeAreaView>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})
