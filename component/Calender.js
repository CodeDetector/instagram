import RNCalenderEvents from "react-native-calendar-events"
import React,{useState} from 'react'
import { Alert } from "react-native";


const Calendar = async() =>{

    const [calender, setcalender] = useState([])
    const permission = await RNCalenderEvents.checkPermissions();
    if(permission=="authorized")
    {
        console.log("Permission granted")
        try{
            await RNCalenderEvents.requestPermissions();
            const Calenders = await RNCalenderEvents.findCalendars();
            console.log(Calenders)
            // setcalender(Calendars);
            // RNCalenderEvents.saveCalendar(calender);
        }
        catch(error){
            console.log(error)
        }
    }
    else{
        Alert.alert("Alert",permission)
    }
}

export default Calendar;