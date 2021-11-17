import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import COLORS from '../consts/colors'
const Cart =() => {
    return (
        <View style={{backgroundColor: 'white', 
        flex: 1, paddingTop: 55, 
        paddingHorizontal: 20}}>
            <View>
                <Text style ={{fontWeight: 'bold', fontSize: 25,}}>Shopping Cart</Text>
            </View>
            <TouchableOpacity
          style={{
            //padding: 10,
            height: 110,
            width: 340,
            //paddingRight: 25,
            //marginTop: 2,
            marginBottom: 10,
            alignItems: "center",
            borderRadius: 5,
            flexDirection: "row",
            // borderColor: "#000099",
            borderWidth: 1,
            borderColor: "#e0e0e0",
          }}
        >
          <Image
          style={{
            //borderRadius: 20,
            //marginBottom: 60,
            width: 90,
            height: 90,
            borderRadius: 5,
            marginLeft: 10,
            borderColor: "#000099",
            borderWidth: 1,
          }}
          source={
            require('../assets/images/bells.jpg')
          }
        />
        <View style={{paddingLeft: 30, }}>
          <Text style = {{color: "#black", fontWeight: "500", fontSize: 16, }}>Dumbbells</Text>
          <Text style = {{color: "black",}}>
            <Text style = {{color: "black", textDecorationLine: 'line-through', textDecorationStyle: 'solid' }}>5% </Text>
            20% off
            </Text>
          <Text style = {{color: "#000099"}}>$800.00</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            //padding: 10,
            height: 110,
            width: 340,
            //paddingRight: 25,
            //marginTop: 2,
            marginBottom: 10,
            alignItems: "center",
            borderRadius: 5,
            flexDirection: "row",
            // borderColor: "#000099",
            borderWidth: 1,
            borderColor: "#e0e0e0",
          }}
        >
          <Image
          style={{
            //borderRadius: 20,
            //marginBottom: 60,
            width: 90,
            height: 90,
            borderRadius: 5,
            marginLeft: 10,
            borderColor: "#000099",
            borderWidth: 1,
          }}
          source={
            require('../assets/images/rope.jpg')
          }
        />
        <View style={{paddingLeft: 30, }}>
          <Text style = {{color: "#black", fontWeight: "500", fontSize: 16, }}>Skipping ropes</Text>
          <Text style = {{color: "black",}}>
            <Text style = {{color: "black", textDecorationLine: 'line-through', textDecorationStyle: 'solid' }}>5% </Text>
            20% off
            </Text>
          <Text style = {{color: "#000099"}}>$25.00</Text>
        </View>
        </TouchableOpacity>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={{fontWeight: 'bold', fontSize: 35,}}>Total:</Text>
                <Text style={{fontSize: 30, paddingRight: 20}}>$825</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

})

export default Cart;