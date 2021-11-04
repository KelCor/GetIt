import React from "react";
import { View, Text, FlatList, StyleSheet, Image, Dimensions, TouchableOpacity } from "react-native";
import { Entypo, MaterialCommunityIcons, AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';
import COLORS from '../consts/colors'

export default function Home(params) {
  const navigation = params.navigation;
  const GridItems = [
    {
      id: 1,
      title: 'Bike',
      image: require('../assets/images/bike.jpg'),
      price: 350,
    },
    {
      id: 2,
      title: 'Bench Press',
      image: require('../assets/images/strength-gym-equipment-500x500.jpg'),
      price: 500,
    },
    {
      id: 3,
      title: 'Treadmill',
      image: require('../assets/images/treadmill.jpg'),
      price: 1000,
    },
    {
      id: 4,
      title: 'Skipping rope',
      image: require('../assets/images/rope.jpg'),
      price: 25,
    },
    {
      id: 5,
      title: 'Punching bag',
      image: require('../assets/images/bag.jpeg'),
      price: 500,
    },
    {
      id: 6,
      title: '36KG Dumbbells',
      image: require('../assets/images/bells.jpg'),
      price: 800,
    },
  ];

  const renderGridthings = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('')}>
        <View style = {styles.productlist} >
        <View style={{alignItems:'flex-end'}}>
          <View 
            style={{
              width:30, 
              height:30,
              borderRadius:15,
              alignItems: 'center',
              justifyContent:'center',
              backgroundColor: item.like ? 'rgba(245,42,42,0.2)' : 'rgba(0,0,0,0.2)',}}>
            <MaterialIcons name="favorite" size={18}  color={item.like ? COLORS.red : COLORS.dark} />
          </View>
        </View>
        <View style = {{height:100, alignItems: 'center'}}>
          <Image style ={{flex: 1, resizeMode: 'contain'}} source={item.image} />
        </View> 
        <Text style={{fontWeight: 'bold', fontSize: 17, marginTop: 10}}>{item.title}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 5}}>
          <Text style = {{fontSize: 19, fontWeight: 'bold'}}>${item.price}</Text>
          <View style={{height: 25, width: 25, backgroundColor: 'black', borderRadius: 10, justifyContent: 'center', alignItems: 'center'}}>
            <Text style = {{fontSize: 22, color: COLORS.white, fontWeight: 'bold'}}>+</Text>
          </View>
        </View>
      </View> 
      </TouchableOpacity>        
    );
  };
    return (
    <View style = 
    {{backgroundColor: 'white', 
      flex: 1, paddingTop: 55, 
      paddingHorizontal: 20}}
    >
        <View style = {{flexDirection: 'row', justifyContent: 'space-between' ,alignItems: 'center'}}>
            <Entypo name="menu" size={24} color="black" />
            <MaterialCommunityIcons name="dumbbell" size={24} color="black" /> 
            <View style = {{flexDirection: 'row'}}>
              <AntDesign name="search1" size={24} color="black" />
              <Ionicons name="notifications" size={24} color="black" />
            </View>
        </View>
        <View>
          <Text style = {{color: 'grey', paddingTop: 10 }}>The World's <Text style ={{color:'orange', fontWeight: 'bold', fontSize: 18}}>Best Gym Equipment</Text> </Text>
        </View>
        <View>
          <Text style={{fontWeight: 'bold', paddingTop: 10, paddingBottom: 10}}>Categories</Text>
          <View>
              <FlatList 
              data={GridItems}
              renderItem={renderGridthings}
              keyExtractor={item => item.id}
              numColumns={2}
              columnWrapperStyle={{justifyContent: 'space-between'}}
              showsVerticalScrollIndicator={false}
              contentContainerStyle ={{
                marginTop: 10,
                paddingBottom: 50,
              }}
              />
          </View>
        </View>  
    </View>
    );
}

const styles = StyleSheet.create({
    optionContainer: {
      flexDirection:"row",
      marginTop: 30,
      marginBottom: 20,
      justifyContent: 'space-between'
    },
    productlist:{
      height: 225,
      backgroundColor: COLORS.light,
      width: Dimensions.get('window').width/2 - 30,
      marginHorizontal:2,
      borderRadius: 10,
      marginBottom: 20, 
      padding: 20,
    }
})