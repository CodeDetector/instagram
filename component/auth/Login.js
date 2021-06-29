

import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import firebase, { auth, createUserProfileDocument, firestore } from '../../firebase/firebase'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
// import firebase from '../../firebase/firebase'
import * as Google from 'expo-google-app-auth';
import { setCurrentUser } from "../../redux/User/user.actions";
// import {GoogleSigninButton} from 'react-native-google-signin'


export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  async function signInWithGoogleAsync() {
    try {
    const result = await Google.logInAsync({
        androidClientId: "558082328297-vh0hfbuvi7g60esapuk6j87j2maomp4u.apps.googleusercontent.com",
        iosClientId: "558082328297-qqspcuaguaav9a51nu0g8d92ridcg867.apps.googleusercontent.com",
        scopes: ['profile', 'email'],
    });

    if (result.type === 'success') {
        const {accessToken,idToken} = result
        const credential = firebase.auth.GoogleAuthProvider.credential(idToken,accessToken);
        const {user} =  await auth.signInWithCredential(credential)
        await createUserProfileDocument(user)
        return;
    } else {
        return { cancelled: true };
    }
    } catch (e) {
    return { error: true };
    }
}

  const handlePress = async () =>{
      // Alert.alert("Entered in Login")
      firebase.auth().signInWithEmailAndPassword(email,password)
      .then(setCurrentUser(firebase.auth().currentUser))
      .then(result=>console.log(result))
      .catch(error=>console.log(error))
  } 

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../../assets/logo.png")} />
 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="grey"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="grey"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.loginBtn} onPress={()=>handlePress()}>
        <Text>LOGIN</Text>
      </TouchableOpacity>

      <Button
      title="Sign in With google"
                style={{width: 192, height: 48}}
                onPress={()=>signInWithGoogleAsync()}
              />

    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 60,
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
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
    color:"blue"
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
});