import { StatusBar } from 'expo-status-bar'
import { Divider } from 'react-native-paper'
import React,{useState} from 'react'
import { StyleSheet, Text, SafeAreaView, TouchableOpacity,Button, ScrollView,Pressable, Alert } from 'react-native'
// import { ReminderContainer } from '../../component/Reminder.container'
import ReminderCard from '../../component/ReminderCard'
import OverlayDisplay from './Modal/ModalScreen'
import { overlayVisibility } from '../../redux/Application/Applications.actions'
import { useDispatch,useSelector } from 'react-redux'
import { Header } from 'react-native-elements'
import { addReminder } from '../../redux/Reminder/Reminder.actions'
// import { ClassicHeader } from "@freakycoder/react-native-header-view";

const DailyReminders = () => {

    const isOverlayVisible = useSelector(state => state.app.isOverlayVisible)
    const dailyReminders = useSelector(state => state.reminder.daily)
    // const [overlayVisibility, setoverlayVisibility] = useState(false)
    const dispatch = useDispatch()
    const handlePress = () =>{
        console.log("Handling Press")  
        Alert.alert("Message",`overlayVisibility  = ${isOverlayVisible}`)
            dispatch(overlayVisibility(true));
        // return(
        //         isOverlayVisibile?(<OverlayDisplay isVisible={true}/>):null
        // )
    }
    return (
        <SafeAreaView style={{flex:1}}>
            <OverlayDisplay isVisible={overlayVisibility}/>
            {/* <ClassicHeader
                headerTitle="Header"
                leftComponent={
                    <TouchableOpacity onPress={() => {}}>
                        <Icon name="ios-arrow-back" type="Ionicons" size={30} color="blue" />
                    </TouchableOpacity>
                }
                rightComponent={
                    <TouchableOpacity onPress={() => {}}>
                        <Icon name="github" type="AntDesign" size={30} color="purple" />
                    </TouchableOpacity>
                }
            />; */}
            {/* <Header
  leftComponent={{ color: '#fff', iconStyle: { color: '#fff' } }}
  centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
  rightComponent={{ color: '#fff' }}
/> */}
           
            <ScrollView showsVerticalScrollIndicator={false} style = {{flex:1}}>
            {/* <ReminderContainer/> */}
            <Pressable style={{width:"70%",justifyContent:"center",alignSelf:"center",alignItems:"center",paddingVertical:20,borderRadius:20,backgroundColor:"green"}} onPress={handlePress}>
                <Text style={{fontSize:20,color:"red"}} onPress={()=>console.log("Clicked new")}>ADD REMINDER</Text>
            </Pressable>
            <Divider/>
            {dailyReminders.map(reminder => 
                    <ReminderCard props = {reminder} key = {reminder.key}/>)}
            <Pressable style={{alignItems:"center",paddingVertical:20}} >
                <Text style={{fontSize:20,color:"red"}}>REMOVE ALL REMINDERS</Text>
            </Pressable>
            </ScrollView>
           
           <Divider/><Divider/><Divider/>
        </SafeAreaView>
    )
}

export default DailyReminders

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    reminder_add_btn:{
        borderRadius:25,
        width:"70%",
        color:"grey",
        alignContent:'center',
        justifyContent:"center"
    }
})
