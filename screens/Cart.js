import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Cart =() => {
    return (
        <View style={{backgroundColor: 'white', 
        flex: 1, paddingTop: 55, 
        paddingHorizontal: 20}}>
            <View>
                <Text style ={{fontWeight: 'bold', fontSize: 25,}}>Shopping Cart</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

})

export default Cart;