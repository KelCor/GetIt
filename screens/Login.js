import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import{AntDesign} from '@expo/vector-icons';
import COLORS from '../consts/colors'

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
        <View style ={{padding: 10}}>
            <Text>Username or Email</Text>
            <TextInput style ={styles.input}
            icon="mail"
            placeholder="Enter username or email address"/>
            <Text>Password</Text>
            <TextInput style ={styles.input}
            secureTextEntry={true}
            placeholder="Enter password"/>
        </View>
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
        <TouchableOpacity>
        <Text style = {{margin: 10, fontWeight:'500', color: "grey"}}>Not a member? 
        <Text style ={{color: 'orange', fontWeight: 'bold'}}>Sign up</Text>
        </Text> 
        </TouchableOpacity>
    </View>
    );
};

const styles = StyleSheet.create({
    input:{
        width: 300,
        height: 50,
        backgroundColor: "#e3e3e3",
        borderRadius: 30,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }
})