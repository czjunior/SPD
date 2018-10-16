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
export default class CIPOD extends Component<Props> {
  state = {
    data: [
      {id:'', cont: '01 - Secretaria Especial de Política sobre Drogas - SPD ' },
      {id:'', cont: '02 - Secretaria de Saúde - SESA' },
      {id:'', cont: '03 - Secretaria de Segurança Pública e Defesa Social - SSPDS' },
      {id:'', cont: '04 - Secretaria do Trabalho e Desenvolvimento Social' },
      {id:'', cont: '05 - Secretaria da Educação – SEDUC' },
      {id:'', cont: '06 - Secretaria do Esporte - SESPORT' },
      {id:'', cont: '07 - Secretaria da Cultura - SECULT' },
      {id:'', cont: '08 - Secretaria da Justiça e Cidadania - SEJUS' },
      {id:'', cont: '09 - Coordenadoria Especial de Políticas Públicas da Chefia de Gabinete do Governador' },
      {id:'', cont: '10 - Assembleia Legislativa do Estado do Ceará' },
      {id:'', cont: '11 - Polícia Federal' },
      {id:'', cont: '12 - Ministério Público Estadual' },
      {id:'', cont: '13 - Ordem dos Advogados do Brasil - OAB' },
      {id:'', cont: '14 - Conselho Regional de Medicina do Ceará - CREMEC' },
      {id:'', cont: '15 - Conselho Regional de Farmácia - CRF/CE' },
      {id:'', cont: '16 - Conselho Regional de Psicologia - CRP11' },
      {id:'', cont: '17 - Conselho Regional de Serviço Social - CRESS' },
      {id:'', cont: '18 - Conselho Regional de Enfermagem - COREN' },
      {id:'', cont: '19 - Organização Não Governamental - ONG (Titular: Associação dos Moradores do Bairro Henrique Jorge / Suplente: Comunidade Terapêutica Grão de Mostarda)' },
      {id:'', cont: '20 - Associação dos Municípios e Prefeitos do Estado do Ceará -APRECE' },
      {id:'', cont: '21 - Conselho das Secretarias Municipais de Saúde do Estado do Ceará - COSEMS' },
      {id:'', cont: '22 - Federação das Indústrias do Estado do ceará - FIEC' },
      {id:'', cont: '23 - Entidade Religiosa (Titular: Conferência Nacional dos Bispos do Brasil – CNBB / Suplente: Igreja Batista Central - Celebrando Restauração)' },
      {id:'', cont: '24 - Secretaria da Ciência, Tecnologia e Educação Superior do estado do Ceará - SECITECE (Titular: Neyla Moreira de Meneses / Suplente: Mônica Simioni)' },
      {id:'', cont: '25 - Representantes dos Conselhos Municipais de Políticas sobre Drogas - COMPOD (COMPOD de Horizonte)' },
      {id:'', cont: '26 - Entidade Estudantil Titular: Francisco Cláudio Nunes da Rocha (Titular: Associação dos Estudantes de Fortaleza – ASESF / Suplente: União dos Estudantes Secundaristas da Região Metropolitana de Fortaleza - UESM)' },
    ]
  }
  render() {
    return (
      <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.boxImg}>
          <Image style={styles.img} source={require('../images/cipod.png')} />
        </View>
        <Text style={styles.title}>CONSELHO INTERINSTITUCIONAL DE POLÍTICAS SOBRE DROGAS - CIPOD</Text>
        <Text style={styles.parag}>Ao Conselho Interinstitucional de Políticas Públicas sobre Drogas – CIPOD, órgão de caráter normativo, consultivo e de deliberação coletiva, vinculado à Secretaria Especial de Políticas sobre Drogas, compete:</Text>
        <Text style={styles.paragI}>I – propor a política estadual sobre álcool e outras drogas,</Text>
			  <Text style={styles.paragI}>II – sugerir planos de atuação, exercendo orientação normativa sobre as atividades de prevenção, acolhimento, tratamento e reinserção social e profissional das pessoas que fazem uso problemático de álcool e outras drogas;</Text>
			  <Text style={styles.paragI}>III – Fiscalizar as atividades relacionadas ao acolhimento de pessoas com problemas associados ao uso nocivo ou dependência de substâncias psicoativas;</Text>
        <Text style={styles.paragI}>IV – Monitorar as atividades relacionadas com o tratamento de pessoas com problemas associados ao uso nocivo ou dependência de substâncias psicoativas;</Text>
        <Text style={styles.paragI}>V – Apurar denúncias remetidas ao Conselho, procedendo as investigações necessárias, apresentando parecer conclusivo e providenciar os devidos encaminhamentos, em cada caso;</Text>
        <Text style={styles.paragI}>VI – Exercer outras funções compatíveis com seus objetivos</Text>
        <Text style={styles.parag}>O Conselho Interinstitucional de Políticas Públicas sobre Drogas – CIPOD, é um órgão de caráter normativo, consultivo e de deliberação coletiva. Ele é composto por representantes governamentais e não governamentais. As entidades e órgãos participantes possuem um representante titular e um suplente.</Text>
        <Text style={styles.title}>Órgãos e Entidades que fazem parte do CIPOD:</Text>
        <FlatList
            data={this.state.data}
            keyExtractor={item => item.id}
            numColumns={1}
            renderItem={({ item }) => {
              return (
               
                      <View style={styles.btnBox}>
                        <Text style={styles.paragI}>{item.cont}</Text>
                      </View> 
                
              );
            }}
        />
        <Text style={styles.title}>Reuniões ordinárias:</Text>
        <Text style={styles.paragI}>Toda 2° quarta-feira do mês as 9h no Auditório da SPD</Text>
        <Text style={styles.title}>Contatos:(85)3238 5482/3101 2662</Text>
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
    height:130,
    width:140,
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
   fontWeight: 'normal',
 },
 paragI: 
 {
   marginBottom: 1,
   fontSize: 12,
   color: '#000',
 },
 
});
