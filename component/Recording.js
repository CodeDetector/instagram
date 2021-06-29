import * as React from 'react';
import { SafeAreaView, StyleSheet,Button,View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Audio } from 'expo-av';
import { addRecording } from '../redux/Application/Applications.actions';
import { useNavigation } from '@react-navigation/native';
import Playback from './Playback';
import { Overlay } from 'react-native-elements';
import { setStatusBarHidden } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Recording() {
  const [recording, setRecording] = React.useState();
  const [ Sound,setSound] = React.useState();
  const [uri,setUri] = React.useState()
  // const navigation = useNavigation();
  const dispatch = useDispatch()

  async function startRecording() {
    try {
      console.log('Requesting permissions..');
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      }); 
      console.log('Starting recording..');
      const recording = new Audio.Recording();
      await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
      await recording.startAsync(); 
      setRecording(recording);
      console.log('Recording started');
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }
  async function playSound() {
    console.log('Loading Sound');
    
    const { sound } = await Audio.Sound.createAsync(
        {
            uri:uri
        }
    );
      console.log("Sound is " ,sound)
    setSound(sound);
    // }catch(error){
    //   console.log(error)
    // }

    console.log('Playing Sound');

    try {
      await sound.playAsync();
    } catch (error) {
      console.log(error)
    }
    // .then(sound.unloadAsync())
    // .then(console.log("playback unloaded"))
    // .catch((error)=>{
    //   console.log(error)
    // })
  }

  async function stopRecording() {
    // console.log('Stopping recording..');
    // setRecording(undefined);
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI(); 
    setUri(uri);
    setRecording(null);
    dispatch(addRecording(uri))

    console.log('Recording stopped and stored at', uri);

  }
  
  return (
  //   <Overlay visible = {isVisible}>
  //           <Button
  //               title={recording ? 'Stop Recording' : 'Start Recording'}
  //               onPress={recording ? stopRecording : startRecording}
  //           />
  //           <Button
  //           title = " Play Recent recording"
  //           onPress = {playSound}
  //           />
  // </Overlay>
  <View style = {{flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
    <Icon size ={24} name="mic" color="red" onPress={()=>startRecording()}/>
    <Icon size={24} name = "stop-circle-outline" color = "green" onPress = { stopRecording}  />
    <Icon size = {24} name = "play" color="green" onPress = {playSound}/>
  </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  }
})
