import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import{AntDesign} from '@expo/vector-icons';

export default function Login(params) {
    const navigation = params.navigation;
    return (
    <View
     style = {{
         flex:1, 
         justifyContent: "center", 
         backgroundColor: "white" ,
         alignItems: "center",}}>
        <Image 
        style = {{
            transform: [{rotate: '45deg'}],
            borderRadius: 20,
            marginBottom: 40,
            width: 200,
            height: 200,
        }}
        source = {{
            uri: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
            }}
        />
        <Text style = {{color: 'grey', fontSize: 24}}>Are you ready to</Text>
        <Text style = {{color: 'black', fontSize: 30, fontWeight: 'bold', paddingBottom: 30}}>GO HARD OR GO HOME?</Text>
        <TouchableOpacity
        onPress = {() => {navigation.navigate("Home");}}
        activeOpacity = {0.5} 
        style = 
        {{
            backgroundColor:"#e3e3e3", 
            padding: 10, 
            paddingHorizontal: 30, 
            marginTop: 10,
            borderRadius: 30,
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 15
        }}>
            <AntDesign name="google" size={24} color="black" />
            <Text style ={{fontSize: 15, marginLeft: 10}}>
                Login with Gmail
            </Text>
        </TouchableOpacity>
        <TouchableOpacity 
        activeOpacity = {0.5}
        style = 
        {{
            backgroundColor:"black", 
            padding: 10, 
            paddingHorizontal: 30, 
            marginTop: 10,
            borderRadius: 30,
            flexDirection: 'row',
            alignItems: 'center',
        }}
        >
            <AntDesign name="apple1" size={24} color="white" />
            <Text style ={{fontSize: 15, color: "white", marginLeft: 10}}>
                Login with Apple
            </Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style = {{margin: 10, fontWeight:'500', color: "grey"}}>Not a member? 
        <Text style ={{color: 'orange', fontWeight: 'bold'}}>Sign up</Text>
        </Text> 
        </TouchableOpacity>
    </View>
    );
}