import React from 'react';
import {View,Image,Text} from 'react-native';

export default class New extends React.Component{
    render(){
        return(
           <View style={{
               flexDirection:"row",
               height:60,
               width:240,
               backgroundColor:"#fff",
               elevation:2,
               padding:6,
               marginVertical:5,
               marginRight:20,
               marginLeft:2,
               borderRadius:10
           }}> 
           <View>
               <Image
                source={this.props.src}
                style={{
                    height:50,
                    width:60,
                    borderRadius:10
                }}
               />
           </View>

           <View style={{
               width:"65%",
               justifyContent:"flex-end",
               paddingHorizontal:10,
               height:"100%"
           }}>
               <Text style={{
                   fontSize:8,
                   fontFamily:"Medium",

               }}>
                   Slakal sleeves short dress with three attractive colors
               </Text>
               <Text style={{
                   fontSize:11,
                   fontFamily:"Bold",
               }}>
                   454.69
               </Text>

           </View>
           <View style={{
               width:"5%",
               justifyContent:"flex-end",
               height:"100%"
           }}>
               <Image
                source={require('../images/add.png')}
                style={{
                    height:17,
                    width:17
                }}
               />
           </View>

           </View>
        )
    }
}