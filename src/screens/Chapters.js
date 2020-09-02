import React from 'react'
import {View,Text,Image,TouchableOpacity} from 'react-native'
import ProgressCircle from 'react-native-progress-circle'

export default class Chapters extends React.Component{
    render(){
        const {title,num, duration, percent, color, onPress} = this.props
        return(
           <TouchableOpacity
                onPress={onPress}
                style={{
                    flexDirection:"row",
                    padding:20,
                    marginHorizontal:20,
                    borderRadius:20,
                    alignItems:"center",
                }}
           >
               <View style={{
                   backgroundColor:color,
                   paddingVertical:5,
                   paddingHorizontal:10,
                   borderRadius:6
               }}>
                   <Text style={{
                       fontSize:10,
                       fontFamily:"Bold"
                   }}>{num}</Text>
               </View>
               <View>
                   <Text style={{
                       color:"#345c74",
                       fontFamily:"Bold",
                       fontSize:13,
                       paddingLeft:20,
                       width:180
                   }}>
                       {title}
                   </Text>
                   <Text style={{
                       color:"#f58084",
                       fontSize:12,
                       fontFamily:"Medium",
                       paddingLeft:20
                   }}>
                       {duration}
                   </Text>
               </View>
               <Text style={{
                   color:"#345c74",
                   fontFamily:"Medium",
                   fontSize:13,
                   width:50
               }}>
                   {percent}%
               </Text>

               <ProgressCircle
                    percent={percent}
                    radius={17}
                    borderWidth={1.5}
                    color="#f58084"
                    shadowColor="#FFF"
                    bgColor="#fff2f2"
               >
                   <Image
                        source={require('../images/pl.png')}
                   />
               </ProgressCircle>
           </TouchableOpacity>
        )
    }
}