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
export default class Reinserção extends Component<Props> {

  render() {
    return (
      
      <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.parag}>Ao criar oportunidades para uma pessoa integrar-se novamente ao seu convívio social e profissional estamos proporcionando ações para melhoria de sua autoestima,
                    valorização da vida, evitando ociosidade e reduzindo novas possibilidades de uso.A reinserção social e profissional acontece por meio de um trabalho interdisciplinar e educativo,
                    trabalhando-se a capacidade de superação do ser humano por meio de sua força de vontade, reflexão sobre suas vivências e contribuindo na construção de novos caminhos e busca da felicidade.</Text>
        
        <View style={styles.boxImg}>
          <Image style={styles.img} source={require('../images/n_escolhas.png')} />
        </View>
        <Text style={styles.title}>Novas Escolhas</Text>
        <Text style={styles.paragI}>Oferta de cursos profissionalizantes gratuitos para pessoas com problemas relacionados ao uso de drogas. Além da qualificação profissional, realiza-se durante a formação abordagem dos temas como auto-conhecimento, comunicação eficaz, relações interpessoais e empreendedorismo, além da realização de dinâmicas com os alunos.</Text>
        <Text style={styles.parag}>Contatos: (85)3238 5734 / 3101 6900</Text>
        <View style={styles.boxImg}>
          <Image style={styles.img} source={require('../images/p_passo.png')} />
        </View>
        <Text style={styles.title}>Parceria com o Programa Primeiro Passo da STSD</Text>
        <Text style={styles.paragI}>Proporcionar qualificação social e profissional a adolescentes e jovens através de programação de atividades que visam, além da formação técnica, desenvolver a capacidade de relacionamento dos jovens com eles mesmos, com a família, a sociedade, bem como a criação de competências.</Text>
        <Text style={styles.paragI}>Público-alvo: jovens entre 16 e 22 anos</Text>
        <Text style={styles.parag}>Contatos: (85)3238 5734 / 3101 6900</Text>
        <View style={styles.boxImg}>
          <Image style={styles.img2} source={require('../images/c_oportunidades.png')} />
        </View>
        <Text style={styles.title}>Parceria com o Programa Criando Oportunidades da STSD</Text>
        <Text style={styles.paragI}>Desenvolver formação profissional e ações de qualificação social e profissional, bem como estratégias que possibilitem a inclusão social e produtiva das pessoas em vulnerabilidade social.</Text>
        <Text style={styles.paragI}>Faixa etária: adultos</Text>
        <Text style={styles.parag}>Contatos: (85)3238 5734 / 3101 6900</Text>
      </ScrollView>
      </View>
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
    marginLeft:-25,
    alignItems: 'center',
    justifyContent:'center',
   

  },
  img: {
    
    
    borderRadius:5,
    borderWidth: 2.5,
    borderColor: '#ddd',
  },
  img2: {
    
    
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
