import { Card, CardTitle, CardContent, CardAction, CardButton,CardImage} from 'react-native-material-cards'
import React, { useState } from 'react'
import { StyleSheet, Text, View ,Pressable} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import PlaySound from './Playback';


const ReminderCard = ({props,key}) => {
    const {date,time,message,audioAddr} = props;
    console.log("Date is :",audioAddr)
    const [ audioPlaying , setAudioPlay] = useState(false)
    const isAudioMessage = audioAddr?true:false;

    const handleAudioPlay = async() =>{
        setAudioPlay(false);
        // alert(audioAddr)
        await PlaySound(audioAddr).catch(error=>console.log(error))
        return;
    }
    return (
        <View style = {styles.container}>  
            <Card key={key}>
                {/* <CardImage
                    source = { require("../assets/icon.png")}
                /> */}
                <CardTitle 
                    title={`${date.reminderDate}`}
                    subtitle={`${time.reminderTime}`}
                />
                <CardContent text={message} />
                <CardAction 
                    separator={true} 
                    inColumn={false}>
                        <CardButton
                        // onPress={() => {}}
                        title="Delete"
                        color="red"
                        />
                        <CardButton
                        
                        // onPress={() => {}}
                        title="edit"
                        color="blue"
                        />
                        {isAudioMessage?
                        (<Pressable>
                            {audioPlaying?<Icon size={24} color="red" name="pause-outline" onPress={()=>handleAudioPlay()}/>:
                            <Icon size={24} color="green" name="play-outline" onPress={()=>setAudioPlay(true)} />}
                        </Pressable>):null}
                </CardAction>
            </Card>
        </View>
    )
}

export default ReminderCard

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        flexGrow:100
        // height:"10%"
    }
})
