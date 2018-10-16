/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { FlatList, Platform, StyleSheet, Text, View, TouchableOpacity, Image, Linking } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class SPDNaWEB extends Component<Props> {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container2}>
        <TouchableOpacity onPress={ ()=>{ Linking.openURL('http://www.facebook.com/spdceara')}}>
        <View style={styles.boxImg}>
          <Image style={styles.img} source={require('../images/face3.png')} />
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={ ()=>{ Linking.openURL('http://www.instagram.com/spdceara')}}>
        <View style={styles.boxImg}>
          <Image style={styles.img} source={require('../images/insta2.png')} />
        </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={ ()=>{ Linking.openURL('http://www.spd.ce.gov.br')}}>
        <View style={styles.boxImg}>
          <Image style={styles.img} source={require('../images/net.png')} />
        </View>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Visite-nos nas redes socias e em nossa página na internet.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#f5f6fa',
  },
  container2: {
    alignItems: 'center',
    justifyContent:'center',
    flexDirection:'row',
  },
  boxImg: {
    marginTop: 10,
    marginBottom: 5,
    marginRight:10,
    alignItems: 'center',
    justifyContent:'center',
    

  },
  img: {
    height:100,
    width:100,
    borderRadius:10,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  img2: {
    height:110,
    width:85,
    borderRadius:5,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  Text: {
    fontSize: 55,
    marginBottom: 4,
    fontWeight: '700',
    textAlign: 'center',
    margin: 10,
    color: '#e58e26',
  },
  title: 
  {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#000',
    textAlign: 'left',
  },
 parag: 
 {
   marginBottom: 10,
   fontSize: 12,
   color: '#000',
   fontWeight: 'normal',
 },
 paragI: 
 {
   marginBottom: 1,
   fontSize: 12,
   color: '#000',
 },
 
});
