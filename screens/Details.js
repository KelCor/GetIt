import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import COLORS from '../consts/colors'

const Details= ({navigation,route}) => {
    const item = route.params;
    return(
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <View style={styles.header}>
                <Ionicons name="arrow-back" size={28} color="black" onPress = {() => {navigation.goBack();}} />
                {/* Navigate to shopping cart screen */}
                <View>
                <View style={{
                    position: 'absolute', height:30, width:30,
                    borderRadius: 15, backgroundColor: 'rgba(0,0,0,0.2)', right: 15, bottom: 15, alignItems: 'center', justifyContent: 'center', zIndex: 2000
                }}>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>0</Text>
                </View>
                
                    <MaterialIcons name="add-shopping-cart" size={28} color="black" onPress = {() => {navigation.navigate("Cart");}} />
                </View>
            </View>
            <View style={styles.imageContainer}>
                <Image source={item.image} style={{resizeMode: "contain", flex:1}}/>
            </View>
            <View style={styles.detailsContainer}>
                <View style={{marginLeft: 20, flexDirection: 'row', alignItems: 'flex-end',
            }}>
                    <View style={styles.line} />
                    <Text style={{fontSize:18, fontWeight: 'bold'}}>
                        Best Choice
                    </Text>
                    
                </View>
                <View style={{marginLeft:20, marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Text style={{fontSize: 22,      fontWeight: 'bold'}}>{item.title}</Text>
                        <View style={styles.priceTag}>
                            <Text style={{marginLeft:15, color: COLORS.white, fontWeight: 'bold', fontSize: 16,}}>
                                ${item.price}
                            </Text>
                        </View>
                </View>
                <View style={{paddingHorizontal: 20, marginTop: 10}}>
                    <Text style = {{fontSize:20,fontWeight: 'bold'}}>About</Text>
                    <Text style={{color: "grey",fontSize:16, lineHeight: 22, marginTop: 20}}>{item.about}
                    </Text>
                    <View style={{marginTop: 20, flexDirection: 'row', justifyContent: 'center',}}>
                        <TouchableOpacity onPress = {() => {navigation.navigate("Cart");}}>
                            <View style = {styles.cartadd}>
                                <Text style = {{fontSize:20, marginHorizontal: 10, fontWeight: 'bold', color: 'white'}}> Add to Cart </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>  
    );

};

const styles = StyleSheet.create({
    header:{
        paddingHorizontal: 20,
        marginTop: 20, 
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imageContainer:{
        flex: 0.45,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    detailsContainer:{
        flex: 0.55,
        backgroundColor: COLORS.light,
        marginHorizontal: 7,
        marginBottom: 7,
        borderRadius: 20,
        marginTop: 30,
        paddingTop: 30,
    },
    line:{
        width: 25,
        height: 2,
        backgroundColor: COLORS.dark,
        marginBottom: 5,
        marginRight: 3,
    },
    priceTag:{
        backgroundColor: COLORS.dark,
        width: 80,
        height: 40,
        borderTopLeftRadius: 25, 
        borderBottomLeftRadius: 25,
        justifyContent: 'center',
    },
    Btnborder:{
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5,
        height: 40,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textbtn:{
        fontWeight: 'bold', 
        fontSize: 28,
    },
    buybtn:{
        width:150,
        height: 50,
        backgroundColor: COLORS.dark,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
    cartadd:{
        width: 200,
        height: 50,
        backgroundColor: COLORS.dark,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    }
})

export default Details;