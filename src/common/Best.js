import React from 'react';
import { Text, ImageBackground} from 'react-native';

export default class Best extends React.Component{
    render(){
        return(
           <ImageBackground
           source={require('../images/lr.png')}
           style={{
               height:130,
               width:230,
               marginRight:20,
               borderRadius:10,
               marginBottom:40,
               opacity:0.7,
               backgroundColor:"#000",
               marginLeft:3,
               padding:12,
               marginTop:20
           }}
           >
               <Text style={{
                   fontFamily:"Bold",
                   color:"#FFF",
                   fontSize:15
               }}>Zara Furniture World</Text>
               <Text style={{
                   fontFamily:"Bold",
                   color:"#FFF",
                   fontSize:12
               }}>Get 25% OFF</Text>
           </ImageBackground>
        )
    }
}