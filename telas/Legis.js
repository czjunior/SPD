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
export default class Legislação extends Component<Props> {
  state = {
    data: [
      {id: '01', nome:'Resolução CONAD nº 01/2015', cont:'Regulamenta, no âmbito do Sistema Nacional de Políticas Públicas sobre Drogas (SISNAD), as entidades que realizam o acolhimento de pessoas, em caráter voluntário, com problemas associados ao uso nocivo ou dependência de substância psicoativa, caracterizadas como comunidades terapêuticas.'},
      {id: '02', nome:'Decreto nº 7.179, de 20 de maio de 2010', cont:'Institui o Plano Integrado de Enfrentamento ao Crack e outras Drogas, cria o seu Comitê Gestor, e dá outras providências.'},
      {id: '03', nome:'Lei nº 11.754, de 23 de julho de 2008.', cont:'Acresce, altera e revoga dispositivos da Lei nº 10.683, de 28 de maio de 2003, cria a Secretaria de Assuntos Estratégicos da Presidência da República, cria cargos em comissão; revoga dispositivos das Leis nos 10.869, de 13 de maio de 2004, e 11.204, de 5 de dezembro de 2005; e dá outras providências'},
      {id: '04', nome:'Decreto nº 6.489, de 19 de junho de 2008.', cont:'Regulamenta a Lei nº 11.705, de 19 de junho de 2008, no ponto em que restringe a comercialização de bebidas alcoólicas em rodovias federais.'},
      {id: '05', nome:'Decreto nº 6.488, de 19 de junho de 2008', cont:'Regulamenta os arts. 276 e 306 da Lei nº 9.503, de 23 de setembro de 1997 - Código de Trânsito Brasileiro, disciplinando a margem de tolerância de álcool no sangue e a equivalência entre os distintos testes de alcoolemia para efeitos de crime de trânsito'},
      {id: '06', nome:'Lei nº 11.705, de 19 junho de 2008.', cont:'Altera a Lei nº 9.503, de 23 de setembro de 1997, que ‘institui o Código de Trânsito Brasileiro’, e a Lei nº 9.294, de 15 de julho de 1996, que dispõe sobre as restrições ao uso e à propaganda de produtos fumígeros, bebidas alcoólicas, medicamentos, terapias e defensivos agrícolas, nos termos do § 4º do art. 220 da Constituição Federal, para inibir o consumo de bebida alcoólica por condutor de veículo automotor, e dá outras providências.'},
      {id: '07', nome:'Decreto nº 6.117, de 22 de maio de 2007.', cont:'Aprova a Política Nacional sobre o Álcool, dispõe sobre as medidas para redução do uso indevido de álcool e sua associação com a violência e criminalidade, e dá outras providências.'},
      {id: '08', nome:'Decretonº 5.912, de 27 de setembro de 2006.', cont:'Regulamenta a Lei nº 11.343, de 23 de agosto de 2006, que trata das políticas públicas sobre drogas e da instituição do Sistema Nacional de Políticas Públicas sobre Drogas - SISNAD, e dá outras providências.'},
      {id: '09', nome:'Leinº 11.343, de 23 de agosto de 2006', cont:'Institui o Sistema Nacional de Políticas Públicas sobre Drogas - Sisnad; prescreve medidas para prevenção do uso indevido, atenção e reinserção social de usuários e dependentes de drogas; estabelece normas para repressão à produção não autorizada e ao tráfico ilícito de drogas; define crimes e dá outras providências.'},
      {id: '10', nome:'Resolução nº 03/GSIPR/CH/CONAD, de 27 deoutubro de 2005', cont:'Aprova a Política Nacional sobre Drogas.'},
      {id: '11', nome:'Lei nº 9.099, de 26 de setembro de 1995.', cont:'Dispõe sobre os Juizados Especiais Cíveis e Criminais e dá outras providências.'},

    ]
  };
  state2 = {
    data2: [
      {id: '', nome:'Decreto nº 32.448, de 13 de dezembro de 2017 (DOE 15/12/17)', cont:'Dispõe sobre a nomeação dos membros do Conselho Interinstitucional de Políticas Públicas sobre Drogas – CIPOD, conforme determinação do §1º do Art.5º da Lei Nº14.217/2008.'},
      {id: '', nome:'Lei nº 16.435, de 05 de dezembro de 2017 (06/12/17)', cont:'Dispõe sobre a inclusão da disciplina prevenção do uso de drogas ilícitas como conteúdo na grade curricular das escolas públicas mantidas pelo Governo do Estado do Ceará.'},
      {id: '', nome:'Lei nº 16.352, de 26 de setembro de 2017 (DOE 28/09/17)', cont:'Institui a Campanha Estadual de Combate às Drogas nas escolas públicas e privadas do Estado do Ceará.'},
      {id: '', nome:'Lei nº 16.329, de 13 de setembro de 2017 (DOE 19/09/17)', cont:'Institui a “Política de informação e prevenção sobre o uso de álcool e drogas" nas faculdades e universidades públicas e privadas do Estado do Ceará.'},
      {id: '', nome:'Lei complementar nº151, de 27 de julho de 2015 (DOE 30/07/15)', cont:'Altera dispositivos da lei complementar nº 139, de 12 de junho de 2014, que institui o fundo estadual de políticas sobre álcool e outras drogas – fepad e altera dispositivos da lei nº 14.217 de 3 de outubro de 2008.'},
      {id: '', nome:'Lei nº 15.773, de 10 de março de 2015(DOE 10/03/15) “Criação da SPD”', cont:'Altera a Lei Nº 13.875, de 07 de fevereiro de 2007'},
      {id: '', nome:'Lei nº15.424, de 16 de setembro de 2013 (DOE 26.09.13)', cont:'Altera dispositivos da Lei Nº 14.217 de 03 de outubro de 2008'},
      {id: '', nome:'Lei nº 14.962, de 13 de julho de 2011 (DOE 19/07/11)', cont:'Dispõe sobre a obrigatoriedade da divulgação de informações contra o uso de drogas nos eventos que especifica e dá outras providências.'},
      {id: '', nome:'Lei nº 14.422, de 29 de julho de 2009 (DOE 12/08/09)', cont:'Reconhece como de relevante interesse para a segurança pública no Estado do Ceará, o Programa Educacional de Resistência às Drogas e a Violência - PROERD, desenvolvido pela Polícia Militar do Ceará.'},
      {id: '', nome:'Lei nº 14.325 de 20 de abril de 2009 (DOE 23/04/09)', cont:'Dispõe sobre a afixação de cartazes, placas ou faixas em todos os órgãos e entidades da Administração Pública Estadual, alertando sobre os danos causados pelo uso de fumo, bebidas alcoólicas e drogas.'},
      {id: '', nome:'Lei nº 14.141 de 16 de junho de 2008 (DOE 30/06/08)', cont:'Dispõe sobre a obrigatoriedade de todas as escolas públicas, no âmbito do Estado do Ceará, afixarem nas suas dependências cartazes alertando sobre os danos causados pelo uso de fumo, bebidas alcoólicas e drogas.'},
      {id: '', nome:'Lei nº 14.217, de 03 de outubro de 2008 (DOE 08/10/08)', cont:'Institui o Sistema Estadual de Políticas Públicas sobre Drogas – SISED e o Conselho Estadual de Políticas Públicas sobre Drogas e dá outras providências'},
      {id: '', nome:'Lei nº 13.967, de 04 de setembro de 2007 (DOE 28/09/07)', cont:'Institui o Dia Estadual do Programa Educacional de Resistência às Drogas e à Violência - PROERD.'},
      {id: '', nome:'Lei nº 13.029, de 29 de junho de 2000 (DOE 30/06/00)', cont:'Dispõe sobre a Proibição de Utilização de Estampas que Induzam ao Uso de Drogas.'},
      {id: '', nome:'Lei nº 12.736 02 de outubro de 1997 (DOE 21/10/97)', cont:'Dispõe sobre a publicação de mensagens periódicas de esclarecimentos sobre uso indevido de drogas.'},
      {id: '', nome:'Lei nº 12.721, de 12 de setembro de 1997 (DOE 30/09/97)', cont:'Institui a Semana de Prevenção ao Uso de Drogas no âmbito do Estado do Ceará.'},
      {id: '', nome:'Lei nº 12.191, de 11 de outubro de 1993 (DOE 25/10/93)', cont:'Dispõe sobre a criação de Comissões Escolares de Prevenção às Drogas nas Escolas Estaduais no Ceará.'},
      {id: '', nome:'Lei nº 11.911 de 27 de janeiro de 1992 (DOE 29/01/92)', cont:'Torna obrigatório a destinação de Leitos dos Hospitais Estaduais e conveniados para o internamento de dependentes de drogas e dá outras providências.'},
      
    ]
  };
  render() {
    return (
      <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.boxImg}>
          <Image style={styles.img} source={require('../images/leifederal.png')} />
        </View>
        <Text style={[styles.title, {marginBottom:10}]}>Legislação Federal</Text>
        <FlatList
            data={this.state.data}
            keyExtractor={item => item.id}
            numColumns={1}
            renderItem={({ item }) => {
              return (
               
                      <View style={styles.btnBox}>
                        <Text style={[styles.title, {marginBottom:5}]}>{item.nome}</Text>
                        <Text style={styles.paragI}>{item.cont}</Text>
                      </View> 
                
              );
            }}
        />
        <View style={styles.boxImg}>
        <Image style={styles.img} source={require('../images/leiestadual.png')} />
        </View>
        <Text style={[styles.title, {marginBottom:10}]}>Legislação ESTADUAL</Text>
        <FlatList
            data={this.state2.data2}
            keyExtractor={item => item.id}
            numColumns={1}
            renderItem={({ item }) => {
              return (
               
                      <View style={styles.btnBox}>
                        <Text style={[styles.title, {marginBottom:5}]}>{item.nome}</Text>
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
    height:130,
    width:140,
    borderRadius:5,
    borderWidth: 2.5,
    borderColor: '#ddd',
    alignItems: 'center',
    justifyContent:'center',
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
   marginBottom: 15,
   fontSize: 12,

 },
 paragI: 
 {
   marginBottom: 1,
   fontSize: 12,
   color: '#000',
 },
});
