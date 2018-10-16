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
export default class COMPOD extends Component<Props> {
  state = {
    data : [
      {id:'00', cont:'Acaraú'},
      {id:'01', cont:'Irauçuba'},
      {id:'02', cont:'Acopiara'},
      {id:'03', cont:'Itaiçaba'},
      {id:'04', cont:'Altaneira'},
      {id:'05', cont:'Itapajé'},
      {id:'06', cont:'Apuiarés'},
      {id:'07', cont:'Itapipoca'},
      {id:'08', cont:'Aquiraz'},
      {id:'09', cont:'Itapiúna'},
      {id:'10', cont:'Aracati'},
      {id:'11', cont:'Itatira'},
      {id:'12', cont:'Aracoiaba'},
      {id:'13', cont:'Jaguaretama'},
      {id:'14', cont:'Ararendá'},
      {id:'15', cont:'Jaguaribe'},
      {id:'16', cont:'Araripe'},
      {id:'17', cont:'Jaguaruana'},
      {id:'18', cont:'Aratuba'},
      {id:'19', cont:'Jardim'},
      {id:'20', cont:'Arneiroz'},
      {id:'21', cont:'Jijoca de Jericoacoara'},
      {id:'22', cont:'Juazeiro do Norte'},
      {id:'23', cont:'Barbalha'},
      {id:'24', cont:'Jucás'},
      {id:'25', cont:'Barreira'},
      {id:'26', cont:'Limoeiro do Norte'},
      {id:'27', cont:'Barroquinha'},
      {id:'28', cont:'Maracanaú'},
      {id:'29', cont:'Baturité'},
      {id:'30', cont:'Maranguape'},
      {id:'31', cont:'Beberibe'},
      {id:'32', cont:'Marco'},
      {id:'33', cont:'Bela Cruz'},
      {id:'34', cont:'Meruoca'},
      {id:'35', cont:'Boa Viagen'},
      {id:'36', cont:'Miraíma'},
      {id:'37', cont:'Brejo Santo'},
      {id:'38', cont:'Missão Velha'},
      {id:'39', cont:'Camocim'},
      {id:'40', cont:'Monsenhor Tabosa'},
      {id:'41', cont:'Campos Salves'},
      {id:'42', cont:'Nova Russas'},
      {id:'43', cont:'Canindé'},
      {id:'44', cont:'Orós'},
      {id:'45', cont:'Pacajus'},
      {id:'46', cont:'Cariús'},
      {id:'47', cont:'Pacatuba'},
      {id:'48', cont:'Cascavel'},
      {id:'49', cont:'Pedra Branca'},
      {id:'50', cont:'Caucaia'},
      {id:'51', cont:'Penaforte'},
      {id:'52', cont:'Cedro'},
      {id:'53', cont:'Pereiro'},
      {id:'54', cont:'Chorozinho'},
      {id:'55', cont:'Pindoretama'},
      {id:'56', cont:'Coreaú'},
      {id:'57', cont:'Poranga'},
      {id:'58', cont:'Crateús'},
      {id:'59', cont:'Quiterianóplois'},
      {id:'60', cont:'Crato'},
      {id:'61', cont:'Quixeramobim'},
      {id:'62', cont:'Croatá'},
      {id:'63', cont:'Quixeré'},
      {id:'64', cont:'Cruz'},
      {id:'65', cont:'Russas'},
      {id:'66', cont:'Eusébio'},
      {id:'67', cont:'Saboeiro'},
      {id:'68', cont:'Farias BRito'},
      {id:'69', cont:'Salitre'},
      {id:'70', cont:'Forquilha'},
      {id:'71', cont:'Santana do Acaraú'},
      {id:'72', cont:'Fortaleza'},
      {id:'73', cont:'São Gonçalo do Amarante'},
      {id:'74', cont:'Fortim'},
      {id:'75', cont:'Santa Quitéria'},
      {id:'76', cont:'Frecheirinha'},
      {id:'77', cont:'São Luis do Curu'},
      {id:'78', cont:'General Sampaio'},
      {id:'79', cont:'Sobral'},
      {id:'80', cont:'Granja'},
      {id:'81', cont:'Tabuleiro do Norte'},
      {id:'82', cont:'Guaiúba'},
      {id:'83', cont:'Tamboril'},
      {id:'84', cont:'Guaraciaba do Norte'},
      {id:'85', cont:'Tauá'},
      {id:'86', cont:'Hidrolândia'},
      {id:'87', cont:'Tianguá'},
      {id:'88', cont:'Horizonte'},
      {id:'89', cont:'Trairi'},
      {id:'90', cont:'Icapuí'},
      {id:'91', cont:'Várzea Alegre'},
      {id:'92', cont:'Iguatu'},
      {id:'93', cont:'Viçosa do Ceará'},
      {id:'94', cont:'Ipaporanga'},
      {id:'95', cont:'Ipueiras'},
      {id:'96', cont:''},


    ]};
  render() {
    return (
      <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.boxImg}>
          <Image style={styles.img} source={require('../images/compod.png')} />
        </View>
        <Text style={styles.title}>CONSELHO MUNICIPAL DE POLÍTICAS SOBRE DROGAS - COMPOD</Text>
        <Text style={styles.paragI}>O Conselho Municipal de Políticas Sobre Drogas – COMPOD é um órgão consultivo, normativo, de deliberação coletiva e de natureza paritária. Atua como instância de assessoramento do governo local, coordenando atividades e desenvolvendo ações referentes às políticas sobre drogas, fortalecendo iniciativas de promoção à vida e de prevenção ao uso de drogas lícitas e ilícitas. Os COMPODs realizam reuniões periódicas e articulam-se com políticas afins para articular e fortalecer ações nos eixos de prevenção, acolhimento/tratamento e reinserção social e profissional previstos no Plano Municipal de Políticas sobre Drogas dos respectivos municípios onde atuam.</Text>
        <Text style={styles.paragI}> Diante deste contexto, para colocar este compromisso em movimento, SPD tem realizado uma ampla articulação com os municípios cearenses buscando a discussão de ações iniciais e orientações legais para o processo de criação dos conselhos, com participação de gestores, profissionais da área e afins, sociedade civil organizada e comunidade.</Text>
        <Text style={styles.parag}>Conforme levantamento técnico, já contamos hoje no Ceará com 98 conselhos instituídos formalmente e diante da ampla articulação realizada pela SPD, muitos municípios ao formarem seus COMPODs, têm buscado junto à SPD parceria para orientações de ações quanto ao plano de trabalho, papel do conselheiro e informações atualizadas quanto as políticas sobre drogas.</Text>
        <Text style={styles.parag}>Municípios com COMPODs formados:</Text>
        <FlatList
            data={this.state.data}
            keyExtractor={item => item.id}
            numColumns={2}
            renderItem={({ item }) => {
              return (
               
                      <View style={styles.btnBox}>
                        <Text style={styles.paragI}>{item.cont}</Text>
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
    flex: 1,
    padding: 25,
    justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#f5f6fa',
  },
  boxImg: {
    marginTop: 15,
    marginBottom: 15,
    
    justifyContent:'center',
    alignItems: 'center',
    

  },
  btnBox:{
    width:200,
    fontSize: 12,
    color: '#000',
  },
  img: {
    
    
    borderRadius:4,
    borderWidth: 2.5,
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
