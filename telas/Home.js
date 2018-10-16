/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { FlatList, Platform, StyleSheet, Text, View, Modal, TouchableOpacity, Image, ScrollView,ImageBackground} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class Home extends Component<Props> {

  state = {
    data : [
      {id: '00', name: 'SPD', tlName: 'SPD'}, 
      {id: '01', name: 'Prevenção', tlName: 'Prev'},
      {id: '02', name: 'Acolhimento', tlName: 'Acolh'},
      {id: '03', name: 'Reinserção', tlName: 'Rein'},
      {id: '04', name: 'CIPOD', tlName: 'CIPOD'},
      {id: '05', name: 'COMPOD', tlName: 'COMPOD'},
      {id: '06', name: 'Grupos', tlName: 'Grupos'},
      {id: '07', name: 'Legislação', tlName: 'Legis'},
      {id: '08', name: 'Aqui Tem Ajuda', tlName: 'ATJ'},
      {id: '09', name: 'SPD na WEB', tlName: 'SnW'},
    ]
  };

  render() {
    return (
      <ImageBackground style={ styles.container } 
      resizeMode='cover' 
      source={require('../images/wallpaper5.png')}>
        <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>

              <View style={styles.boxImg}>
                <Image style={styles.img} source={require('../images/paper2.png')}/>
              </View>
          <Text style={styles.title1}>SPD</Text>
          <Text style={styles.title2 }>Aqui Tem Ajuda</Text>
          <Text style={styles.title3}>0800 275 1475</Text>
        <View style={styles.Box}>
          <FlatList
            data={this.state.data}
            keyExtractor={item => item.id}
            numColumns={2}
            renderItem={({ item }) => {
              return (
               
                    <TouchableOpacity onPress={() =>  this.props.navigation.navigate(item.tlName)}>
                      <View style={styles.btnBox}>
                        <Text style={styles.btnText}>{item.name}</Text>
                      </View> 
                    </TouchableOpacity>
                
              );
            }}
        />
        </View>

       
       </ScrollView>
       </ImageBackground>
  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    padding: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0
  },
  title1: {
    fontSize: 40,
    marginTop: -10,
    fontWeight: '700',
    textAlign: 'center',
    margin: 10,
    color: '#e58e26',
  },
  title2: {
    marginTop: -15,
    fontSize: 30,
    fontWeight: '700',
    textAlign:'center',
    color: '#e58e26',
    marginBottom:10,
  },
  title3: {
    textAlign:"center",
    fontSize: 25,
    fontWeight: '600',
    color: '#1e272e',
    marginBottom: 10,
  }, 
  btnBox: {
    backgroundColor: '#f4511e',
    marginBottom: 10,
    width: 125,
    height: 25,
    borderRadius: 15,
    margin: 2,
    marginRight:10,
    justifyContent: 'center',
    
  },

  Box: {
    justifyContent: 'center',
    alignItems:'center',
    
  
    
  },
  boxImg:{
    
    justifyContent:'center',
    alignItems:'center',

  
    
  },
  cont: {
    justifyContent:'center',
  },
  btnText: {
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'center',
    color: "#FFF",
    
  },
  img: {
    width: 180,
    marginTop:-10,
    marginBottom:15,
    height: 76,
  },
 
});
