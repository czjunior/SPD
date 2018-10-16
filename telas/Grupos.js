/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { FlatList, Platform, StyleSheet, Text, View, TouchableOpacity, Image, ScrollView} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class Grupos extends Component<Props> {

  state = {
    data:[
      {id:'01', img:require('../images/grupo.png'), title:'Grupo de apoio Recomeço (GAR)',obj:'apoiar pessoas com problemas relacionados ao uso de drogas (usuário ou egresso de acolhimento/cuidado) por meio de escuta, orientações, troca de experiências, interatividade, voltando-se à perspectiva de valores (saúde, família, sociabilidade, motivação) para uma melhor qualidade de vida.', pubA:' pessoas passando por problemas relacionados ao uso de drogas ou que passaram por acolhimento/cuidado', data:'Toda quinta-feira', hor:'14:30 às 15:30h', local:'Auditório da SPD (Rua Oto de Alencar, 193 – Jacarecanga – Fortaleza/CE)', info:'3101 6903 / 0800 2751475'},
      {id:'02', img:require('../images/geppod.png'), title:'Grupo de Estudos e Pesquisas de Políticas sobre Drogas (GEPPoD)',obj:'realizar troca de experiências, refletir e desenvolver estudos a respeito das políticas sobre drogas, com ênfase na prevenção, acolhimento, cuidado e reinserção social/profissional de pessoas com problemas relacionados ao uso de drogas.', pubA:'estudantes e profissionais de diversas áreas com interesse em estudos voltados às políticas sobre drogas', data:'Toda 2ª e 4ª sexta-feira do mês', hor:'15:00 às 16:00h', local:'Auditório da SPD (Rua Oto de Alencar, 193 – Jacarecanga – Fortaleza/CE)', info:'3101 2662 / 3238 5482 / 0800 2751475'},
      {id:'03', img:"", title:'Grupo de Atenção e Apoio à Família (GAAF)',obj:'apoiar famílias de pessoas com problemas relacionados ao uso de drogas, prestando orientações, proporcionando momentos de interação, de troca de experiências, aprendizagem, buscando o fortalecimento diante dos desafios da vida para uma melhor qualidade de vida.', pubA:'familiares de pessoas com problemas relacionados ao uso de drogas', data:'Toda terça-feira', hor:'14:00 às 15:00h', local:'Auditório da SPD (Rua Oto de Alencar, 193 – Jacarecanga – Fortaleza/CE)', info:'3101 6903 / 0800 2751475'},
    ]
  }
  render() {
    return (
      <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.parag}> Voltados ao desenvolvimento de ações para fortalecer o acolhimento às pessoas com problemas relacionados ao uso de drogas, seus familiares, bem como
                    a profissionais e estudantes que se dedicam à temática.</Text>
              <FlatList
            data={this.state.data}
            keyExtractor={item => item.id}
            numColumns={1}
            renderItem={({ item }) => {
              return (
                <View style={styles.container2}>
              <View style={styles.boxImg}>
                <Image style={styles.img} source={item.img}/>
              </View>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.title}>Objetivo:</Text>
                <Text style={styles.paragI}>{item.obj}</Text>
                <Text style={styles.title}>Público-Alvo:</Text>
                <Text style={styles.paragI}>{item.pubA}</Text>
                <Text style={styles.title}>Data dos encontros:</Text>
                <Text style={styles.paragI}>{item.data}</Text>
                <Text style={styles.title}>Horário:</Text>
                <Text style={styles.paragI}>{item.hor}</Text>
                <Text style={styles.title}>Local:</Text>
                <Text style={styles.paragI}>{item.local}</Text>
                <Text style={styles.title}>Informações:</Text>
                <Text style={styles.parag}>{item.info}</Text>
                </View>
              );
            }}
        />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 25,
    flexDirection: 'column',
    backgroundColor: '#f5f6fa',
  },
  container2: {


    flexDirection: 'column',
    backgroundColor: '#f5f6fa',
  },
  boxImg: {
    
    alignItems: 'center',
    justifyContent: 'center',

    
  },
  btnBox:{
    width:200,
    fontSize: 12,
    color: '#000',
    justifyContent: 'center',
  },
  img: {
  
    height:120,
    width:170,
    borderRadius:4,
    borderWidth: 1.5,
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
