import React,{useState,useEffect} from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer, useNavigation} from '@react-navigation/native'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import DailyReminders from './screens/Reminder/DailyReminders';
import OnceReminder from './screens/Reminder/OnceReminder';
import AnnualReminders from './screens/Reminder/AnnualReminders';
import index from './screens/Reminder';
import indexPayment from './screens/Payment/index.payment';
import PremiumInsurance from './screens/Payment/PremiumInsurance';
import Booking from './screens/Payment/Booking';
import { createDrawerNavigator }  from '@react-navigation/drawer'
import LoginScreen from './component/auth/Login'
import RegisterScreen from './component/auth/Register'
import ProfileScreen from './screens/ProfileScreen'
import LoadingScreen from './component/auth/LoadingScreen'
import firebase from './firebase/firebase'
import { DrawerContent } from './component/Drawer'
import { useDispatch,useSelector } from 'react-redux'
import {Provider as PaperProvider} from 'react-native-paper'
import AuthScreen from './expo-local-authentication/AuthScreen'
import {setCurrentUser} from './redux/User/user.actions'
import { Alert } from 'react-native'
// import { Alert } from 'react-native'


const rootNavigator = createMaterialBottomTabNavigator()
const reminderTab = createMaterialTopTabNavigator();
const paymentTab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();
const AuthStack = createStackNavigator();


const AuthNavigator = () =>{
  return(
    <AuthStack.Navigator>
      <AuthStack.Screen name = "login" component={LoginScreen} options={{headerShown:false}}/>
      <AuthStack.Screen name="signUp" component={RegisterScreen}/>
    </AuthStack.Navigator>
  )
}
const ReminderNavigator =({navigation})=>{
  return(
    <reminderTab.Navigator initialRouteName="preview" tabBarPosition="top">
      <reminderTab.Screen name="preview" component={index} initialParams={{navigation:navigation}}/>
      <reminderTab.Screen name="dailyReminder" component={DailyReminders}/>
      <reminderTab.Screen name="onceReminder" component={OnceReminder}/>
      <reminderTab.Screen name="annualReminder" component={AnnualReminders}/>
    </reminderTab.Navigator>
  )
}
const PaymentNavigator =()=>{
  return(
    <paymentTab.Navigator initialRouteName="preview">
      <paymentTab.Screen name="preview" component={indexPayment}/>
      <paymentTab.Screen name="premiumInsurance" component={PremiumInsurance}/>
      <paymentTab.Screen name="booking" component={Booking}/>
    </paymentTab.Navigator>
  )
}
const HomeScreen = ({navigation})=>{
  return(
      <rootNavigator.Navigator shifting activeColor="#e91e63" barStyle={{backgroundColor:'tomato'}}>
       <rootNavigator.Screen name="reminderTab" component={ReminderNavigator} options={{tabBarLabel:"Reminder",tabBarColor:"blue"}} initialParams={{navigation:navigation}} />
       <rootNavigator.Screen name="paymentTab" component={PaymentNavigator}/>
      </rootNavigator.Navigator>
)}
const DrawerNavigator = ()=>{
  const bioAuth  = useSelector(state=>state.app.biometric_authentication)
  // return(
  //   <Drawer.Navigator drawerContent={props=><DrawerContent {...props}/>}>
  //     {bioAuth?
  //       <Drawer.Screen name = "home" component={HomeScreen}/>:<Drawer.Screen name= "auth" component={AuthScreen}/>
  //     }
  //   </Drawer.Navigator>
  // )
  return(
    <Drawer.Navigator drawerContent={props=><DrawerContent {...props}/>}>
        <Drawer.Screen name = "home" component={HomeScreen}/>
    </Drawer.Navigator>
  )
}


export default Root = ()=>{

  const [isLoading, setIsLoading] = useState(true)
//   const [userToken, setuserToken] = useState(null)
  // const navigation = useNavigation();
  const currUser = useSelector(state => state.user.currentUser)
  const dispatch = useDispatch()

  useEffect(()=>{
    
     const subscribe = firebase.auth().onAuthStateChanged((user)=>{
         setIsLoading(false)
         dispatch(setCurrentUser(user));
         if(user)
         {
           Alert.alert(
             "User" ,
             `Current user is ${user.uid}`
         )
        }
        else{
          Alert.alert("No user")
        }
        
        })
  // setTimeout(() => {
  //   setIsLoading(false);
  // }, 1000)
  return subscribe;
  },[]);


  if(isLoading)
  {
    return(
      <LoadingScreen/>
    )
  }
  return(
    <PaperProvider>
      <NavigationContainer>
      {currUser?<DrawerNavigator/>:<AuthNavigator/>}
      {/* <LoginScreen/> */}
      </NavigationContainer>
    </PaperProvider>
  )
}
