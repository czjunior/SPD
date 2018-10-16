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
export default class Acolhimento extends Component<Props> {

  render() {
    return (
      <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.boxImg}>
          <Image style={styles.img} source={require('../images/c_vida.png')} />
        </View>
        <Text style={styles.title}>Corre pra Vida</Text>
        <Text style={styles.paragI}>Visa beneficiar a população de rua ou em outros contextos de vulnerabilidade social, buscando resgatar a cidadania, reduzir os danos causados pelo uso de drogas, promover direitos e a inserção nas diversas políticas públicas.</Text>
        <Text style={styles.paragI}>Suas ações são desenvolvidas através de: um ponto de acolhimento (contêiner) que disponibiliza sanitário e banho, além da oferta de insumos de higiene e saúde, bem como espaço de escuta e orientação para os usuários; ações de campo, com a utilização de uma unidade móvel, com abordagens nas ruas e em cenas de uso de drogas e o repasse de orientações sobre a redução de danos; e ainda, encaminhamentos e acompanhamentos de usuários para a rede de atenção, conforme as demandas identificadas pela equipe multidisciplinar.</Text>
        <Text style={styles.parag}>Contatos: (85)3238 5734 / 3101 6900</Text>
        <View style={styles.boxImg}>
          <Image style={styles.img2} source={require('../images/crd.png')} />
        </View>
        <Text style={styles.title}>Centro de Referência sobre Drogas</Text>
        <Text style={styles.paragI}>Responsável pela realização e acompanhamento de ações voltadas às políticas sobre drogas de forma integrada nos 184 municípios cearenses com estratégias de prevenção, acolhimento e reinserção social, atenção aos usuários e familiares, capacitação de atores e colaboradores das políticas sobre drogas no Estado. Ele contribui para um melhor acesso à informação sobre as políticas sobre drogas, proporcionando escuta qualificada, orientação, capacitação, inclusão social, grupos de apoio e ajuda mútua, fomento e espaços para estudos e pesquisas, entre outras.</Text>
        <Text style={styles.paragI}>Funcionamento: segunda a sexta-feira em horário comercial e por livre demanda (não há necessidade de agendamento para atendimento).</Text>
        <Text style={styles.parag}>Contatos: 0800 275 1475 / (85) 3101 6901</Text>
        
        <Text style={styles.title}>CRD Fortaleza</Text>
        <Text style={styles.paragI}>Presta atendimento às demandas dos municípios da região metropolitana de Fortaleza e de outros municípios, conforme a necessidade.</Text>
        <Text style={styles.paragI}>Endereço: Rua Oto de Alencar, 193 – Jacarecanga</Text>
        <Text style={styles.parag}>Fortaleza – CE</Text>

        <Text style={styles.title}>CRD Juazeiro do Norte</Text>
        <Text style={styles.paragI}> Presta atendimento às demandas dos municípios das 20ª e 21ª Coordenadoria Regional de Saúde (CRES).</Text>
        <Text style={styles.paragI}>Municípios 20ª CRES: Altaneira, Antonina do Norte, Araripe, Assaré, Campos Sales, Crato, Farias Brito, Nova Olinda, Potengi, Salitre, Santana do Cariri, Tarrafas.</Text>
        <Text style={styles.paragI}>Municípios 21ª CRES: Barbalha, Caririaçu, Granjeiro, Jardim, Juazeiro do Norte,Missão Velha.</Text>
        <Text style={styles.paragI}>Endereço:Centro Multifuncional do Cariri</Text>
        <Text style={styles.paragI}>Rua Interventor Francisco Erivano Cruz, s/n – Centro.</Text>
        <Text style={styles.parag}>Juazeiro do Norte – CE</Text>

        	<View style={styles.boxImg}>
          <Image style={styles.img3} source={require('../images/t_atendimento.png')} />
        </View>
        <Text style={styles.title}>Teleatendimento - 0800 275 1475.</Text>
        <Text style={styles.parag}>Serviço gratuito de fácil acesso à população cearense para obter informações/orientações com profissional especializado referente às políticas sobre drogas.</Text>
        
        <View style={styles.boxImg}>
          <Image style={styles.img3} source={require('../images/u_movel.png')} />
        </View>
        <Text style={styles.title}>Unidade Móvel</Text>
        <Text style={styles.paragI}> A Unidade Móvel possui dois consultórios equipados e climatizados, tendo como objetivo levar os serviços oferecidos pelos profissionais do CRD a todos os municípios do Estado.</Text>
        <Text style={styles.parag}> Assim, ao se deslocar para determinado município, este realiza uma mobilização para que tenha demanda de atendimentos nos consultórios da UM, bem como articula a relação de palestras para profissionais e estudantes quanto a problemática das drogas.</Text>

        	<View style={styles.boxImg}>
          <Image style={styles.img4} source={require('../images/sisacolhe.png')} />
        </View>
        <Text style={styles.title}>Sistema Acolhe Ceará (SISACOLHE)</Text>
        <Text style={styles.paragI}> O Sistema Acolhe Ceará caracteriza-se como sistema de cadastro e acompanhamento dos registros do Centro de Referência sobre Drogas, bem como regulação de vagas para comunidades terapêuticas. Através dele também ocorre a estratégia de monitoramento e avaliação do acolhimento e cuidado de pessoas encaminhadas pela Rede de Atenção Psicossocial (Raps) que passam por problemas relacionados ao uso de drogas. </Text>
        <Text style={styles.paragI}>As comunidades terapêuticas oferecem cuidado para adultos e adolescentes com necessidades decorrentes do uso de álcool, crack e outras drogas no Ceará. As vagas são contratadas pelo governo do Estado, através da SPD; e pela Secretaria Nacional de Políticas sobre Drogas (Senad).</Text>
        <Text style={styles.paragI}>Atualmente, são disponibilizadas 513 vagas para acolhimento voluntário em CTs. Todas são custeadas com recursos públicos. Assim, não há custo algum para o acolhido. A autorização para o acolhimento é condicionada a avaliação prévia por parte de profissional da Raps.</Text>
        <Text style={styles.parag}>Contatos: (85)3101 6900</Text>
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
    borderRadius: 10,
    margin:15,
  },
  btnBox:{
    width:200,
    fontSize: 12,
    color: '#000',
    justifyContent: 'center',
  },
  img: {
    width:120,
    
    borderRadius:4,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  img2: {
    width:226,
    height:80,
    borderRadius:4,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  img3: {
    width:150,
    height:100,
    borderRadius:4,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  img4: {
    width:215,
    height:80,
    borderRadius:4,
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
