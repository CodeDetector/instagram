import React from "react";
import { View, StyleSheet,Image,ImageBackground } from "react-native";
import { DrawerItem, DrawerContentScrollView } from "@react-navigation/drawer";
import {  Avatar,  Title,  Caption,Drawer } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { auth } from "../firebase/firebase";
// import { useNavigation } from "@react-navigation/native";


export function DrawerContent({navigation,...props}) {

    // const navigation = useNavigation();
  return (
     
    <DrawerContentScrollView {...props} contentContainerStyle={{paddingTop:0,marginTop:0}}>
    
      <View style={styles.drawerContent}>
      <ImageBackground style={styles.image}>
        <View style={styles.userInfoSection}>
          <Avatar.Image
            source={{
              uri:
                `${auth.currentUser.photoURL}`,
            }}
            size={75}
          />
          <Title style={styles.title}>{auth.currentUser.displayName}</Title>
          <Caption style={styles.caption}>@dhruvs</Caption>
      
        </View>
        </ImageBackground>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="home-outline"
                color={color}
                size={size}
              />
            )}
            label="Home"
            onPress={() => navigation.navigate('home')}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons name="bookmark-outline" color={color} size={size} />
            )}
            label="WishList"
            // onPress={() => {}}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="cart-outline"
                color={color}
                size={size}
              />
            )}
            label="Cart"
            // onPress={() => {}}
          />
           <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="tune"
                color={color}
                size={size}
              />
            )}
            label="Preferences"
            // onPress={() => {}}
          />
        </Drawer.Section>
        <Drawer.Section title="Account">
        <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="account-outline"
                color={color}
                size={size}
              />
            )}
            label="Profile"
            // onPress={() => {}}
          />
                <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="logout"
                color={color}
                size={size}
              />
            )}
            label="LogOut"
            // onPress={() => {}}
          />
         
        </Drawer.Section>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  userInfoSection: {
      margin:0,
      paddingTop:80,
    paddingLeft: 20,
    alignItems:'center'
   
  },
  title: {
    color:'black',
    fontWeight: "bold",
  },
  caption: {
    color:'#fff',
    fontSize: 14,
    lineHeight: 14,
    paddingBottom:20,
  },
  row: {
   
    marginBottom:10,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});