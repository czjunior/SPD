/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { FlatList, Platform, StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground} from 'react-native';
import  {createStackNavigator} from 'react-navigation';
import  Home from './telas/Home';
import  SPD from './telas/SPD';
import Legis from './telas/Legis';
import ATJ from './telas/ATJ';
import Rein from './telas/Rein';
import Acolh from './telas/Acolh';
import Prev from './telas/Prev';
import CIPOD from './telas/CIPOD';
import COMPOD from './telas/COMPOD';
import Grupos from './telas/Grupos';
import SnW from './telas/SnW';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (

      <AppStacknavigator />
 
    );
  }
}

const AppStacknavigator = createStackNavigator({
  Home:{
  screen:Home,
  navigationOptions: {
      header: null
  }  
  },
  SPD: {
    screen:SPD,

    navigationOptions: {
      headerTitle: "SPD",
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
  } 
  },
  Legis: {
    screen:Legis,

    navigationOptions: {
      headerTitle: "Legislação",
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
  } 
  },
  ATJ: {
    screen:ATJ,

    navigationOptions: {
      headerTitle: "Aqui Tem Ajuda",
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
  } 
  },
  Rein:  {
    screen:Rein,

    navigationOptions: {
      headerTitle: "Reinserção",
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
  } 
  },
  Acolh:  {
    screen:Acolh,

    navigationOptions: {
      headerTitle: "Acolhimento",
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
  } 
  },
  Prev:  {
    screen:Prev,

    navigationOptions: {
      headerTitle: "Prevenção",
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
  } 
  },
  CIPOD:  {
    screen:CIPOD,

    navigationOptions: {
      headerTitle: "CIPOD",
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
  } 
  },
  COMPOD:  {
    screen:COMPOD,

    navigationOptions: {
      headerTitle: "COMPOD",
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
  } 
  },
  Grupos:  {
    screen:Grupos,

    navigationOptions: {
      headerTitle: "Grupos",
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
  } 
  },
  SnW:  {
    screen:SnW,

    navigationOptions: {
      headerTitle: "SPD na Web",
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
  } 
  },
  
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
    },
});


