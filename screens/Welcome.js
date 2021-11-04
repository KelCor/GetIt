import React from "react";
import {View, Text, Image, StyleSheet, StatusBar, TouchableOpacity} from "react-native";
import COLORS from '../consts/colors'

export default function Welcome (params){
  const navigation = params.navigation;
  return(
    <View style={{flex: 1, backgroundColor: 'white'}}>
        <StatusBar backgroundColor={COLORS.white}/>
        {/* The welcome page image */}
        <Image style ={styles.image} source={{uri: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z3ltfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}/>
        {/* The text underneath the image */}
        <View style={{paddingHorizontal:20, paddingTop: 20}}>
          <View>
          <Text style = {styles.textStyle}>Find your best</Text>
          <Text style = {styles.textStyle}>workout equipment</Text>
          </View>
          <View style={{marginTop: 10}}>
            <Text style = {styles.lowerText}>Get the best gym equipment</Text>
            <Text style = {styles.lowerText}>at the most affordable prices. GetIt!</Text>
          </View>
        </View>
        {/* The button that navigates to the Login Page */}
        <View style={{flex: 1, justifyContent: 'flex-end', paddingBottom: 40}}>
          <TouchableOpacity 
            onPress = {() => {navigation.navigate("Login");}}
          >
            <View style={styles.btn}>
              <Text style={{color: 'white'}}>Let's GetIt!</Text>
            </View>
          </TouchableOpacity>
        </View>        
    </View>
  );
}

const styles = StyleSheet.create({
   image:{
    height: 500,
    width: '100%',
    borderBottomLeftRadius: 100,
  },
  textStyle:{
    fontSize: 32,
    fontWeight: 'bold',
  },
  lowerText:{
    fontSize: 16,
    color: COLORS.grey,
  },
  btn:{
    height: 60,
    marginHorizontal: 20,
    backgroundColor: COLORS.dark,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  }
});