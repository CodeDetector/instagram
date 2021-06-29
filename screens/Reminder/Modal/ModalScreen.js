import React , { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { View,StyleSheet,Image,Text,Pressable } from 'react-native'
import DateTimePickerModal from "react-native-modal-datetime-picker" 
import {addDailyReminder} from '../../../redux/Reminder/Reminder.actions'
import { Overlay,Button } from 'react-native-elements'
import { addRecording, overlayVisibility } from '../../../redux/Application/Applications.actions';
import { TextInput } from 'react-native-paper';
import Calendar from '../../../component/Calender';
// import { ReminderTypeComponent } from '../components/ReminderType.component'
import Icon from 'react-native-vector-icons/Ionicons'
import Recording from '../../../component/Recording';

import { RadioButton } from 'react-native-paper';



const OverlayDisplay = ({navigation}) => {

    const isoverlayVisible  = useSelector(state=>state.app.isOverlayVisible)
    const recordingAddr = useSelector(state => state.app.recordingAddr)

    const [isDatePickerVisible,setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible,setTimePickerVisibility] = useState(false);
    const [message,setMessage] = useState('');
    const [date, setdate] = useState();
    const [time, settime] = useState();
    const [type, settype] = React.useState('daily');
    // const [audioAddr, setaudioAddr] = useState()
    
    const dispatch = useDispatch(); 

  function makeid(length) {
      var result= '';
      var characters= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * 
   charactersLength));
     }
     return result;
  }
  
    const RadioButtonComponent = () => {
      return (
        <RadioButton.Group onValueChange={newValue => settype(newValue)} value={type}>
          <View>
            <Text>Daily Reminder</Text>
            <RadioButton value="daily" />
          </View>
          <View>
            <Text>Once Reminder</Text>
            <RadioButton value="once"/>
          </View>
          <View>
            <Text>Annual Reminder</Text>
            <RadioButton value="annual"/>
          </View>
        </RadioButton.Group>
      );
    }

    const clearState = () =>{
      setDatePickerVisibility(false);
      setTimePickerVisibility(false);
      setMessage('');
      setdate(null);
      settime(null);
    }

    const handleFormsubmit = () => {
      let key = makeid(7);
      let reminder = {date:date,time:time,message:message,type:type,audioAddr:recordingAddr,key:key}
      console.log("New reminder is : ",{...reminder})
      dispatch(addDailyReminder({...reminder}));
      dispatch(overlayVisibility(false))
      dispatch(addRecording(null))
      // navigation.navigate('home')
    }
    const handleClose = ()=>{
      clearState();
      dispatch(overlayVisibility(false));
    }
    const handleConfirm = (prop) =>{
        isDatePickerVisible?setdate({
          manufactureDate:new Date().toLocaleDateString(),
          reminderDate:prop}):settime({
          manufactureTime : new Date().toLocaleTimeString(),
          reminderTime : prop}
            );
        setDatePickerVisibility(false);
        setTimePickerVisibility(false);
        alert(`confirmed date @ ${date}`)
    }

    const hidePicker = () =>
    {
        isDatePickerVisible==true ? setDatePickerVisibility(false):setTimePickerVisibility(false)
    }
    return (
    
      <Overlay style={styles.container} isVisible={isoverlayVisible} fullScreen > 
        <View style={{flexDirection:'row',justifyContent:"space-between",marginBottom:50}}> 
            <Pressable>
                <Text onPress={()=>handleFormsubmit()} style = {{color:"blue"}}>Submit</Text>
            </Pressable>
            <Text style = {{fontSize:20}}>Add a Reminder</Text>
            <Pressable>
              <Text onPress={()=>handleClose()} style = {{color:"blue"}}>Close</Text>
            </Pressable>
        </View>
        <View style= {styles.body}>
            <Pressable style = {styles.btn}>
              <Text style = {{fontSize:18,marginRight:40}} >Select Date </Text>
              <Button title="Select Date" onPress={()=>setDatePickerVisibility(true)}/>
            </Pressable>
            <Pressable style = { styles.btn }>
              <Text style = {{fontSize:18,marginRight:40}}>Select Time</Text>
              <Button title="Select Time " onPress={()=>setTimePickerVisibility(true)}/>
            </Pressable>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hidePicker}
          />
          <DateTimePickerModal
            isVisible={isTimePickerVisible}
            mode="time"
            onConfirm={handleConfirm}
            onCancel={hidePicker}
          />
          <View style = { styles.inputContainer}>
            <TextInput style = {styles.textInput} multiline={true} placeholder ="Attach a message" mode='outlined' label="Message" value={message} onChangeText={text=>setMessage(text)}/>
          </View>
          <RadioButtonComponent/>
          {/* <Pressable style = {{width:"60%",height:"30%",borderRadius:25,backgroundColor:"blue",alignContent:"center",justifyContent
        :"center"}} onPress={Recording(true)}>
            <Text style= {{color:"red",fontSize:20}}>
              Add Audio message
            </Text>
          </Pressable> */}
          <Recording/>
          <Button title="Add event to Calender" onPress={()=>Calendar()}/>
        </View>
        {/* <Pressable><Text onPress = { ()=>Calendar() }> Calender list  </Text></Pressable> */}
      </Overlay>

    );
  };
  
  const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:"center",
      alignItems:"center",
    },
    body:{
      flex:1,
      flexDirection:"column",
      alignItems:"center",
      alignContent:"space-around"
    },
    btn:{
      flexDirection:"row",
    },
    // ButtonGroup : {
    //       alignItems:'center',
    //       justifyContent:"space-around"
    // },
    inputContainer:{
      width:"80%"
    },
    radioGrp:{
      alignItems:"center",
      flexDirection:"row",
      justifyContent:"space-evenly"
    }
  })
  export default OverlayDisplay;