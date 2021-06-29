import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Alert } from 'react-native';


const firebaseConfig = {
    apiKey: "AIzaSyC1UAifxzcfRllLihQOKYkp9rDBNOZvq1E",
    authDomain: "memorring.firebaseapp.com",
    projectId: "memorring",
    storageBucket: "memorring.appspot.com",
    messagingSenderId: "558082328297",
    appId: "1:558082328297:web:abe078135ea3aa48739278",
    measurementId: "G-3C21PHTNFE"
};

export const createUserProfileDocument=async (userAuth,otherAdditionalDetails)=>{
    if(!userAuth)return;
    const userRef=firestore.doc(`users/${userAuth.uid}`);
    console.log(userRef);
    const userSnapShot=await userRef.get(); 
    console.log(userSnapShot);
    if(!userSnapShot.exists){
      const {displayName,email}=userAuth;
      const createdAt=new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...otherAdditionalDetails
        })
      }catch(error){
        console.log(error.message);
        }
      }
      return userRef;
  }
// export const addUserReminders = 
firebase.initializeApp(firebaseConfig);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore()
export default firebase;