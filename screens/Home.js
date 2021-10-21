import React from "react";
import { View, Text, FlatList } from "react-native";
import { Entypo, MaterialCommunityIcons, AntDesign, Ionicons } from '@expo/vector-icons';

export default function Home(params) {
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
        <Text style={{fontWeight: 'bold', paddingTop: 10, paddingBottom: 10}}>Categories</Text>
    </View>
    );
}