/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { FlatList, Platform, StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image, ScrollView} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class SPD extends Component<Props> {

  render() {
    return (
      <ImageBackground style={ styles.container } 
      
      source={require('../images/wallpaper5.png')}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.boxImg}>
          <Image style={styles.img} source={require('../images/spdfachada.png')} />
        </View>
        
        <Text style={styles.title}>Missão SPD</Text>
        <Text style={styles.parag}>Desenvolver e coordernar as políticas sobre drogas, por meio de ações voltadas ao trabalho nos eixos de prevenção, acolhimento e cuidado, reinserção social e profissional na garantia da promoção dos direitos essenciais à vida do ser humano.</Text>
        <Text style={styles.parag}>A SPD foi criada pela Lei Estadual Nº 15.773, de 10 de março de 2015, sendo até o momento, a única do gênero no Brasil.</Text>
        <Text style={styles.parag}>O desafio de tratar das questões relacionadas aos problemas de uso de drogas no Ceará exige respostas eficazes do Governo e da sociedade, que incluam ações relacionadas à promoção da saúde, de conscientização e informação sobre os riscos do uso de álcool e outras drogas, disponibilização de serviços de atendimento, informações da rede de assistência, estudos e pesquisas.</Text>
        <Text style={styles.title}>Visão SPD</Text>
        <Text style={styles.parag}>Ser um órgão público nas políticas sobre drogas com qualidadde reconhecidamente diferenciada, em âmbito nacional</Text>
        <Text style={styles.title}>Valores SPD</Text>
        <Text style={styles.paragI}>Prevenção a problemas relacionados ao uso de drogas</Text>
        <Text style={styles.paragI}>Acolhimento</Text>
        <Text style={styles.paragI}>Humanização</Text>
        <Text style={styles.paragI}>Escuta qualificada</Text>
        <Text style={styles.paragI}>Reinserção social e profissional</Text>
        <Text style={styles.paragI}>Educação continuada</Text>
        <Text style={styles.paragI}>Ética nas relações</Text>
        <Text style={styles.paragI}>Respeito ao indivíduo</Text>
        <Text style={styles.title}>Atribuições SPD</Text>
        <Text style={styles.parag}>- Elaborar e implementar a Política Estadual sobre drogas;</Text>
        <Text style={styles.parag}>- Atuar como órgão gestor central articulador do Sistema Estadual de Políticas Públicas sobre Drogas - SISED;</Text>
        <Text style={styles.parag}>- Promover articulação intersetorial com integração de serviços de diversas áreas, indentificando-se, desa forma, a necessidade de promoção de programas e projetos relacionados ao uso de drogas, por meio de parceria com instituições, visando contribuir para o aperfeiçoamento e efetividade das ações referetes às  Políticas sobre Drogas;</Text>
        <Text style={styles.parag}>- Gerar informações e estudos que subsidiarão à formulação de políticas públicas, norteando o planejamento estratégico bem como o processo de tomada de decisão</Text>
        <Text style={styles.parag}>- Realizar abordagens a pessoas com problemas relacionados ao uso e abuso de substâncias psicoativas, buscando reduzir os danos referentes ao uso, promover os direitos, resgatar a dignidade e a cidadania dessas pessoas e reinseri-las na sociedade;</Text>
        <Text style={styles.parag}>- Estimular a criação e fortalecer os Conselhos Municipais de Políticas sobre Drogas - COMPOD, entendendo que esta é uma estrategia importante para fomentar uma política pública com a participação popular;</Text>
        <Text style={styles.parag}>- Realizar a regulação de vagas em comunidades terapêuticas contratadas pela esfera estadual ou federal;</Text>
        <Text style={styles.parag}>- Padronizar rotinas e procedimentos relativos ao acesso, acompanhamento e controle de vagas em comunidades terapêuticas ;</Text>
        <Text style={styles.parag}>- Monitorar e avaliar programas, projetos e ações sobre drogas desenvolvidos pela SPD;</Text>
        <Text style={styles.parag}>- Oferecer formação permanente sobre drogas a pessoas que atuam nas diferentes políticas públicas, organizações sociais e lideranças comunitárias.;</Text>
        <Text style={styles.parag}>- Elaborar pesquisas e estudos relacionados na área de atuação da SPD, podendo ocorrer parceria com a comunidade científica, universidades e demais instituições de ensino e pesquisa, a fim de subsidiar a Política de Drogas no âmbito estadual;</Text>
      </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    flexDirection: 'column',
    backgroundColor: '#f5f6fa',
  },
  boxImg: {
    marginTop: 15,
    marginBottom: 15,
   
    alignItems: 'center',
    justifyContent:'center',
   

  },
  img: {
    height:100,
    width:150,
    borderRadius:5,
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
 },
 paragI: 
 {
   marginBottom: 8,
   fontSize: 12,
   color: '#000',
 },
});
