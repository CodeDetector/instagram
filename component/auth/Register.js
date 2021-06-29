import React, { useState } from 'react'
import { View,TextInput,StyleSheet,Button,SafeAreaView, Pressable,Text } from 'react-native'
import firebase from 'firebase';
import { createUserProfileDocument } from '../../firebase/firebase';


export default function RegisterScreen({navigation}){

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [userName,setUsername] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('')

    const onSignUp = async () => {
        if(password!==confirmPassword)
        {
            alert('Password not matched')
            return;
        }
        if(password.length<6)
        {
            alert('password must be atleast 6 characters long');
            return;
        }
        try{
        const {user} = await  firebase.auth().createUserWithEmailAndPassword(email,password)
        await createUserProfileDocument(user,{userName})
        setEmail('');setUsername('');setPassword('')
        }
        catch(error){console.log(error)}
    }
    return(
        <SafeAreaView style = {styles.container}>
            <StatusBar style="auto" />
            <Pressable onPress={()=>navigation.navigate("login")}><Text>Already have an account?</Text></Pressable>
            <View style={styles.inputView}>
                <TextInput style={styles.TextInput} placeholder="UserName" onChangeText={(name)=>setUsername(name)} />
            </View>
            <View style = { styles.inputView }>
                <TextInput style = {styles.TextInput} placeholder="UserName" onChangeText={(name)=>setUsername(name)} />
            </View>
            <View style={styles.inputView}>
                <TextInput style = {styles.TextInput} placeholder="Email" onChangeText={(mailId)=>setEmail(mailId)}/>
            </View>
            <View style={styles.inputView}>
                <TextInput style = {styles.TextInput} secureTextEntry={true} placeholder="Password" onChangeText={(pass)=>setPassword(pass)}/>
            </View>
            <View style={styles.inputView}>
                <TextInput style = {styles.TextInput} secureTextEntry placeholder="Confirm Password" onChangeText = {(pass)=>setconfirmPassword(pass)}/>
            </View>
            <TouchableOpacity style={styles.loginBtn} onPress={()=>onSignUp()}>
                 <Text>LOGIN</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },
    inputView: {
        backgroundColor: "#FFC0CB",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
     
        alignItems: "center",
      },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
      },
    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#FF1493",
      },
})