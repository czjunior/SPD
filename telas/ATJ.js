/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Slider from 'react-native-slider';
//import Modal from 'react-native-modalbox';
import Modal from "react-native-modal";
import { FlatList, Platform, StyleSheet, ImageBackground, Text, View, TouchableOpacity, TouchableWithoutFeedback, Image, ScrollView, Button, TouchableHighlight} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class ATJ extends Component<Props> {
  constructor() {
    super();
    this.state = {
      vis: null
    };
  }

  render() {
    return (
<ImageBackground style={ styles.container } 
      
      source={require('../images/wallpaper5.png')}>
            <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>AQUI TEM AJUDA</Text>
        <Text style={styles.parag}>A SPD disponibiliza o aplicativo “Posso Ajudar” como mais uma ferramenta para o público
            obter informações referente às políticas sobre drogas, tornando possível o fácil acesso
            a informações sobre as atividades da pasta, bem como sobre toda a RAPS, Rede SUAS e Rede
            de Apoio no Ceará. Estão disponíveis telefones e endereços das órgãos e equipamento em
            cada um dos 184 municípios cearenses.</Text>
            <Text style={styles.parag}>Ao clicar no nome do município cearense você encontrará informações referentes aos equipamentos
            da Rede de Atenção que proporcionam ajuda quanto às políticas sobre drogas, como:Centro de Atenção Psicossocial – CAPS,
            Centro de Referência em Assistência Social – CRAS, CREAS, Conselhos Tutelares, Centro de Referência sobre Drogas – CRD.</Text>
        <TouchableOpacity onPress={() => this.setState({vis:1})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>Fortaleza</Text>
          </View> 
        </TouchableOpacity>
        <Modal  isVisible={this.state.vis === 1} onBackdropPress={() => this.setState({ vis: null })}   
          animationIn="slideInLeft"
          
          backdropOpacity={0.9} >
        
          <ScrollView contentContainerStyle={styles.modal} showsVerticalScrollIndicator={false}>
          <View style={styles.modalContent}>
          
        
          <Text style={styles.paragI2}>CAPS AD SER I: Rua Hildebrando de Melo, 1110, Barra do Ceará – Cep:
                    60330-375 - Fone: (85) 3101-2592</Text>
          <Text style={styles.paragI2}>CAPS AD SER II: Av Duque de Caxias, 1880, Centro – Cep: 60035-111 - Fone: (85) 3105-1625</Text>
          <Text style={styles.paragI2}>CAPS AD SER III: Rua Frei Marcelino, 1191, Rodolfo Teófilo – Cep: 60431-004 - Fone: (85) 3105-3420</Text>
          <Text style={styles.paragI2}>CAPS AD SER IV: Rua Betel, 1826, Itapery, Cep: 60714-230 - Fone: (85) 3105-2006</Text>
          <Text style={styles.paragI2}>CAPS AD SER V: Rua Vigesimo Sexto Batalhao, 292, Maraponga – Cep: 60541-195 - Fone: (85) 3105-1023</Text>
          <Text style={styles.paragI2}>CAPS AD SER VI: Rua Ministro Abner de Vasconcelos, 1500, Seis Bocas – Cep: 60833-155 - Fone: (85) 3273-5226</Text>
          <Text style={styles.paragI2}>CAPS GERAL SER I: Rua Joaquim Lino, 500, Monte Castelo – Cep: 60337-100 - Fone: (85) 3105-1119</Text>
          <Text style={styles.paragI2}>CAPS GERAL SER II: Rua Coronel Alves Teixeira, 1500, Joaquim Távora – Cep: 60130-000 - Fone: (85) 3105-2632</Text>
          <Text style={styles.paragI2}>CAPS GERAL SER III: Rua Francisco Pedro, 1269, Monte Castelo, Cep: 60430-375 - Fone: (85) 3433-2568</Text>
          <Text style={styles.paragI2}>CAPS GERAL SER IV: Av. Borges de Melo, 201, Jardim América – Cep: 60415-510 - Fone: (85) 3131-1690</Text>
          <Text style={styles.paragI2}>CAPS GERAL SER V: Rua Bom Jesus, 940, Bom Jardim – Cep: 60543-362 - Fone:(85) 3245-7956</Text>
          <Text style={styles.paragI2}>CAPS GERAL SER VI: Rua Dionisio Alencar, 06, Messejana – Cep: 60110-110 - Fone:(85) 3488-3312</Text>
          <Text style={styles.paragI2}>CAPS INFANTO/JUVENIL: Rua Jaime Benévolo, 1644, Bairro de Fátima – Cep: 60050-155 - Fone:(85)3105-1510</Text>
          <Text style={styles.paragI2}>CAPS INFANTO/JUVENIL: Rua Delmiro de Farias, 1346, Rodolfo Teófilo – Cep:
                    60430-170 - Fone: (85) 3105-3721</Text>
          <Text style={styles.paragI2}>CRAS BARRA DO CEARÁ SER I: Rua Cândido Castelo Branco, S/N - Fone: (85) 3452-7738</Text>       
          <Text style={styles.paragI2}>CRAS CASTELÃO SER VI: Av. Alberto Craveiro, 1480, Boa Vista - Fone: (85) 3105-2012</Text>
          <Text style={styles.paragI2}>CRAS CONJ. PALMEIRAS SER VI: Rua Iracema, 1860, Conj. Ceará - Cep: 60870-020 - Fone:(85)
                    3105-1526</Text>
          <Text style={styles.paragI2}>CRAS DENDÊ SER VI: Rua Lucas Francisco Antônio, 200, Edson Queiroz - Cep:
                    60812-110 - Fone:(85) 3278-1543</Text>
          <Text style={styles.paragI2}>CRAS JARDIM DAS OLIVEIRAS SER VI: Rua Major Afonso Otacílio de Sousa, 61, Jardim
                    das Oliveiras - Cep: 60820-000 - Fone:(85) 3433-8849</Text>
          <Text style={styles.paragI2}>CRAS JOÃO PAULO II SER VI: Rua 10, Nº 75, João Paulo II - Fone: (85) 3488-3322</Text>
          <Text style={styles.paragI2}>CRAS MESSEJANA SER VI: Av. Recreio, 1390, Lagoa Redonda - Fone: (85) 3105-3711</Text>
          <Text style={styles.paragI2}>CRAS ANTÔNIO BEZERRA SER III: Rua Cândido Maia, 245, Antônio Bezerra - Fone: (85) 3488-3389, (85) 3105-1455</Text>
          <Text style={styles.paragI2}>CRAS ARACAPÉ SER V: Rua N, 515, Parque Monte Negro II - Fone: (85) 3433-5512</Text>
          <Text style={styles.paragI2}>CRAS BELA VISTA SER III: Rua Mário Andrade C/ Viriato Ribeiro, S/N, Bela Vista Fone: (85) 3482-3770</Text>
          <Text style={styles.paragI2}>CRAS BOM JARDIM SER V: Rua Cel João Correia, 2023, Bom Jardim - Fone: (85) 3105-2007</Text>
          <Text style={styles.paragI2}>CRAS CANINDEZINHO SER V: Rua Pitangueiras, 102 - Fone: (85) 3498-3768</Text>
          <Text style={styles.paragI2}>CRAS CONJ. ESPERANÇA SER V: Rua 103, 195, Conj. Esperança - Fone: (85) 3484-8115</Text>
          <Text style={styles.paragI2}>CRAS COUTO FERNANDES IV: Av. João Pessoa, 4474, Damas - Fone: (85) 3452-5740</Text>
          <Text style={styles.paragI2}>CRAS GENIBAÚ SER V: Av. B, 640, 1ª Etapa, Conj. Ceará - Fone: (85) 3105-2211, (85) 3452-2478</Text>
          <Text style={styles.paragI2}>CRAS GRANJA PORTUGAL IV: Rua Humberto Lomeu, 1130, Granja Portugal - Fone: (85) 3105-2228, (85) 3105-2205</Text>
          <Text style={styles.paragI2}>CRAS LAGAMAR SER II: Rua Sabino Monte, 4506, São João do Tauape - Fone: (85) 3452-2442</Text>
          <Text style={styles.paragI2}>CRAS MONDUBIM SER V: Av. Waldir Diogo, 840, Mondubim - Fone:(85) 3105-1008</Text>
          <Text style={styles.paragI2}>CRAS MUCURIPE SER II: Rua Prof. Luís Costa, 142, Mucuripe - Fone(85) 3452-7349</Text>
          <Text style={styles.paragI2}>CRAS PIRAMBU SER I: Rua Gen. Costa Matos, 8, Pirambu - Fone: (85) 3236-2577</Text>
          <Text style={styles.paragI2}>CRAS PIRAMBU SER I: Rua Gen. Costa Matos, 8, Pirambu - Fone:(85) 3236-2577</Text>
          <Text style={styles.paragI2}>CRAS PRESIDENTE KENNEDY SER III: Conj. Castelo Branco, S/N, Quadra F, Presidente Kennedy - Fone: (85) 3481-3001</Text>
          <Text style={styles.paragI2}>CRAS QUINTINO CUNHA SER III: Rua Pio Saraiva, 335, Quintino Cunha - Fone: (85) 3488-8013, (85) 3105-1007</Text>
          <Text style={styles.paragI2}>CRAS SERRINHA SER IV: Rua Inácio Parente, 100, Serrinha - Fone: (85) 3483-6100, (85) 3295-8483</Text>
          <Text style={styles.paragI2}>CRAS SERVILUZ SER II: Av. Zezé Diogo, 1038, Serviluz - Fone: (85) 3105-2691</Text>
          <Text style={styles.paragI2}>CRAS VILA UNIÃO SER IV: Rua Almirante Rufino, 419, Vila União - Fone:(85) 3131-9810, (85) 3131-7710</Text>
          <Text style={styles.paragI2}>CREAS MONTE CASTELO: Rua João Tome , 261, Monte Castelo - Fone:(85) 3131-7670</Text>
          <Text style={styles.paragI2}>CREAS ALVORADA: Rua Crisanto - Fone:(85) 3273-2665</Text>
          <Text style={styles.paragI2}>CREAS CONJUNTO CEARÁ: Avenida B, 461, 2º Etapa, Conjunto Ceará - Fone:(85) 3105-2200 </Text>
          <Text style={styles.paragI2}>CREAS LUCIANO CAVALCANTE: Rua Thompson Bulcão, 853, Luciano Cavalcante - Fone:(85) 3278-6636</Text>
          <Text style={styles.paragI2}>CREAS MUCURIPE: Rua Manoel Jesuíno, 153, Mucuripe - Fone:(85) 3105-2640</Text>
          <Text style={styles.paragI2}>CREAS REGIONAL: Rua Tabelião Fabião, 114, Presidente Kennedy - Fone:(85) 3287-1023 </Text>
          <Text style={styles.paragI2}>CREAS RODOLFO TEÓFILO: Rua Dom Lino, 1001- Rodolfo Teófilo - Fone:(85) 3223-5273</Text>
          <Text style={styles.paragI2}>CONSELHO TUTELAR I: Rua Guilherme Rocha, 1070. Centro - Fone:s(85) 3433-1416 ou (85) 98970-5986</Text>
          <Text style={styles.paragI2}>CONSELHO TUTELAR II: Rua da Paz, 302. Mucuripe - Fone:(85) 3259-2612 ou (85) 98899-6677</Text>
          <Text style={styles.paragI2}>CONSELHO TUTELAR III: Rua Silveira Filho, 935. João XXIII - Fone:(85) 3131-1950 ou (85) 98890-9943</Text>
          <Text style={styles.paragI2}>CONSELHO TUTELAR IV: Rua Padre Ambrósio Machado, 625. Parreão - Fone:(85) 3292-4955 ou (85) 98970-4905</Text>
          <Text style={styles.paragI2}>CONSELHO TUTELAR V: Av. Alanis Maria Laurindo de Oliveira, 461. Conj. Ceará - Fone:(85) 3452-2483 ou (85) 98970-5478</Text>
          <Text style={styles.paragI2}>CONSELHO TUTELAR VI: Rua Pedro Dantas, 334. Dias Macedo - Fone: (85) 3295-5794 ou (85) 98970-5835</Text>
          <Text style={styles.paragI2}>CONSELHO TUTELAR VII: Rua João Thome, 261. Monte Castelo - Fone:(85) 3274-6211 ou (85) 98868-9780</Text>
          <Text style={styles.paragI2}>CONSELHO TUTELAR VIII: Av. Alberto Craveiro, 1500. Boa Vista - Fone:(85) 3433-1423 ou (85) 98706-6221</Text>
          <TouchableOpacity  onPress={() => this.setState({vis:null})}>
            <Text>Fechar </Text>
        </TouchableOpacity>
          
          </View>
          </ScrollView>
        </Modal>
        
        <TouchableOpacity onPress={() => this.setState({vis:2})} >
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>ABAIARA</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 2} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9} >
          <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS SEDE: Rua Joaquim Leite da Cunha, 268, Alto da Alegria - Cep: 63240-000 - (88)3558-1505</Text>
        <Text style={styles.paragI2}>CRAS VILA SÃO JOSÉ: Av. Dr. Júlio Sampaio Sobrinho, 08, Zona Rural - Cep: 63240-000 - (88) 3558-1505</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Av. Coronel Humberto Bezerra, s/n. Centro - (88) 98884-1516</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:3})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>ACARAPE</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 3} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9} >
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS: Rua Chico Vieira, S/N, Centro - Cep: 63785-000 - (88) 3373-1276</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Paulo Evaristo, 228. Centro - (85) 99100-0155</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({ vis: 4})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>ACARAU</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 4} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9} >
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS II: Av. João Jaime, 723. Bairro Rodage - (88) 3661-1001</Text>
        <Text style={styles.paragI2}>CRAS I: Rua Santo Antônio, 1178. Cep: 62580-000 - (88) 3661-4021</Text>
        <Text style={styles.paragI2}>CRAS II: Rua Jose Moreira de Melo, 720, Sitio Buriti- Cep: 62580-000 - (88) 3661-1345</Text>
        <Text style={styles.paragI2}>CREAS: Rua Capitão Diogo Lopes, 346, Centro - (88) 3661-1060</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Santo Antônio, 68 - Centro - (88) 99699-0281</Text>
        </View>
        </Modal>
        


        <TouchableOpacity onPress={() => this.setState({vis: 5})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>ACOPIARA</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 5} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9} >
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS DE ACOPIARA: R. Vicente Carlos Pinheiro, 292 - Centro - (88) 3565-0315</Text>
        <Text style={styles.paragI2}>CRAS I: Av. José de Moraes Pinho, S/N, Vila Esperança - Cep: 63580-000 - (88) 3565-0086, (88) 3565-1283</Text>
        <Text style={styles.paragI2}>CRAS II: Rua Cícera Mandur, 170, Vila Nova - Cep: 63580-000 - (88) 3565-1636</Text>
        <Text style={styles.paragI2}>CRAS III: Av. Francisco Alves Moreira, 768, Vila Moreira - Cep: 63580-000 - (88) 3565-1636</Text>
        <Text style={styles.paragI2}>CREAS: Av. Cazuzinha Marques, 258, Centro - (88) 3565-1548</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Jose Paulino, s/n. Centro - (88) 3565-1615</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:6})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>AIUABA</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 6} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS: Rua Armando Arrais Feitosa, 90, Boa Vista - Cep: 63575-000 - (88) 3524-1124</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Sete de Setembro, 41. Centro - (88) 3565-1615</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:7})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>ALCÂNTARAS</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 7} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS SEDE: Rua Gregório Cunha, S/N - Cep:62.120-000 - (88) 3640-1043</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Joaquim Caetano, s/n. Junco - (88) 3640-1148 ou (88) 99262-0674</Text>
        </View>
        </Modal>
        
        <TouchableOpacity onPress={() => this.setState({vis:8})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>ALTANEIRA</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 8} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS II: Vila São Romão - Distrito de Altaneira - (88) 3548-1391</Text>
        <Text style={styles.paragI2}>CRAS SEDE: Rua João Gonçalves, 614, Centro - Cep: 63195-000 - (88) 3548-1177</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Padre Hagamenon Coelho, 601. Centro - (88) 99344-0599</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:9})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>ALTO SANTO</Text>
          </View>
          </TouchableOpacity>
          <Modal 
        isVisible={this.state.vis === 9} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS: Av. Dr. Edson Guerra, 647, Centro - Cep: 62970-000 - (88) 3429-2428</Text>
        <Text style={styles.paragI2}>CREAS: Av. Dr. Edson Guerra, 647, Centro - Cep: 62970-000 - (88) 3429-2428</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Av. Dr. Edson Guerra, 628. Centro - (88) 99800-2616</Text>
        </View>
        </Modal>
       
        <TouchableOpacity onPress={() => this.setState({vis:10})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>AMONTADA</Text>
          </View> 
        </TouchableOpacity>
        <Modal 
        isVisible={this.state.vis === 10} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS I: Av. Gen Alipio dos Santos, 1101, Centro - (88) 3636-1170</Text>
        <Text style={styles.paragI2}>CRAS: Av. Principal - Sabiaguaba - (88) 3636-9625</Text>
        <Text style={styles.paragI2}>CRAS SEDE: Av. General Sampaio dos Santos, 1418. Centro - Cep:62540-000 - (88) 3636-1625</Text>
        <Text style={styles.paragI2}>CREAS: Av. Gen Alipio dos Santos, 1134, Centro -   (88) 3565-1109</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Av. general Alípio dos Santos, 1041. Centro - (88) 3636-1935 ou (88) 99805-1542</Text>
        </View>
        </Modal>
        <TouchableOpacity onPress={() => this.setState({vis:11})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>ANTONINA DO NORTE</Text>
          </View> 
        </TouchableOpacity>
        <Modal 
        isVisible={this.state.vis === 11} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS CASA DA FAMÍLIA: Rua Ananias de Matos Arrais, 250. SecretariaGregório Cunha, S/N - Cep:62.120-000 - (88) 3640-1043</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Manuel Mota, 207. Centro - (88) 99261-6611 ou (88) 99451-6622</Text>
        </View>
        </Modal>
        <TouchableOpacity onPress={() => this.setState({vis:12})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>APUIARÉS</Text>
          </View> 
        </TouchableOpacity>
        <Modal 
        isVisible={this.state.vis === 12} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS ZONA RURAL: Localidade de Salgado - (88) 3336-1515</Text>
        <Text style={styles.paragI2}>CRASSEDE: Rua José Lopes Filho, 381, Centro - Cep: 62630-000 - (85) 3356-1515</Text>
        <Text style={styles.paragI2}>CREAS: Rua 15 de Agosto 51 , Centro - (85) 3356-1504</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua 15 de Agosto, 43. Centro -(88) 99405-3773</Text>
        </View>
        </Modal>
        <TouchableOpacity onPress={() => this.setState({vis:13})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>AQUIRAZ</Text>
          </View> 
        </TouchableOpacity>
        <Modal 
        isVisible={this.state.vis === 13} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS AD: Estrada do Piau, 1202, Centro - (85) 4062 8090</Text>
        <Text style={styles.paragI2}>CAPS DE AQUIRAZ I: Rua Francisco Porfírio de Castro, SN – Centro. Prox. à SeSa - (85) 3361 2929</Text>
        <Text style={styles.paragI2}>CRAS INDÍGENA (JENIPAPO KANIDÉ) : Estrada Lagoa Encantada, Iguape - Cep: 61700-000 - (85) 4062-9942</Text>
        <Text style={styles.paragI2}>CRAS CAMARÁ: Rua José Amora Moreira, S/N, Telha Camará - Cep: 61700-000 - (85) 4062-9943</Text>
        <Text style={styles.paragI2}>CRAS PRAINHA: Rua das Treze, S/N, Treze - Cep: 61700-000 - (85) 4062-9944</Text>
        <Text style={styles.paragI2}>CRAS SERPA: Rua Rufino Correia Assunção, 70. Justiniano de Serpa - (85) 4062-9945</Text>
        <Text style={styles.paragI2}>CREAS: Av. Santos Dumont, 480, Centro - (85) 3361-1893</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Raimundo Nogueira Martins, 52. Tabajara - (85) 4062-8092</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:14})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>ARACATI</Text>
          </View> 
        </TouchableOpacity>

              <Modal 
        isVisible={this.state.vis === 14} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS AD DE ARACATI: R. Santos Dumont, 588 Aeroporto - Cep: 62800-000 - (88) 3421 1188</Text>
        <Text style={styles.paragI2}>CAPS DE ARACATI II: R. Beni Carvalho, 1928. Nossa Senhora de Lourdes - Cep: 62800-000 - (88) 3421 1796</Text>
        <Text style={styles.paragI2}>CRAS LITORAL: Sítio São Francisco, Comunidade São Chico, Zona Rural - (88) 3446-2459</Text>
        <Text style={styles.paragI2}>CRAS LAGOAS: Rua Nossa Sra. das Graças, 10, Outeiro, Zona Rural - (88) 3446-2459</Text>
        <Text style={styles.paragI2}>CRAS NOSSA SRA. DE FÁTIMA: Rua Tabajara 795, Nossa Sra. de Fátima - Cep: 62800-000 - (88) 3446-2459</Text>
        <Text style={styles.paragI2}>CRAS NOSSA SRA. DE LOURDES: Trav. Alexandre Lima, 142, Nossa Sra. de Fátima - Cep: 62800-000 (88) 3446-2459</Text>
        <Text style={styles.paragI2}>CREAS: Rua Visconde Jaguaribe, 1342, Varzea da Matriz – Cep 62800-000 - (88) 3421-3417</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Duque de Caxias, 41. Centro - (88) 3421-3337 ou (88)99601-9300</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:15})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>ARACOIABA</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 15} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS I: Rua Lídia Brito, SN. Conjunto Solon Lima Verde. -  (85) 3337 1421</Text>
        <Text style={styles.paragI2}>CRAS RURAL: Av. Jaime Nobre, S/N, Distrito do Ideal – Cep: 62700-000 - (85) 3337-5508</Text>
        <Text style={styles.paragI2}>CRAS SEDE: Rua Profª Maria Madalena Matos, S/N, Centro - Cep: 62700-000 - (85) 3337-5508</Text>
        <Text style={styles.paragI2}>CREAS: Rua Francisco Lucas Melo, S/N (Antigo Posto de Saúde) , Centro, próximo à Praça da Vitória - (85) 3337-5508</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Francisco Amaro Bezerra, s/n. Centro - (85) 99945-1997</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:16})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>ARARENDÁ</Text>
          </View> 
        </TouchableOpacity>

                <Modal 
        isVisible={this.state.vis === 16} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS: Rua Francisco Mourão Lima, S/N, Centro – Cep: 62210-000 - (88) 3633-1345</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Francisco Ferraz, 577. Centro - (88) 3633-1039</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:17})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>ARARIPE</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 17} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS I: Av. Viante Alencar Barbosa, SN. - (88) 3530 1610</Text>
        <Text style={styles.paragI2}>CRAS: Rua Antônio Henrique de Lima, S/N. - (88) 3531-1245</Text>
        <Text style={styles.paragI2}>CREAS: Rua Alessandra Arrais, 937, Centro - Cep: 63180-000 - (88) 3530-1433</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Coronel Pedro Silvino, 60. Centro - (88) 3530-1245 ou (88) 99488-6107</Text>
        </View>
        </Modal>

        <TouchableOpacity  onPress={() => this.setState({vis:18})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>ARATUBA</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 18} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS: Rua José Ivan Santos, S/N, Centro - Cep: 62762-000 - (85) 3329-1132</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua José Ruan Santos, s/n. Centro - (85) 99973-0305</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:19})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>ARNEIROZ</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 19} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS: Rua Antônio Loureiro, S/N, Centro - Cep: 63670-000 - (88) 3419-1020</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Monsenhor Odorico de Andrade, 69. Centro - (88) 3419-1313</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:20})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>ASSARÉ</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 20} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS I: R. Padre Agamenon, 156- Centro</Text>
        <Text style={styles.paragI2}>CRAS: Rua Maestro José Roberto, S/N, Centro - Cep: 63140-000 - (88) 3535-1452</Text>
        <Text style={styles.paragI2}>CREAS: Rua Pe. Emílio Cabral, 208, Centro - (88) 3535-1452</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Padre Hagamenon Coelho, 601. Centro - (88) 99344-0599</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:21})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>AURORA</Text>
          </View> 
        </TouchableOpacity>

                <Modal 
        isVisible={this.state.vis === 21} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}></Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:22})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>BAIXIO</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 22} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>

        <Text style={styles.paragI2}>CRAS MARIA LUSTOSA: Av. Francisco Ramalho Sobrinho, S/N, Centro – Cep: 63320-000 - (88) 3539-1221</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua. Coronel Francisco Luiz,08 Centro - (88) 99691-3812 ou (88) 99693-0664</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:23})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>BANABUIÚ</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 23} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>

        <Text style={styles.paragI2}>CRAS ROSALINA: Rua Joaquim Pereira da Silveira, S/N. Rosalina. Cep: 63960-000 - (88) 3426-1147</Text>
        <Text style={styles.paragI2}>CRAS VALE DAS BORBOLETAS: Rua Raul Uquide, S/N, Centro - Cep: 63960-000 - (88) 3426-1147</Text>
        <Text style={styles.paragI2}>CREAS: Av. Queiroz Pessoa, 462, Centro - (88) 3426-1147</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Av Queiroz Pessoa, 462 Centro - (88)99629-4282</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:24})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>BARBALHA</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 24} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>

        <Text style={styles.paragI2}>CAPS AD: Rua Madre Ilduara 693 Alto da Alegria - Cep: 63180-000 - (88) 3532-1275</Text>
        <Text style={styles.paragI2}>CAPS III: Rua Princesa Isabel 155- Centro Centro - Cep: 63180-000 - (88) 3532-1136</Text>
        <Text style={styles.paragI2}>CAPS INFANTO/JUVENIL: Rua Maj. Sampaio, 94 -Centro  - (88) 3532-3887</Text>
        <Text style={styles.paragI2}>CRAS MALVINAS: Rua P, 10, Malvinas - Cep: 63180-000 - (88) 3532-0662</Text>
        <Text style={styles.paragI2}>CRAS SANTO ANTÔNIO: Av. Costa Cavalcante,S/N, Centro - Cep: 63180-000 - (88) 3532-2140</Text>
        <Text style={styles.paragI2}>CREAS: Rua Rua L 01, 90, Cirolandia – Cep: 63180-000 - (88) 3532-1632</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Senador Alencar, 43 Centro - (88)3532-1799</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:25})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>BARREIRA</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 25} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS: Rua Carlos Nemer, 300, Conj. São Pedro - Bom Sucesso - Cep: 62795-000 - (85) 3331-139</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Senhor de Castro, s/n Centro - (85)3331-1634</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:26})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>BARRO</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 26} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS: Rua Justino Alves Feitosa, S/N. Centro - Cep: 63380-000 - (88) 3554-1182</Text>
        <Text style={styles.paragI2}>CREAS: Rua Crisantina Monteiro, S/N, Centro - Cep: 63380-000 - (88) 3554-1158, (88) 3554-1182</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Alaide Feitosa, s/n Centro - (88)3554-1387 ou (88)99777-5080</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:27})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>BARROQUINHA</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 27  } 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS CASA DA FAMÍLIA: Av. Diamantina, S/N, Centro - Cep: 62140-000 - (88) 3623-1156</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Tres Marias, 538 Centro - (88)3623-1414</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:28})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>BATURITÉ</Text>
          </View> 
        </TouchableOpacity>
        <Modal 
        isVisible={this.state.vis === 28} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS I: Av. João Paulino, S/N - (85) 33471085</Text>
        <Text style={styles.paragI2}>CRAS VALE DAS CANDEIAS BOA VISTA: Stds_Baturite@Bol.Com.Br - (88) 3347-1565</Text>
        <Text style={styles.paragI2}>CRAS ZONA RURAL: Av. Major Pedro Catão, S/N, Mandego - (88) 3347-1565</Text>
        <Text style={styles.paragI2}>CREAS: Rua 07 de Setembro, S/N, Centro - Cep: 62760-000 - (85) 3347-1565</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua 15 de Novembro, 1101 Centro Praça Valdemar Falcão - (85) 996808988 ou (85)996808988, (85)998201875 ou (85)986155871, (85)996349162 ou (85)997545395, (85)986155871</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:29})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>BEBERIBE</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 29} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS I: Rua Padre Assis Portela, 75, Centro – Cep: 62840-000</Text>
        <Text style={styles.paragI2}>CRAS LITORAL II: Rua Francisco Xavier, S/N, Paripuera - Cep: 62840-000 - (85) 3338-1466</Text>
        <Text style={styles.paragI2}>CRAS RURAL: Trav. C/ A, Av. Ester Fernandes, S/N, Centro - Distrito da Serra do Félix - (85) 3327-5067</Text>
        <Text style={styles.paragI2}>CRAS SEDE: Rua Racine Facó, S/N, Centro - Cep: 62840-000 - (85) 3338-1296</Text>
        <Text style={styles.paragI2}>CREAS: Av. Maria Calado, S/N, Centro Administrativo José Queiroz - (85) 3338-1048</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Cel Biar, 654 Centro - (88)33382015</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:30})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>BELA CRUZ</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 30} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS I: Rua 7 de Setembro, S/N - (88) 3663-1048</Text>
        <Text style={styles.paragI2}>CRAS: Rua 7 de Setembro, S/N, Centro - Cep: 62570-000 - (88) 3663-3095</Text>
        <Text style={styles.paragI2}>CREAS: Rua Nossa Senhora de Fátima, S/N, Centro - (88) 3663-3111</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:31})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>BOA VIAGEM</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 31} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS I: Rua Antônio Queiroz, 250. Centro. Cep: 63780-000 - (88) 3427-1425</Text>
        <Text style={styles.paragI2}>CRAS II: Rua José Vieira de Freitas, S/N. Cohab. Cep: 63780-000 - (88) 3427-1425</Text>
        <Text style={styles.paragI2}>CREAS: Rua Teófilo Amaro, 325. Alto do Motor - (88) 3427-1283</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: RuaAntonio Queiroz, 241 Centro - (88)34271164</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:32})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>BREJO SANTO</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 32} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS AD DE BREJO SANTO: Rua Jose Basilio, 253, Centro - (88) 3531-1001</Text>
        <Text style={styles.paragI2}>CAPS I: Rua Manoel Inacio Bezerra, S/N, Centro – Cep: 63260-000 - (88) 3531-1042</Text>
        <Text style={styles.paragI2}>CRAS I: Rua Emanoel Leite, S/N. Centro - Cep: 63260-000 - (88) 3531-1080</Text>
        <Text style={styles.paragI2}>CRAS II: Rua Francisco Basílio, 335, São Francisco - Cep: 63260-100 - (88) 3531-1080</Text>
        <Text style={styles.paragI2}>CREAS: Rua João Olegario, 73, Centro - (88) 3531-1042</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Jose Inacio de Lucena, s/n Centro - (88)35311375</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:33})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>CAMOCIM</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 33} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS AD: Trav. Dr. João Tomé, 1533 - (88) 3621-1553</Text>
        <Text style={styles.paragI2}>CAPS II: Rua Santos Dumont, 1107- Centro - (88) 3621-1523</Text>
        <Text style={styles.paragI2}>CRAS CASA DA FAMÍLIA: Ponto de referência: Olinda I, s/n. Antigo ABC - (88) 3621-1513</Text>
        <Text style={styles.paragI2}>CRAS PROF. IVAN: Rua 24 de Maio, s/n. Praia. - (88) 3621-1513</Text>
        <Text style={styles.paragI2}>CREAS: Rua Nossa Senhora das Graças, 168. Olinda I - (88) 3621-1513</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Dom Pedro II, 294 Centro - (88)36211604 ou (88)992183694</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:34})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>CAMPOS SALES</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 34} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS: Rua José Alves, S/N, Alto Alegre - Cep: 63150-000 - (88) 3533-1801</Text>
        <Text style={styles.paragI2}>CREAS: Rua Carneiro Mendonça, 351, Centro - Cep: 62150-000 - (88) 3533-1801</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Julio Morães, 417 Centro (ao lado do Bando do Brasil) - (88)997362644 - Marcos Alencar</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:35})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>CANINDÉ</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 35} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS AD: Avenida São Francisco, S/N, Bela Vista – Cep: 62700-000 - (85) 3343-3110</Text>
        <Text style={styles.paragI2}>CAPS CANINDE: Rua Paulino Barroso, 904, Bela Vista – Cep: 62700-000 - (85) 3343-1278</Text>
        <Text style={styles.paragI2}>CRAS DO MONTE: Travessa Emílio Almeida, 872, Monte - Cep: 62770-000 - (85) 3243-0319, (85) 3243-2400</Text>
        <Text style={styles.paragI2}>CRAS I: Rua Romeu Martins, 697, Centro - Cep: 62770-000 - (85) 3343-2400</Text>
        <Text style={styles.paragI2}>CRAS II: Rua Frei Celestino, 775, Palestina - Cep: 62770-000 - (85) 3343-2400</Text>
        <Text style={styles.paragI2}>CRAS III BELA VISTA: Rua Luciano Magalhães, 272, Bela Vista - Cep: 62770-000 - (85) 3343-1427</Text>
        <Text style={styles.paragI2}>CREAS: Rua Tabelião Facundo, 154, Centro - Cep: 62700-000 - (85) 3343-0308, (85) 3343-2400</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Padre Manuel Cordeiro, 1652 Centro - (88)33430288</Text>

        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:36})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>CAPISTRANO</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 36} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS I: Rua Galdino Ferreira Lima, 14, Centro – Cep: 62748-000 - (85) 4141-1788</Text>
        <Text style={styles.paragI2}>CRAS RURAL: Carqueja - Centro - (85) 3326-1323</Text>
        <Text style={styles.paragI2}>CRAS SEDE PE. BERNARDO BOURASSA: Rua Antônio Fernandes Bezerra, S/N, Centro - Cep: 62748-000 - (85) 3326-1323</Text>
        <Text style={styles.paragI2}>CREAS: Rua José Saraiva Sobrinho, S/N, Centro - Cep: 32748-000 - (85) 3326-1329</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:37})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>CARIDADE</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 37} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS: Rua Padre José Airton, S/N, Centro - Cep: 62730-000 - (85) 3324-1192</Text>
        <Text style={styles.paragI2}>CRAS: Trav. Carmélia de Queiroz, S/N, Centro - Cep: 62730-000 - (85) 3324-1152</Text>
        <Text style={styles.paragI2}>CREAS: Rua Carmélia de Queiroz, S/N, Centro - Cep: 62730-000 - (85) 3324-1192</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Coronel Francisco Linhares, 119 Centro - (85) 33241237</Text>
        </View>
        </Modal>

             <TouchableOpacity onPress={() => this.setState({vis:38})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>CARIRÉ</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 38} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS ANIL DISTRITO: Rua Tenente Avelino Gomes, S/N - (88) 3646-1414</Text>
        <Text style={styles.paragI2}>CRAS SEDE: Rua Dr. José Teles, 401. Cep: 62184-000 - (88) 3646-1212</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Belarmino Rodrigues, 138 Centro - (88)36461316</Text>
        </View>
        </Modal>
       
        <TouchableOpacity onPress={() => this.setState({vis:39})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>CARIRIAÇU</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 39} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS I: Av. Padre Cícero, S/N - (88) 3547-1167</Text>
        <Text style={styles.paragI2}>CRAS I: Rua Carlos Morais, 202. Centro. Cep: 63220-000 - (88) 3547-1406</Text>
        <Text style={styles.paragI2}>CRAS II: Rua Carlos Morais, S/N, Mestre Neco - Cep: 63220-000 - (88) 3547-1406</Text>
        <Text style={styles.paragI2}>CREAS: Av. Cochimbão, 80. Pernambuquinho. Cep: 63220-000 - (88) 3547-1406</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Carlos Moraes, 272 Centro - (88)35471682 ou (88)999614935</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:40})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>CARIÚS</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 40} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS DISTRITO: Rua da Rodagem, S/N, Zona Rural - Cep: 63530-000 - (88) 3514-1384</Text>
        <Text style={styles.paragI2}>CRAS SEDE: Rua Raul Nogueira, S/N, Centro – Cep: 63530-000 - (88) 3514-1384</Text>

        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:41})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>CARNAUBAL</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 41} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS I: Rua Antonio Paulo de Melo, S/N, Centro – Cep: 62375-000 - (88) 3650-1233</Text>
        <Text style={styles.paragI2}>CRAS CAHOEIRA: Sítio Frexeiras - (88) 3550-1140</Text>
        <Text style={styles.paragI2}>CRAS JUNCO: Rio Sítio Junco, Zona Rural - Cep: 6237500-000 - (88) 3650-1140</Text>
        <Text style={styles.paragI2}>CRAS SAVEIRA: Rua Joaquim Souza Lino, S/N, Centro - Cep: 62375-000 - (88) 3550-1140</Text>
        <Text style={styles.paragI2}>CRAS SEDE: Rua Simplício Damasceno, S/N, Centro - Cep: 62375-000 - (88) 3550-1141</Text>
        <Text style={styles.paragI2}>CREAS: Rua João Felício, S/N, Novo Horizonte - (88) 3650-1140</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Dom José Tupinambá, 54 Centro - (88)36501111 ou (88)996675951</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:42})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>CASCAVEL</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 42} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS II: Av Chanceler Edson Queiroz, 2986, Centro – Cep: 62850-000 - (85) 3334-2244</Text>
        <Text style={styles.paragI2}>CRAS ALTO LUMINOSO: Rua Major Engenheiro José Goiana Primo, 2376, Alto Luminoso - Cep: 62850-000 - (85) 3334-2280, (85) 3334-2376</Text>
        <Text style={styles.paragI2}>CRAS CAPONGA: Rua Antônio Camelo, 691, Centro - Cep: 62853-000 - (85) 3334-8815</Text>
        <Text style={styles.paragI2}>CRAS GUANACÉS: Rua Isac Benício, 970, Guanacés - Cep: 62850-000 - (85) 3367-3348</Text>
        <Text style={styles.paragI2}>CRAS PLANALTO: Rua Samuel Bd, 3130, Planalto - (85) 3334-2334</Text>
        <Text style={styles.paragI2}>CREAS: Rua Francisco Galdino de Sousa, 2618, Rio Novo - (85) 3334-2326</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Prof. José Antonio de Queiroz, 2272 Centro - (85)3341320 ou (85)986516891</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:43})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>CATARINA</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 43} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS I: Rua Vereador José Rodrigues Freire, S/N</Text>
        <Text style={styles.paragI2}>CRAS: Rua Osterno Feitosa, S/N, Pedreiras - Cep: 63595-000 - (88) 3556-1584</Text>
        <Text style={styles.paragI2}>CRAS: Rua Osterno Feitosa, S/N, Pedreiras - Cep: 63595-000 - (88) 3556-1584</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:44})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>CATUNDA</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 44  } 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS: Rua São José, 86. Centro – Cep: 62297-000 - (88) 3686-1173</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua 07 de Setembro, s/n Centro - (88)994152877</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:45})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>CAUCAIA</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 45} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS AD : Rua Coronel Correia, 2112, Centro – Cep: 61600-004 - (85) 3342-8078</Text>
        <Text style={styles.paragI2}>CAPS II: Rua Nova Granada, S/N, Jurema – Cep: 61652-370</Text>
        <Text style={styles.paragI2}>CRAS ANTÔNIO FAÇANHA DE MENESES GRILO: Rua Júlio de Oliveira, S/N, Grilo - (85) 3342-8128</Text>
        <Text style={styles.paragI2}>CRAS EDSON DA MOTA CORREA: Rua José de Pontes, S/N, Centro - (85) 3342-2284</Text>
        <Text style={styles.paragI2}>CRAS FCA. ESTRELA TORQUATO FIRMEZA CAIC: Rua da Liberdade, 585, Pe. Julio Maria - (85) 3342-0402</Text>
        <Text style={styles.paragI2}>CRAS FCO. ASSIS MARTINSA DE SOUSA GUADALAJARA: Rua Saci, S/N, Guadalajara - (85) 3237-1292, (85) 3237-7526</Text>
        <Text style={styles.paragI2}>CRAS JOSÉ TURÍBIO DE SOUSA ARATURI: Rua Central, S/N, Parque Araturi - (85) 3259-5796</Text>
        <Text style={styles.paragI2}>CRAS LITORAL: Rua Almeida das Orquídeas, 100. Icaraí. - (85) 3318-2916</Text>
        <Text style={styles.paragI2}>CRAS PARQUE DAS NAÇÕES: Rua 09, 130. Conj. São Miguel. - (85) 3285-2248</Text>
        <Text style={styles.paragI2}>CRAS PERPÉTUA MAGALHÃES METRÓPOLE: Rua 127, S/N. Nova Metrópole - (85) 3213-2330</Text>
        <Text style={styles.paragI2}>CRAS PERPÉTUA MAGALHÃES METRÓPOLE: Rua 127, S/N. Nova Metrópole - (85) 3213-2330</Text>
        <Text style={styles.paragI2}>CREAS: Av. Edson da Mota Correia, 246, Centro - (85) 3342-2814</Text>
        <Text style={styles.paragI2}>CREAS JUREMA: Rua Jurupari, 668, Guadajara - (88) 3238-9878</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR CAUCAIA: Rua Geronimo Amaral, 36 Centro prox a UPA - (85)3342-8123</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR JUREMA: Rua Nova Granada, 1094 Jurema - (85)3471-2590</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:46})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>CEDRO</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 46} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS I: Rua Tabeliao Raimundo dos Santos, S/N, Fátima – Cep: 63400-000 - (85) 3564-0546</Text>
        <Text style={styles.paragI2}>CRAS I: Rua Joaquim Ferreira da Silva, 12, Fátima - Cep: 63400-000 - (88) 3564-0412</Text>
        <Text style={styles.paragI2}>CRAS II: Rua General Tibúrcio, 28, Centro - Cep: 63400-000 - (88) 3564-0453</Text>
        <Text style={styles.paragI2}>CREAS: Rua Joaquim Alves do Santos , 553, Centro - Cep: 63400-000 - (88) 3564-0453</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Adauto Castelo, 335 Centro- (88)3564-1622</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:47})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>CHAVAL</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 47} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS: Rua Coronel José Porfilho, 341, Centro - Cep: 62420-000 - (88) 3625-1482, (88) 3625-1196</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:48})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>CHORÓ</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 48} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS SEBASTIÃO INÁCIO DOS ANJOS: Rua Haeldir Baltazar de Queiroz, 241, Cidade Nova - (88) 3438-1096</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Ilda Bezerra Piancó, 40 Centro - (88)3438-1251 ou (88) 98847-0774</Text>

        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:49})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>CHOROZINHO</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 49} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS MENINO JESUS: Rua Luiz Félix Pereira, S/N, Centro - Cep: 62.875-000 - (85) 3319-1122</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:50})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>COREAÚ</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 50} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS I: Rua Coronel Antonio Teles, 60, Centro – Cep: 62160-000 - (88) 3645-1451</Text>
        <Text style={styles.paragI2}>CRAS CASA DA FAMÍLIA: Rua Antônio Galdino, 131, Centro - Cep: 62160-000 - (88) 3645-1734</Text>
        <Text style={styles.paragI2}>CRAS RURAL UBAÚNA: Rua do Açude, S/N, Ubaúna - Cep: 62160-000 - (88) 3645-6160</Text>
        <Text style={styles.paragI2}>CREAS: Rua Joaquim, S/N. – Centro. Cep: 62160-000 - (88) 3645-1430</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Francisco Napoleão Ximenes, s/n Centro - (88)988841806</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:51})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>CRATEÚS</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 51} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS I: Rua Auton Aragao, 525, São Vicente – Cep: 63700-000 - (88) 3692-3355</Text>
        <Text style={styles.paragI2}>CRAS I: Rua Oscar Lopes, S/N, Fátima II – Cep: 63700-000 - (88) 3692-3319</Text>
        <Text style={styles.paragI2}>CRAS II: Rua Santa Rita, 100, Venâncios - Cep: 63700-000 - (88) 3692-3319</Text>
        <Text style={styles.paragI2}>CRAS III: Rua Gentil Cardoso, 165. Conj. São José. Cep: 63700-000 - (88) 3692-3319</Text>
        <Text style={styles.paragI2}>CREAS: Rua Manuel Balbino, 180. Santa Luzia. - (88) 3691-2090</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:52})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>CRATO</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 52} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS II: Rua Coronel Antônio Luis, 1323 Seminario - (88) 521-2229</Text>
        <Text style={styles.paragI2}>CRAS I: Rua São Francisco, 180, Pinto Madeira – Cep: 63100-900 - (88) 3523-5235, (88) 3521-6321</Text>
        <Text style={styles.paragI2}>CRAS II: Rua da Capela, S/N, Batateira - Cep: 63100-900 - (88) 3523-5286</Text>
        <Text style={styles.paragI2}>CRAS III: Rua Pedro Orlando Bezerra, S/N, Muriti - (88) 3521-4099</Text>
        <Text style={styles.paragI2}>CRAS IV: Rua José Pinheiro Teles, 169, Conj. Novo Crato - (88) 3523-5406</Text>
        <Text style={styles.paragI2}>CRAS V: Rua Tenente Antônio João, 11, Vila Alta - Cep: 63100-900 - (88) 3521-5972</Text>
        <Text style={styles.paragI2}>CREAS: Rua Antonio Nirsan Monteiro, 1715, Santa Luzia - (88) 3521-6321</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Teofilo Siqueira, 684 Centro - (88)35215239</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:53})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>CROATÁ</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 53} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS DISTRITO: Rua Luíz Pedro, S/N - (88) 3659-1164</Text>
        <Text style={styles.paragI2}>CRAS SEDE: Rua Manuel Braga, 537, Caroba - Cep: 62390-000 - (88) 3659-1164</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:54})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>CRUZ</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 54} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS I: Trav. 7 de setembro, S/N - (88) 3660-1670</Text>
        <Text style={styles.paragI2}>CRAS: Rua Vereador Mundica Martins, S/N. Malvina. Cep: 62595-000 - (88) 3660-1010</Text>
        <Text style={styles.paragI2}>CREAS: Rua 7 de Setembro, S/N Centro - (88) 3660-1010</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Izequiel Vasconcelos, s/n Centro - (88)99712.2509</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:55})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>DEP. IRAPUAN PINHEIRO</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 55} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS MARIA CREUZA PINHEIRO: Rua Cândido Borges, S/N. Centro. Cep: 63645-000 - (88) 3569-1218</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Francisco Pinheiro, s/n Centro - (88)988715213</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:56})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>ERERÊ</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 56} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS: Av. Padre Daniel, S/N, Centro – Cep: 63470-000 - (88) 3434-1041</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:57})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>EUSÉBIO</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 57} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS AD DE EUSEBIO: Avenida Brasília, 487, Parque Havai – Cep: 61760-000 - (85) 3260-5446</Text>
        <Text style={styles.paragI2}>CAPS I: Avenida Eusébio de Queiroz, 5446, Centro – Cep: 61760-000 - (85) 3260-5445</Text>
        <Text style={styles.paragI2}>CRAS JABUTI: Rua dos Morais, 392. Jabuti, Km 19 - (85) 3260-2340</Text>
        <Text style={styles.paragI2}>CRAS MANGABEIRA: Av. Ednardo Weyne, S/N, esquina com Estrada do Fio, Timbú - (85) 3260-3231, (85) 3260-2641</Text>
        <Text style={styles.paragI2}>CRAS SEDE: Rua Guaramirim, S/N, Lagoinha - (85) 3260-5597, (85) 3260-4034</Text>
        <Text style={styles.paragI2}>CREAS: Rua Irmã Ambrosina, S/N, Praça do Polo de Lazer, Centro - (85) 3260-4945</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Joinville, 10. Lagoinha - (85) 3260-5111</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:58})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>FARIAS BRITO</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 58} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPSDE FARIAS BRITO: Antonio Ferreira Lima, 95, Centro – Cep: 63185-000 - (88) 3544-1531</Text>
        <Text style={styles.paragI2}>CRAS RURAL: Quincuncá - Centro - (88) 3544-1223</Text>
        <Text style={styles.paragI2}>CRAS SEDE: Rua Maria Carmelita Leite, S/N, Centro - Cep: 63185-000 - (88) 3544-1223</Text>
        <Text style={styles.paragI2}>CREAS: Rua Aracy Freitas Francelino, S/N,Centro - (88) 3544-1223</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Iraci Freitas Francelino, s/n Centro - (88)99605.7020</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:59})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>FORQUILHA</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 59} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS I ALMIR RUFINO DE SOUZA: Rua Maria do Nazaré Cavalcante, S/N, Edmundo Rodrigues (88) 3619-1200</Text>
        <Text style={styles.paragI2}>CRAS: Av. 1º de Maio, S/N, Edmundo Rodrigues - Cep: 62115-000 - (88) 3619-1608</Text>
        <Text style={styles.paragI2}>CREAS: Rua Ten. Vicente Cesário, S/N – Edmundo Rodrigues - (88) 3619-1608</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Paulo Franklin Barbosa, s/n bairro Edimundo Rodrigues - (88)992909149 Cons Sandra, 992147157 Zélia, 992567649 - Genival, 992980756 Elenice, 992970033 Ingrid Martins</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:60})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>FORTIM</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 60} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS: Rua Joaquim Crisóstomo, 1113, - Cep: 628515-000 - (88) 3413-1005</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Joaquim Crisostomo, 1174 Centro - (88)34131011 ou (88)94131000 ou (88)988231604</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:61})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>FRECHEIRINHA</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 61} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS: Rua Santa Luzia, S/N, Lapa - Cep: 63340-000 - (88) 3655-1702</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Norberto Rodrigues,1539 Centro - (88)994889127 (88)992939907 (88)993490847</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:62})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>General Sampaio</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 62} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS: Av. José Severino Filho, 257, Nossa Senhora do Coração de Jesus - (85) 3357-1088</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Av. José Severino Filho, s/n Centro - (85)98710-0368 ou 984165753 ou 994112518 ou 985805468 ou 988802286</Text>
        </View>
        </Modal>  

        <TouchableOpacity onPress={() => this.setState({vis:63})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>GRAÇA</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 63} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS I: Av. Raimundo da Cunha Brito, S/N, Centro – Cep: 62365-000 - (88) 3656-1250</Text>
        <Text style={styles.paragI2}>CRAS RURAL: Rua Mariano Saraiva, S/N, Centro - Cep: 60000-375 - (88) 3656-1036</Text>
        <Text style={styles.paragI2}>CRAS SEDE: Av. Raimundo da Cunha Brito, S/N, Centro - Cep: 62365-000 - (88) 3656-1036</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Av José Candido de Carvalho, s/n Centro - (88)36561315</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:64})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>GRANJA</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 64} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS II: Rua Francisco Sousa, 332, Centro – Cep: 62430-000 - (88) 3624-1329</Text>
        <Text style={styles.paragI2}>CRAS I: Rua Clóvis Dias, 75, Prado - (88) 3624-4012</Text>
        <Text style={styles.paragI2}>CRAS II: Rua Padre Gafanhoto, 134, Centro - (88) 3624-0334</Text>
        <Text style={styles.paragI2}>CREAS: Rua Pessoa Anta, S/N, Centro - Cep: 62430-000 - (88) 3624-1342</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Dr. João Pessoa, 887 bairro Exposição - (88)36241332 (88)997652698</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:65})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>GRANJEIRO</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 65} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS: Rua do Cruzeiro, S/N, Centro - Cep: 62.230-000 - (88) 3519-1040</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Davi de Granjeiro s/n</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:66})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>GROAÍRAS</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 66} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS: Rua Monsenhor Linhares, 190, Centro - Cep: 62190-000 - (88) 3647-1103</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Trav. Cassiano Feijão, 340 Centro - (88)36471355</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:67})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>GUAIÚBA</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 67} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPSAD: Rua Sinval Leitão, S/N – CEP: 61890-000 - (85) 3376-1009</Text>
        <Text style={styles.paragI2}>CRAS ÁGUA VERDE: Rua João Bandeira Torres, S/N, Distrito de Água Verde - (85) 3376-1001</Text>
        <Text style={styles.paragI2}>CRAS SEDE: Rua Antônio Acioly, 217, Centro - Cep: 60890-000 - (85) 3376-1008</Text>
        <Text style={styles.paragI2}>CREAS: Rua Antonio Accioly, 215, Centro - (85) 3376-1683</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Ivanildo Nocrato, 96. Pinheiro - (85)-3376-1000</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:68})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>GUARACIABA DO NORTE</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 68} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS: Rua Francisco de Sousa Baltazar, S/N - (88) 3652-2297</Text>
        <Text style={styles.paragI2}>CRAS: Av. Monsenhor Furtado, S/N, Centro - Cep: 62380-000 - (88) 3652-1133</Text>
        <Text style={styles.paragI2}>CRAS RURAL: Distrito Vazia dos Espinhos - (88) 3652-1133</Text>
        <Text style={styles.paragI2}>CREAS: Rua Fco. Bezerra, S/N, Centro - (88) 3652-1133</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:69})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>GUARAMIRANGA</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 69} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS: Rua Francisco Farias Filho, 11, Pernambuquinho - Cep: 62766-000 - (88) 3325-1114</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Joaquim Alves Nogueira, s/n Centro - (85)985278497 ou 999100522</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:70})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>HIDROLANDIA</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 70} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS IRAJA: Rua Pedro Bricio, S/N, Centro - (88) 3638-1668</Text>
        <Text style={styles.paragI2}>CRAS SEDE: Rua Tenente Terrogenes, S/N, Centro - Cep: 62270-000 - (88) 3638-1668</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Dona Maria José, 170 Centro - (88) 99873.2689</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:71})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>HORIZONTE</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 71} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS AD DE HORIZONTE: Rua Raimundo Nonato de Carvalho, 60 - (85) 3336-6050</Text>
        <Text style={styles.paragI2}>CAPS I: Rua Hernanes Martins, 45, Diadema – Cep: 62880-000 - (85) 336-6042</Text>
        <Text style={styles.paragI2}>CRAS CATOLÉ: Rua João de Sousa Falcão, S/N, Catolé - Cep: 62880-974 - (85) 3336-6067</Text>
        <Text style={styles.paragI2}>CRAS DOURADO: Rua Dona Sinhá, 53, Dourado - (85) 3336-5223</Text>
        <Text style={styles.paragI2}>CRAS QUILOMBOLAS: Rua Joaquim Nogueira, 4014, Queimadas - (85) 3336-6073</Text>
        <Text style={styles.paragI2}>CRAS ZUMBI: Rua Horácio Inácio de Sousa, 192. Zumbi - (85) 3336-6062</Text>
        <Text style={styles.paragI2}>CREAS: Rua Antonio Augustinho da Silva, 27 Centro - (85) 3336-1060</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Antônio Augustinho da Silva, 27. Centro. - (85)3336-6066 (85)98879-9202</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:72})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>IBARETAMA</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 72} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS: Av. João de Almeida, 192, Centro - Cep: 63970-000 - (88) 3439-1087</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua: Doutor Nelson de Andrade Sales s/n. Centro - (88)99427-8600 (85)98215-2918</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:73})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>IBIAPINA</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 73} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS I IBIAPINA: Rua Sargento João Gomes Neto, S/N, Centro – Cep: 62360-000 - (88) 3653-1166</Text>
        <Text style={styles.paragI2}>CRAS ESTADIO: Rua Vereador Manoel Rodrigues, S/N, Centro - Cep: 62360-000 - (88) 3653-1429</Text>
        <Text style={styles.paragI2}>CRAS PEDRINHAS: Rua João Vaz de Aguiar, S/N - Cep: 62360-000 - (88) 3653-1429</Text>
        <Text style={styles.paragI2}>CREAS: Rua Capitão Pedro, S/N, Centro - (88) 3653-1208</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Av Capitão Pedro, 244 Centro - (88)992467299 (88)996375893 (88)36531777</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:74})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>IBICUITINGA</Text>
          </View> 
        </TouchableOpacity>
        <Modal 
        isVisible={this.state.vis === 74} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS: Rua João Duarte, 2212, Centro - Cep: 62955-000 - (88) 3425-1071</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua: Capitão Manuel Antonio, Centro (prox ao Forum) vai haver mudança de numero - (88)99462-6939 Cons Josimar Rodrigues</Text>
        </View>
        </Modal>
        <TouchableOpacity onPress={() => this.setState({vis:75})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>ICAPUI</Text>
          </View> 
        </TouchableOpacity>
        <Modal 
        isVisible={this.state.vis === 75} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS I: Rua Newton Ferreira, S/N- Centro - (88) 3432-1110</Text>
        <Text style={styles.paragI2}>CRAS: Av. Enoque Carneiro, S/N,Cajuais – Cep: 62810-000 - (88) 3432-1350</Text>
        <Text style={styles.paragI2}>CREAS: Rua dos Porfírios, S/N, Centro - Cep: 62800-000 - (88) 3432-1321</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua dos Porfilios, s/n Centro - (88)34321305 (88)994057153</Text>
        </View>
        </Modal>
        <TouchableOpacity onPress={() => this.setState({vis:76})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>ICÓ</Text>
          </View> 
        </TouchableOpacity>
        <Modal 
        isVisible={this.state.vis === 76} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS AD: Rua São José, S/N - (88) 3561-1474</Text>
        <Text style={styles.paragI2}>CAPS II: Rua Samuel Antero, 1290 - (88) 3561-1282</Text>
        <Text style={styles.paragI2}>CAPS INFANTO/JUVENIL: Rua Samuel Antero, 1266, Centro – Cep: 63430-000 - (88) 3561-1474</Text>
        <Text style={styles.paragI2}>CRAS I: Rua Sebastião Ferreira de Oliveira, 681, Alto da Cooperativa - (88) 3561-2661</Text>
        <Text style={styles.paragI2}>CRAS II: Rua Antônio Barbosa, 186, Conj. BNH - (88) 3561-1508</Text>
        <Text style={styles.paragI2}>CRAS III: Rua São Sebastião, 233 - Cep: 63430-000 - (88) 3563-4137</Text>
        <Text style={styles.paragI2}>CREAS: Csu / Rua Dr Inácio Dias - (88) 3561-1033</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Josefa Nogueira Monteiro, 1294 Centro - (88)996543210 (88)996933716</Text>
        </View>
        </Modal>
        <TouchableOpacity onPress={() => this.setState({vis:77})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>IGUATU</Text>
          </View> 
        </TouchableOpacity>
        <Modal 
        isVisible={this.state.vis === 77} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS ADII : Rua Engenheiro Wilton Correia Lima, 610, Prado – Cep: 63502-108 - (88) 3581-1126</Text>
        <Text style={styles.paragI2}>CAPS III: Rua 27 de Novembro, 569, Prado - (88) 3581-9233</Text>
        <Text style={styles.paragI2}>CAPS INFANTO/JUVENIL: Rua Julio Cavalcante708 Tabuleiro - Cep: 63500-292 - (88) 3581-1444</Text>
        <Text style={styles.paragI2}>CRAS I: Rua Ana Duarte de Oliveira, 177, Cajazeiros - (88) 3510-1650</Text>
        <Text style={styles.paragI2}>CRAS II: Rua Juvenal Barreto, 587, Brasília - (88) 3581-7824</Text>
        <Text style={styles.paragI2}>CRAS III: Av. Dário Rabelo, S/N, Santo Antônio - Cep: 63500-000 - (88) 3581-6819</Text>
        <Text style={styles.paragI2}>CRAS IV: Rua Mauro Maia, 228, Dreias 2 - (88) 3510-1650</Text>
        <Text style={styles.paragI2}>CRAS V: Rua Guilherme Gomes Araújo, S/N. Cohab 2. - (88) 3510-1650</Text>
        <Text style={styles.paragI2}>CRAS VI: Rua Holanda Montenegro, S/N. Distrito de Alencar. - (88) 3510-1650</Text>
        <Text style={styles.paragI2}>CREAS: Eng.º Wilton Correia Lima, S/N, Prado - (88) 3510-1650</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Martins Soares Moreno, 476. Centro - (88)35811993 992484048 999903289</Text>
        </View>
        </Modal>
        <TouchableOpacity onPress={() => this.setState({vis:78})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>INDEPENDÊNCIA</Text>
          </View> 
        </TouchableOpacity>
        <Modal 
        isVisible={this.state.vis === 78} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS: Av. Gerônimo Alves, 417. Cohab. Cep: 63400-000 - (88) 3675-2355</Text>
        <Text style={styles.paragI2}>CREAS: Rua da Congregçação, 588 – Cohab - (88) 3575-1027 (88) 3575-1280</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Avenida Gerônimo Alves s/n. Cohab. - (88)997896974 (88) 36752264</Text>
        </View>
        </Modal>
        <TouchableOpacity onPress={() => this.setState({vis:79})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>IPAPORANGA</Text>
          </View> 
        </TouchableOpacity>
        <Modal 
        isVisible={this.state.vis === 79} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS: Rua Gabriel Rodrigues Júnior, S/N. Centro. Cep: 62215-000 - (88) 3684-1114</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Gabriel Rodrigues Junior, s/n Centro - (88)999540285</Text>
        </View>
        </Modal>
        <TouchableOpacity onPress={() => this.setState({vis:80})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>IPAUMIRIM</Text>
          </View> 
        </TouchableOpacity>
        <Modal 
        isVisible={this.state.vis === 80} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS ANTÔNIO SARAIVA DE ARAÚJO: Trav. José Barros, S/N. Centro.Cep: 63340-000 - (88) 3567-1187</Text>
        <Text style={styles.paragI2}>CRAS DISTRITO FELIZARDO: Rua Félix Antônio, 208, Centro – Cep: 63340-000 - (88) 3567-1187</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Avenida Gerônimo Alves s/n. Cohab. - (88)997896974 (88) 36752264</Text>
        </View>
        </Modal>
        <TouchableOpacity onPress={() => this.setState({vis:81})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>IPU</Text>
          </View> 
        </TouchableOpacity>
        <Modal 
        isVisible={this.state.vis === 81} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS I: Rua Dr Chagas Pinto, S/N, Centro – Cep: 62250-000 - (88) 3683-2115</Text>
        <Text style={styles.paragI2}>CRAS ALTO DOS QUATORZE: Rua Doutor Félix Cândido, 657, Alto dos Quatorze - Cep: 62250-000 - (88) 3683-2022</Text>
        <Text style={styles.paragI2}>CRAS SEDE: Rua Dona Joana Mimosa, 239. Nova Aldeota. Cep: 62250-000 - (88) 3683-2022</Text>
        <Text style={styles.paragI2}>CREAS: Rua Cel. Félix Cândido, 7 - Alto dos Quatorze - (88) 3683-2022</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Teodorico Souto, 527 Centro - (88)997165369</Text>
        </View>
        </Modal>
        <TouchableOpacity onPress={() => this.setState({vis:82})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>IPUEIRAS</Text>
          </View> 
        </TouchableOpacity>
        <Modal 
        isVisible={this.state.vis === 82} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS I: Rua Mariano Ribeiro de Oliveiras/N Centro - Cep: 62230-000 - (88) 3685-1869</Text>
        <Text style={styles.paragI2}>CRAS: Rua Coronel José Bento, 388, Centro - Cep: 62230-000 - (88) 3685-1080</Text>
        <Text style={styles.paragI2}>CRAS MATRIX: Rua Francisco Tupinambá de Melo, S/N, Matrix de São Gonçalo - (88) 3685-6079</Text>
        <Text style={styles.paragI2}>CREAS: Rua Prefeito Raul Catunda Fontenele, S/N, Centro - Cep: 62230-000 - (88) 3685-1080</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Sebastião Matos Pires, s/n Centro - (88)997115116</Text>
        </View>
        </Modal>
        <TouchableOpacity onPress={() => this.setState({vis:83})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>IRACEMA</Text>
          </View> 
        </TouchableOpacity>
        <Modal 
        isVisible={this.state.vis === 83} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS DA FAMÍLIA DE IRACEMA: Rua Francisco das Chagas Magalhães, 148, Centro - (88) 3428-1462</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Ângelo Paz, 30 Centro - (88)996468443</Text>
        </View>
        </Modal>
        <TouchableOpacity onPress={() => this.setState({vis:84})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>IRAUÇUBA</Text>
          </View> 
        </TouchableOpacity>
        <Modal 
        isVisible={this.state.vis === 84} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS I: Rua Valdir de Andrade Braga, 328, Centro – Cep: 62620-000 - (88) 3635-1231</Text>
        <Text style={styles.paragI2}>CRAS SEDE: Rua Valma Braga, S/N. B. Açude. Cep: 62620-000 - (88) 3635-1401 (88) 3635-1266</Text>
        <Text style={styles.paragI2}>CRAS FRANCISCO RODRIGUES DANTAS (MISSI) : Rua do Posto, S/N. Distrito MissiCep: 62620-000 - (88) 3635-3202</Text>
        <Text style={styles.paragI2}>CREAS: Rua Valmar Braga, 761, Centro - (88) 3635-1281</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Av. Paulo Bastos, 10. Centro - (88) 3635-1470</Text>
        </View>
        </Modal>
        <TouchableOpacity onPress={() => this.setState({vis:85})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>ITAIÇABA</Text>
          </View> 
        </TouchableOpacity>
        <Modal 
        isVisible={this.state.vis === 85} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS: Rua 7 de Setembro, S/N - São Francisco. - (88) 3410-1112</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Alto das Pedrinhas, s/n Centro - (88)994805530 (88)8834101112 Assistência</Text>
        </View>
        </Modal>
        <TouchableOpacity onPress={() => this.setState({vis:86})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>ITAITINGA</Text>
          </View> 
        </TouchableOpacity>
        <Modal 
        isVisible={this.state.vis === 86} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS I: Rua Joaquim Pereira da Silveira, 226- Genezaré - (85) 3377-2610</Text>
        <Text style={styles.paragI2}>CRAS ANGORÁ: Rua 02, Nº 01 - (85) 3377-1354</Text>
        <Text style={styles.paragI2}>CRAS BARROCÃO: Rua Valdemberto Albuquerque, 02,. Angorá - Cep: 61880-001 - (85) 3377-1354</Text>
        <Text style={styles.paragI2}>CREAS: Rua Clarice Assunção, 08, Centro - (85) 3377-1354</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Fco. Cordeiro de Oliveira, 1019 Centro - (85)3377-2481</Text>
        </View>
        </Modal>
        <TouchableOpacity onPress={() => this.setState({vis:87})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>ITAPAJÉ</Text>
          </View> 
        </TouchableOpacity>
        <Modal 
        isVisible={this.state.vis === 87} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS I: Rua Virgilio Muniz Farrapos, 74, Monte Castelo – Cep: 62600-000 - (85) 3346-1634</Text>
        <Text style={styles.paragI2}>CRAS MARIA OCITA FREITAS CRUZ: Av. Raimundo Vieira Filho, 511, Distrito de Iratinga – Cep: 62600-000 - (85) 3346-1033</Text>
        <Text style={styles.paragI2}>CRAS SEDE: Rua Manoel Bernardo, 50. Bairro de Fátima - Cep: 62600-000 - (85) 3346-1033</Text>
        <Text style={styles.paragI2}>CREAS: Rua Alvares Valdez, 139, Padre Lima - (85) 3346-1033</Text>
        </View>
        </Modal>
        <TouchableOpacity onPress={() => this.setState({vis:88})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>ITAPIPOCA</Text>
          </View> 
        </TouchableOpacity>
        <Modal 
        isVisible={this.state.vis === 88} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS II: Rua José Romero, S/N- Centro - (88) 3631-5950</Text>
        <Text style={styles.paragI2}>CRAS ARAPARI: Rua Maria Apolonia Soares, S/N. Centro, Arapari - (88) 3631-5950</Text>
        <Text style={styles.paragI2}>CRAS BALEIA: Rua da Copaba, S/N. Baleia - (88) 3631-5950</Text>
        <Text style={styles.paragI2}>CRAS DESERTO: Rua Eubia Barroso, S/N, Deserto - (88) 3631-5950</Text>
        <Text style={styles.paragI2}>CRAS MARANHÃO: Rua José Airton Teixeira, 65, Coqueiros - (88) 3631-3335</Text>
        <Text style={styles.paragI2}>CRAS MOURÃO: Rua Luis Major, 689, São Francisco - (88) 3631-5950</Text>
        <Text style={styles.paragI2}>CREAS: Rua João Cordeiro, S/N – Coqueiro - (88) 3631-5950</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Avenida José do Patrocínio, 984. Centro - (88)36315950/ ramal 1095</Text>
        </View>
        </Modal>
        <TouchableOpacity onPress={() => this.setState({vis:89})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>ITAPIUNA</Text>
          </View> 
        </TouchableOpacity>
        <Modal 
        isVisible={this.state.vis === 89} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS I: Rua Cosmo Santos, S/N, Planalto – Cep: 62740-000 - (88) 3431-1371</Text>
        <Text style={styles.paragI2}>CRAS RURAL: Rua São Félix, S/N, Palmatória - (88) 3431-1306</Text>
        <Text style={styles.paragI2}>CRAS SEDE: Rua Joaquim Clementino Silva, S/N, Umburana – Cep: 62740-000 - (88) 3430-1500</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Firmino Geronimo, 07 Centro - (88)34311500 (85)997353131 Cons Cleminlda</Text>
        </View>
        </Modal>
        <TouchableOpacity onPress={() => this.setState({vis:90})}> 
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>ITAREMA</Text>
          </View> 
        </TouchableOpacity>
        <Modal 
        isVisible={this.state.vis === 90} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS II: Avenida Rioss/N Centro - Cep: 62590-000 - (88) 667-1357</Text>
        <Text style={styles.paragI2}>CRAS ALMOFADA: Av. João Augustinho Nascimento, S/N. Zona Rural. Cep: 62590-000 - (88) 3667-2136</Text>
        <Text style={styles.paragI2}>CRAS SEDE: Av. Rios, S/N, Centro - Cep: 62590-000 - (88) 3667-1766</Text>
        <Text style={styles.paragI2}>CREAS: Rua José Fernandes de Sousa, 368 – Centro - (88) 3667-1197</Text>
        </View>
        </Modal>
        <TouchableOpacity onPress={() => this.setState({vis:91})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>ITATIRA</Text>
          </View> 
        </TouchableOpacity>
        <Modal 
        isVisible={this.state.vis === 91  } 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS I: Rua Antônia Alves Guerreiro, 621, Centro - Cep: 62725-000 - (88) 3436-1054</Text>
        <Text style={styles.paragI2}>CRAS II: Conj. Lúcia de Fátima Assunção Melo, S/N - Cep: 62725-000 - (88) 3436-3375</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua 31 de Março, 384 Centro - (88)3436-3375/ (88)981078249</Text>
        </View>
        </Modal>
        <TouchableOpacity onPress={() => this.setState({vis:92})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>JAGUARETAMA</Text>
          </View> 
        </TouchableOpacity>
        <Modal 
        isVisible={this.state.vis === 92} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS I: Francisco Antonio Pinheiro, 221, Centro – Cep: 63480-000 - (88) 3576-1895</Text>
        <Text style={styles.paragI2}>CRAS I: Rua Adolfo Bezerra de Menezes, 373,Centro - Cep: 63000-480 - (88) 3576-1439</Text>
        <Text style={styles.paragI2}>CRAS II: Rua Matilde Pinheiro, 342. Nossa Senhora da Conceição. Cep: 63000-480 - (88) 3576-1439</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Pedro Lemos Peixoto, 362. - (88)981085437 (88)981125491</Text>
        </View>
        </Modal>
        <TouchableOpacity onPress={() => this.setState({vis:93})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>JAGUARIBARA</Text>
          </View> 
        </TouchableOpacity>
        <Modal 
        isVisible={this.state.vis === 93} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS: Rua Prfª Verônica Bezerra, 289. Centro. Cep: 62970-000 - (88) 3568-4530</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua: Professora Marlinda Eloi, 424 Centro - (88)996444192</Text>
        </View>
        </Modal>
        <TouchableOpacity onPress={() => this.setState({vis:94})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>JAGUARIBE</Text>
          </View> 
        </TouchableOpacity>
        <Modal 
        isVisible={this.state.vis === 94} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS COHAB: Av. C, S/N. Manoel Costa Morais. Cep: 63475-000 - (88) 3522-3665</Text>
        <Text style={styles.paragI2}>CRAS VILA PINHEIRO: Rua Antônio Rodrigues, 12, Vila Pinheiro – Cep: 63475-000 - (88) 3522-3160</Text>
        <Text style={styles.paragI2}>CREAS: Rua 7 de Setembro, 530 Centro - (88) 3522-1513</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Sigefredo Diógenes, 462. bairro Aluísio Diógenes - (88)3522-3308/(88)999660698 (88)997525763</Text>
        </View>
        </Modal>
        <TouchableOpacity onPress={() => this.setState({vis:95})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>JAGUARUANA</Text>
          </View> 
        </TouchableOpacity>
        <Modal 
        isVisible={this.state.vis === 95} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS I: Travessa 11 de setembro, 335 - (88) 3418-1619</Text>
        <Text style={styles.paragI2}>CRAS: Rua 2, S/N, Cohab - Cep: 62828-000 - (88) 3418-2406</Text>
        <Text style={styles.paragI2}>CREAS: Av. Simão de Góes, 1569 – Centro - (88) 3418-2406</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Simão de Goes, 1094 Centro - (88)99213039</Text>
        </View>
        </Modal>
        <TouchableOpacity onPress={() => this.setState({vis:96})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>JARDIM</Text>
          </View> 
        </TouchableOpacity>
        <Modal 
        isVisible={this.state.vis === 96} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS I: Rua Leonel Alencar150 Centro - Cep: 63290-000 - (88) 3555-1676</Text>
        <Text style={styles.paragI2}>CRAS I: Rua Padre Miguel Coelho, 71, Centro - Cep: 63.290-000 - (88) 3355-1635</Text>
        <Text style={styles.paragI2}>CRAS II: Rua Jonas Maurício, S/N, Cohab I – Cep: 63290-000 - (88) 3555-1635</Text>
        <Text style={styles.paragI2}>CREAS: Rua Teodomiro Silveira Sampaio, 50. Centro. Cep: 63290-000 - (88) 3555-1635</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua: Leonel Alencar 224. - (88)98113-3451</Text>
        </View>
        </Modal>
        <TouchableOpacity onPress={() => this.setState({vis:97})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>JATI</Text>
          </View> 
        </TouchableOpacity>
        <Modal 
        isVisible={this.state.vis === 97} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS I: Rua São Francisco, 180, Pinto Madeira - (88) 3575-1249</Text>
        <Text style={styles.paragI2}>CRAS II: Rua do Capelo, S/N, Batadeira - (88) 3575-1250</Text>
        <Text style={styles.paragI2}>CRAS III: Rua Pedro Orlando Bezerra, S/N, Muriti - (88) 3575-1251</Text>
        <Text style={styles.paragI2}>CRAS IV: Rua José Pinheiro Teles, 169. Novo Crato - (88) 3575-1252</Text>
        <Text style={styles.paragI2}>CRAS V: Rua Tenente Antônio João, 11, Vila Alta - (88) 3575-1253</Text>
        <Text style={styles.paragI2}>CRAS VI: Rua Antônio Trajano da Silva, S/N, Ponta da Serra - (88) 3575-1254</Text>
        <Text style={styles.paragI2}></Text>
        </View>
        </Modal>
        <TouchableOpacity onPress={() => this.setState({vis:98})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>JIJOCA DE JERICOACOARA </Text>
          </View> 
        </TouchableOpacity>
        <Modal 
        isVisible={this.state.vis === 98} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS: Trav. Afonso Fontes, S/N, Centro - Cep: 62598-000 - (88) 3669-1465</Text>
        <Text style={styles.paragI2}>CREAS: Trav. Afonso Pontes, S/N, Centro - (88) 3669-1446</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Campo Grande , 200 Centro - (88)36691213</Text>
        </View>
        </Modal>
        <TouchableOpacity onPress={() => this.setState({vis:99})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>JUAZEIRO DO NORTE</Text>
          </View> 
        </TouchableOpacity>
        <Modal 
        isVisible={this.state.vis === 99} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS AD DE JUAZEIRO DO NORTE: Avenida Leandro Bezerra, 335, Socorro – Cep: 63011-010 - (88) 3512-2128</Text>
        <Text style={styles.paragI2}>CAPS III: Rua Raimundo Machado da Silva, 236, Triângulo – Cep: 63041-195 - (88) 3511-0380</Text>
        <Text style={styles.paragI2}>CRAS AEROPORTO: Rua Joaquim Leandro de Souza, 04, Pedrinhas - Cep: 63018-100 - (88) 3572-3907</Text>
        <Text style={styles.paragI2}>CRAS FREI DAMIÃO: Rua Manoel Tavares Lopes, 2815, Frei Damião - Cep: 63044-090 - (88) 3511-1994</Text>
        <Text style={styles.paragI2}>CRAS HORTO: Rua Padre Jesú Flor, S/N, Horto - Cep: 63180-000 - (88) 3572-3907</Text>
        <Text style={styles.paragI2}>CRAS JOÃO CABRAL: Rua Perpétua Carneiro da Cunha, S/N, João Cabral - Cep:63051-140 - (88) 3571-3403</Text>
        <Text style={styles.paragI2}>CRAS PALMEIRINHA: Rua Antônio Cruz Macedo, S/N. Palmeirinha - Cep: 63000-000 - (88) 3572-4144</Text>
        <Text style={styles.paragI2}>CRAS SÃO GONÇALO: Rua Inês Pereira, S/N, Vila São Gonçalo - Cep: 63000-000 - (88) 3572-3900</Text>
        <Text style={styles.paragI2}>CRAS TIMBAÚBA: Rua João Paulo I, 620, Timbaúba - Cep: 63028-330 - (88) 3571-3882</Text>
        <Text style={styles.paragI2}>CRAS TRIÂNGULO: Rua Domingos Rodrigues Barbosa, 340,Triângulo - Cep: 63024-540 - (88) 3587-2664</Text>
        <Text style={styles.paragI2}>CREAS: Rua Delmiro Gouveia, 688, Salesiano - (88) 3587-1104</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua do Cruzeiro, 575 Centro - (88)35873349</Text>
        </View>
        </Modal>
        <TouchableOpacity onPress={() => this.setState({vis:100})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>JUCAS</Text>
          </View> 
        </TouchableOpacity>
        <Modal 
        isVisible={this.state.vis === 100} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS I: Cel Luiz Duarte, S/N, Centro – Cep: 63580-000 - (88) 3517-1122</Text>
        <Text style={styles.paragI2}>CRAS SÃO JOSÉ: Rua Padre Cícero, S/N, Centro - Cep: 63580-000 - (88) 3517-1740</Text>
        <Text style={styles.paragI2}>CRAS SÃO MATEUS: Trav. Alto do Tor. S/N. Alto do Tor. Cep: 63580-000 - (88) 3517-1740</Text>
        <Text style={styles.paragI2}>CREAS: Rua Antonio Palácio Cavalcante, 259, B.São José - (88) 3517-1740</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Manoel Venâncio, 24Centro - (88)996925801 (88)35171508</Text>
        </View>
        </Modal>
        <TouchableOpacity onPress={() => this.setState({vis:101})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>LAVRAS DA MANGABEIRA</Text>
          </View> 
        </TouchableOpacity>
        <Modal 
        isVisible={this.state.vis === 101} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS I: BR 230, S/N Centro - Cep: 63300-000 - (88) 3536-1623</Text>
        <Text style={styles.paragI2}>CRAS I: Rua Júlia Lobo, S/N. Caixad'água. Cep: 63300-000 - (88) 3536-1169</Text>
        <Text style={styles.paragI2}>CRAS II: Rua Coronel Joaquim Gonçalves, S/N, Centro - Cep: 63300-000 - (88) 3536-4125 (88) 3536-4030</Text>
        <Text style={styles.paragI2}>CRAS III: Travessa São Francisco, 05, Centro, Distrito Quitaiús - Cep: 63300-000 - (88) 3336-5134</Text>
        <Text style={styles.paragI2}>CREAS: Rua Chavier Angelo, 118, Centro - (88) 3536-1066</Text>
        </View>
        </Modal>
        <TouchableOpacity onPress={() => this.setState({vis:102})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>LIMOEIRO DO NORTE</Text>
          </View> 
        </TouchableOpacity>
        <Modal 
        isVisible={this.state.vis === 102} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS AD: Rua Manfredo Oliveira, 3180 - (88) 3423-2354</Text>
        <Text style={styles.paragI2}>CAPS II: Rua Evaristo Gadelha, 1070- Centro - (88) 3423-2535</Text>
        <Text style={styles.paragI2}>CRAS ANTONIO HOLANDA: Rua José Guerreiro Sobrinho, S/N, Antônio Holanda – Cep: 62930-000 - (88) 3423-1340</Text>
        <Text style={styles.paragI2}>CRAS CENTRO: Rua Coronel José Nunes,536, Centro - Cep: 62930-000 - (88) 3423-1641</Text>
        <Text style={styles.paragI2}>CREAS: Rua Coronel Antonio Joaquim, 1201,Centro - Cep: 62930-000 - (88) 3423-1518</Text>
        </View>
        </Modal>
        <TouchableOpacity onPress={() => this.setState({vis:103})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>MADALENA</Text>
          </View> 
        </TouchableOpacity>
        <Modal 
        isVisible={this.state.vis === 103} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS: Rua José Homero Saraiva Câmara, 120, Santa Terezinha - Cep: 63860-000 - (88) 3442-1032</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua. Simone Aparecida Rocha, 260 bairro Santa Terezinha - (88)981214837 Gardenia, (88)997161054 Conceição, (88)994323260 Danyele, (88)994916305 Nilrileide, (88)994825898 Marcela</Text>
        </View>
        </Modal>
        <TouchableOpacity onPress={() => this.setState({vis:104})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>MARACANAÚ</Text>
          </View> 
        </TouchableOpacity>
        <Modal 
        isVisible={this.state.vis === 104} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS AD MARACANAU: Rua João Conrado, 32- Pajuçara Pajucara - Cep: 61932-330 - (85) 3392-8461</Text>
        <Text style={styles.paragI2}>CAPS II: A.1, 145- Gereissati Jereissati Ii - Cep: 61900-310 - (85) 3392-8054</Text>
        <Text style={styles.paragI2}>CAPS INFANTO/JUVENIL: Rua Francisco Firmino, 120, Cento – Cep: 61900-000</Text>
        <Text style={styles.paragI2}>CRAS ACARACUZINHO: Rua 101, Nº 102, Acaracuzinho - (85) 3392-8244</Text>
        <Text style={styles.paragI2}>CRAS ALTO ALEGRE: Rua Tabajara, 1500, Alto Alegre II - Cep: 61921-455 - (85) 3392-8552 (85) 3392-8553</Text>
        <Text style={styles.paragI2}>CRAS ANTÔNIO JUSTA: Rua Manoel Pereira da Silva, 80, Alto da Mangueira - Cep: 61903-160 - (85) 3392-8241</Text>
        <Text style={styles.paragI2}>CRAS INDÍGENA: Rua Manuel Pereira, S/N, Santo Antônio Pitaguary - (85) 3392-8285</Text>
        <Text style={styles.paragI2}>CRAS JARDIM BANDEIRANTES: Av. Airton Senna, 800, Jardim Bandeirante - (85) 3392-8474 (85) 3392-8477</Text>
        <Text style={styles.paragI2}>CRAS JEREISSATI: Av. X, 254, Conj. Jereissati II - Cep: 61901-210 - (85) 3392-8885 (85) 3392-8893</Text>
        <Text style={styles.paragI2}>CRAS MUCUNÃ: Rua Manoel Mergulhão, 41, Mucunã - Cep: 61914-080 - (85) 3392-8884 (85) 3392-8879 (85) 3392-8876</Text>
        <Text style={styles.paragI2}>CRAS PAJUÇARA: Rua São Sebatião, 273, Pajuçara - (85) 3392-8289</Text>
        <Text style={styles.paragI2}>CRAS PARQUE SÃO JOÃO: Rua Padre Itapuan, 1389. Parque São João. - (85) 3401-9203</Text>
        <Text style={styles.paragI2}>CRAS PIRATININGA: Rua Guarani, 231. Centro. Cep: 61905-180 - (85) 3392-8248</Text>
        <Text style={styles.paragI2}>CREAS: Avenida 10, 415 Jereissati 2 - (85) 3392-8095</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Antônio de Alencar, 297. Centro. - (85)33829016 (85)99598866</Text>
        </View>
        </Modal>
        <TouchableOpacity onPress={() => this.setState({vis:105})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>MARANGUAPE</Text>
          </View> 
        </TouchableOpacity>
        <Modal 
        isVisible={this.state.vis === 105} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS AD: Rua Mundica PaulaS/N Centro - Cep: 61940-145 - (85) 3369-9365</Text>
        <Text style={styles.paragI2}>CAPS II: Rua José Mota, 58 - (85) 3369-5116</Text>
        <Text style={styles.paragI2}>CAPS INFANTO/JUVENIL: Rua Coronel Manoel Paula,472 - (85) 3341-1995</Text>
        <Text style={styles.paragI2}>CRAS AMANARI: Rua Virgílio de Andrade, 36 Amanari-Proxima a Lavanderia Pública - (85) 3369-9207</Text>
        <Text style={styles.paragI2}>CRAS ITAPEBUSSU: Rua Capitão José Marques, S/N Itapebussú - (85) 3341-2256</Text>
        <Text style={styles.paragI2}>CRAS NOVO MARANGUAPE: Rua Irmã Cristina, 110. Novo Marangupe. Prox. Hospital Gonzaguinha - (85) 3369-3118</Text>
        <Text style={styles.paragI2}>CRAS PARQUE IRACEMA: Rua Mariita Colares, 816- Parque Iracema. Referencia: Final da Rua do Horto. - (85) 3369-9193</Text>
        <Text style={styles.paragI2}>CRAS SAPUPARA: Rua Av. Tabatinga, 133 Novo Gereraú- Prox a Praça. - (85) 3341-8382</Text>
        <Text style={styles.paragI2}>CREAS: Rua Napoleão Lima, 209, Centro - Cep: 61940-000 - (85) 3341-2764</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Napoleão Lima, 331 Centro - (88)33829016 (88)999598866</Text>
        </View>
        </Modal>
        <TouchableOpacity onPress={() => this.setState({vis:106})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>MARCO</Text>
          </View> 
        </TouchableOpacity>
        <Modal 
        isVisible={this.state.vis === 106} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS II: Rua Guido Osterno, 713 - (88) 3664-1710</Text>
        <Text style={styles.paragI2}>CRAS SEDE: Rua Governador Raul Barbosa, 1051, Coqueirinho - Cep: 62560-000 - (88) 3664-1077</Text>
        <Text style={styles.paragI2}>CRAS TRIÂNGULO: Rua Governador Raul Barbosa, S/N. Coqueirinho. Cep: 62560-000 - (88) 3664-1077</Text>
        <Text style={styles.paragI2}>CREAS: Rua 22 de Novembro, S/N, Centro - (88) 3664-1118</Text>
        </View>
        </Modal>
        <TouchableOpacity onPress={() => this.setState({vis:107})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>MARTINOPOLE</Text>
          </View> 
        </TouchableOpacity>
        <Modal 
        isVisible={this.state.vis === 107} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS: Rua Rufino Pereira, S/N, Matadouro - Cep: 62450-000 - (88) 3627-1362</Text>
        </View>
        </Modal>
        <TouchableOpacity onPress={() => this.setState({vis:108})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>MASSAPÊ</Text>
          </View> 
        </TouchableOpacity>
        <Modal 
        isVisible={this.state.vis === 108} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS: Rua Major José Paulino, S/N, Centro - (88) 3643-1526</Text>
        <Text style={styles.paragI2}>CRAS I: Rua Amadeu Albuquerque, 440. Cep: 62140-000 - (88) 3643-1526</Text>
        <Text style={styles.paragI2}>CREAS: Rua Major Felinto Aguiar, 23, Centro - (88) 3643-1304</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Major Felinto Aguiar, 23 Centro - (88)36431304</Text>
        </View>
        </Modal>
        <TouchableOpacity onPress={() => this.setState({vis:109})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>MAURITI</Text>
          </View> 
        </TouchableOpacity>
        <Modal 
        isVisible={this.state.vis === 109} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS II: Rua Marechal Lauriano Peixoto S/N Centro - Cep: 63210-000 - (88) 3552-1949</Text>
        <Text style={styles.paragI2}>CRAS BURITIZINHO: Rua João Lucas, S/N, Distrito de Buritizinho - Cep: 63210-000 - (88) 3552-1491</Text>
        <Text style={styles.paragI2}>CRAS PALESTINA: Rua São José, S/N, Distrito de Palestina - (88) 3552-1491</Text>
        <Text style={styles.paragI2}>CRAS SEDE: Rua Capitão Miguel Dantas, 151, Centro - Cep: 63210-000 - (88) 3552-1491</Text>
        <Text style={styles.paragI2}>CREAS: Rua Capitão Miguel Dantas, 151. Centro. Cep: 63210-000 - (88) 3552-1491</Text>
        </View>
        </Modal>
        <TouchableOpacity onPress={() => this.setState({vis:110})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>MERUOCA</Text>
          </View> 
        </TouchableOpacity>
        <Modal 
        isVisible={this.state.vis === 110} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS BEM ME QUER: Av. Pedro Sampaio, S/N. Cep: 62130-000 - (88) 3649-1136</Text>
        <Text style={styles.paragI2}>CRAS SONHO MEU: Rua Monsenhor Furtado, S/N. Centro. Cep: 62130000 - (88) 3649-1136</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Dom José, 100 Centro - (88)36491145 (88)992539096</Text>
        </View>
        </Modal>
        <TouchableOpacity onPress={() => this.setState({vis:111})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>MILAGRES</Text>
          </View> 
        </TouchableOpacity>
        <Modal 
        isVisible={this.state.vis === 111} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS I: Rua Joaquim Furtado de Moraes,30 Missionarias - Cep: 63250-000 - (88) 3553-1909</Text>
        <Text style={styles.paragI2}>CRAS FRANCISCA DO SOCORRO: Rua Valadares, S/N, Francisca do Socorro - Cep: 63260-000 - (88) 3553-1279</Text>
        <Text style={styles.paragI2}>CRAS FRANCISCO COELHO DA CRUZ: Vila Fronteiro, S/N, Zona Rural - Cep: 63260-000 - (88) 3553-1279</Text>
        <Text style={styles.paragI2}>CRAS PADRE CÍCERO: Vila Padre Cícero - (88) 3553-1279</Text>
        <Text style={styles.paragI2}>CREAS: Rua Jose Esmeraldo da Silva, 180, Centro - (88) 3553-1751</Text>
        </View>
        </Modal>
        <TouchableOpacity onPress={() => this.setState({vis:112})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>MILHÃ</Text>
          </View> 
        </TouchableOpacity>
        <Modal 
        isVisible={this.state.vis === 112} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS: Rua José Ferreira de Sousa, S/N, Centro – Cep: 63635-000 - (88) 3529-1626</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Pedro José de Oliveira, s/n Centro - (88)996352886</Text>
        </View>
        </Modal>
        <TouchableOpacity onPress={() => this.setState({vis:113})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>MIRAIMA</Text>
          </View> 
        </TouchableOpacity>
        <Modal 
        isVisible={this.state.vis === 113} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS: Rua José Linhares, 583, Alto - Cep: 62530-000 - (88) 3630-1092</Text>
        </View>
        </Modal>
        <TouchableOpacity onPress={() => this.setState({vis:114})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>MISSÃO VELHA</Text>
          </View> 
        </TouchableOpacity>
        <Modal 
        isVisible={this.state.vis === 114} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS CASSIMIRO FARIAS: Rua Coronel José Dantas, S/N, Centro - Cep: 63260-000 - (88) 3542-1865</Text>
        <Text style={styles.paragI2}>CRAS MATERNIDADE: Rua Tabelião José Jácome, S/N, Maternidade – Cep: 63260-000 - (88) 3542-1865</Text>
        <Text style={styles.paragI2}>CRAS RURAL: Rua do Comércio, S/N, Distrito de Jamacarú, Centro - (88) 3542-1865</Text>
        <Text style={styles.paragI2}>CREAS MUNICIPAL: Rua São Francisco, 252, Centro - (88) 3542-1193</Text>
        <Text style={styles.paragI2}>CREAS REGIONAL: Rua Duque de Caxias, S/N, Centro - (88) 3545-1267</Text>
        </View>
        </Modal>
        <TouchableOpacity onPress={() => this.setState({vis:115})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>MOMBAÇA</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 115} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS IRACEMA: Rua Antônio Felinto Granjeiro, 72. Vila Iracema. - (88) 3583-2287</Text>
        <Text style={styles.paragI2}>CRAS SÃO JOSÉ: Rua Júlio César de Alencar Freitas, S/N, São José - Cep: 63610-000 - (88) 3583-1198</Text>
        <Text style={styles.paragI2}>CREAS: Rua José Frutuoso Sá Benevides, 234, Centro - (88) 3583-1198</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Padre Sarmento, 165 Centro - (88)35832330 (88)996605625</Text>
        </View>
        </Modal>

        
        <TouchableOpacity onPress={() => this.setState({vis:116})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>MONSENHOR TABOSA</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 116} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS I: Avenida Rui Barbosa, 16- Centro - (88) 3696-2175</Text>
        <Text style={styles.paragI2}>CRAS: Av. Pessoa Pires, 01 - Cep: 63780-000 - (88) 3696-2180</Text>
        <Text style={styles.paragI2}>CREAS: Av. Antônio Souto, S/N, Centro - (88) 3696-1240</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Santo Antonio, 173 Centro - (88)36961167</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:117})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>MORADA NOVA</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 117} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS II: Rua Coronel Tibúrcio, 594, Girilândia – Cep: 62940-000 - (88) 3422-4500</Text>
        <Text style={styles.paragI2}>CRAS FAMÍLIA FELIZ I: Rua Antônio de Castro, S/N, Centro - Cep: 62940-970 - (88) 3422-2192</Text>
        <Text style={styles.paragI2}>CRAS FAMÍLIA FELIZ II: Rua Professora Aurélia, 76, São João do Aruaru - Cep: 62940-000 - (85) 3422-2192</Text>
        <Text style={styles.paragI2}>CREAS: Rua Raul Nogueira, Térreo B, Nº 2, Centro - Cep: 62940-970 - (88) 3422-1695</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Cipriano Maia Centro - (88)999808725</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:118})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>MORAÚJO</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 118} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS: Rua Raimundo Gomes, S/N, Centro - Cep: 62480-000 - (88) 3642-1443</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Av. Prefeito Raimundo Benicio, s/n Centro - (88)994821740 Conselheira Luiza, (88)992546235 Cons. Ana, (88)994884324 Cons. Silas</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:119})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>MORRINHOS</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 119} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS SEDE: Av. Alcides Rocha, S/N, São Luis - Cep: 62550-000 - (88) 3665-1164</Text>
        <Text style={styles.paragI2}>CRAS SÍTIO ALEGRE: Rua Doraci dos Santos, Sítio Alegre, Zona Rural - (88) 3665-1164</Text>
        <Text style={styles.paragI2}>CREAS: Rua Joaquim Cariolano Rocha, 82, Centro - (88) 3665-1227</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua 06 de setembro S/N - (88) 996311956</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:120})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>MUCAMBO</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 120} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS: Agrônomo José Alves, S/N, Centro – Cep: 62170-000 - (88) 3654-1137</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Monsenhor melo 295 - (88)36541576</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:121})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>MULUNGU</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 121} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS I: Rua Padre Benedito, S/N, Centro – Cep: 62764-000 - (85) 3328-1209</Text>
        <Text style={styles.paragI2}>CRAS: Rua Cel Justino Café, 372, Centro - Cep: 62764-000 - (85) 3328-1330</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Rodovia Santana do Cariri s/n - (85)33281314 33281130</Text>
        </View>

        </Modal>
        <TouchableOpacity onPress={() => this.setState({vis:122})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>NONA RUSSAS</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 122} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Alipio Gomes, s/n Centro/ Parque da Criança - (88) 36721924</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:123})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>NOVA OLINDA</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 123} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS: Rua Jeremias Pereira, 71, Centro - Cep: 63165-000  -(88) 3546-1551</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Rodovia Santana do Cariri s/n - (88)35461468 (88)35461280</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:124})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>NOVA RUSSAS</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 124} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS: Rua Francisco Lopes, S/N, Alto da Boa Vista - Cep: 62200-000 - (88) 3672-1324</Text>
        <Text style={styles.paragI2}>CREAS: Rua Quintino Bocaúna, S/N, Alto da Boa Vista - Cep: 62200-000 - (88) 3672-0495</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:125})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>NOVO ORIENTE</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 125} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS I: Rua Jk, 58, Centro – Cep: 63740-000 - (88) 3629-1398</Text>
        <Text style={styles.paragI2}>CRAS: Av. Francisco Rufino Vieira, S/N, Centro - (88) 3629-1431</Text>
        <Text style={styles.paragI2}>CREAS: Rua Coelho da Silva, 90, Centro - (88) 3629-1431</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Pedro Cavalheiro 280 - (88)997537492</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:126})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>OCARAS</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 126} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS I: Av. Cel Joao Felipe, 858, Centro – Cep: 62755-000 - (85) 3322-1356</Text>
        <Text style={styles.paragI2}>CRAS SEDE: Rua Francisco Correia dos Santos, São Pedro - Cep: 62755-000 - (85) 3322-1212</Text>
        <Text style={styles.paragI2}>CRAS SERENO: Rua Luis Gomes, Sereno - Cep: 62755-000 - (85) 3322-1029</Text>
        <Text style={styles.paragI2}>CRAS SERRAGEM: Estrada do Algodão, Serragem - Cep: 62755-000 - (85) 3322-1029</Text>
        <Text style={styles.paragI2}>CREAS: Rua Antonio José Correia, S/N, Centro - (85) 3322-1029 - (85) 3322-1020</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Av José Correia Lopes S/N - (85) 992748236</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:127})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>ORÓS</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 127} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS AD: Rua Custódio Nunes, 210, Centro – Cep: 63520-000 - (88) 3584-1239</Text>
        <Text style={styles.paragI2}>CRAS I: Rua Beira Rio, S/N, São Gerardo - (88) 3584-1422</Text>
        <Text style={styles.paragI2}>CRAS II: Rua 1º de Setembro, 497, São José - (88) 3584-1422</Text>
        <Text style={styles.paragI2}>CREAS: Rua Isac Cândido, S/N, Centro - Cep: 63520-000 - (88) 3584-1422</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Praça Anastácio maia 58 - (88) 35841416</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:128})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>PACAJUS</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 128} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS I: Rua Tenente Mario Teles, S/N, Croatá II – Cep: 62870-000 - (85) 3348-1834</Text>
        <Text style={styles.paragI2}>CRAS BANGUÊ: Rua Anunciada, 60, Banguê I - (85) 3348-1077 (85) 3348-1578</Text>
        <Text style={styles.paragI2}>CRAS COAÇU: Rua 23 de Maio, 237, Caaçu - (85) 3348-1077 (85) 3348-1578</Text>
        <Text style={styles.paragI2}>CRAS MANGABEIRA: Rua Manoel Galdino de Sousa, S/N. Limoeiro . - (85) 3348-1077 (85) 3348-1578</Text>
        <Text style={styles.paragI2}>CREAS: Rua 21 de Maio, 260, Coaçu - (85) 3348-1077 (85) 3348-1578</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Guarani 650 Centro - (85)33480679 (85) 989708867</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:129})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>PACATUBA</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 129} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS JEREISSATI: Rua 86, Nº 18, Jereissati II - Cep: 61800-000 - (85) 3384-3004</Text>
        <Text style={styles.paragI2}>CRAS PAVUNA: Rua da Paz, 285,Pavuna - Cep: 61800-000 - (85) 3545-1170</Text>
        <Text style={styles.paragI2}>CRAS SEDE: Rua Francisco Lopes Sobrinho, S/N, Alto São João - (85) 3345-2324</Text>
        <Text style={styles.paragI2}>CREAS: Rua Cel. José do Carmo, 1396, Centro - Cep: 61800-000 - (85) 3345-2172 (85) 3345-2321</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Major Cicero Franklin 1991 - (85) 33452322</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:130})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>PACOTI</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 130} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS I: Rua Padre Quiliano, 14, Centro - Cep: 62700-000 - (85) 3325-1374</Text>
        <Text style={styles.paragI2}>CRAS: Av. 13 de Maio, S/N, Centro - Cep: 62770-000 - (85) 3325-1413</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Praça Coronel José Cicero Sampaio 686 Centro - (85)986489635e 989684205</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:131})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>PACUJÁ</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 131} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS: Rua Dep. Fernando Melo, S/N, Centro - (88) 3641-1289</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Francisco Filizola 437 Centro - (85)93122706 992981230</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:132})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>PALHANO</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 132} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS: Rua Pedro Rodrigues Severino, 530, Centro - Cep: 62910-000 - (88) 3415-1467</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Monsenhor João Luiz 99 - (88) 993121224</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:133})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>PALMÁCIA</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 133} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS CLEMENTINO RODRIGUES CAMPELO: Rua Francisco de Queiroz, S/N, Centro - Cep: 62780-000 - (88) 3339-1182</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Francisco de Queiroz 591 Centro centro - (85) 991064055 (85) 992504277</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:134})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>PARACURU</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 134} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS I: Rua Coronel Pedro Barroso, S/N, Coreia – Cep: 62680-000 - (85) 3344-8809</Text>
        <Text style={styles.paragI2}>CRAS: Rua Maria Silva Costa, 10, Alagadiço – Cep: 62680-000 - (85) 3344-8816</Text>
        <Text style={styles.paragI2}>CRAS I: Rua Rita Moreira de Castro, S/N, Maleitas - Cep: 62680-000 - (85) 3344-8816</Text>
        <Text style={styles.paragI2}>CREAS: Avenida João Lopes Meireles, 508, Centro - (85) 3344-8808</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Jacauna Sales, 145 Centro - (85) 982150212 Cons. Liduina, (85) 981907734</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:135})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>PARAIPABA</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 135} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS AD PARAIPABA: Rua Antônio Eusébio, 252, Lagoa do Bebê – Cep: 62685-000 - (85) 3363-2043</Text>
        <Text style={styles.paragI2}>CAPS II: Rua Luis Braga, 04 - (85) 3363-1332</Text>
        <Text style={styles.paragI2}>CRAS: Rua Maria Clarice Moreira, 200, Boa Esperança - Cep: 62685-000 - (85) 3363-1380</Text>
        <Text style={styles.paragI2}>CREAS: Rua João Viana Pessoa, S/N, Loteamento - Cep: 62580-000 - (88) 3363-1380</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Miguel de Paiva, 200 Centro - (85)982159200 cons. Maninha, (85)991350625</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:136})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>PARAMBU</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 136} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS I: Rua Joaquim Mateus da Silva, S/N, Centro – Cep: 63680-000 - (88) 3344-1780</Text>
        <Text style={styles.paragI2}>CRAS: Rua Tia Nega, S/N, Centro - Cep: 63680-000 - (88) 3448-1150</Text>
        <Text style={styles.paragI2}>CRAS: Av. Dep. Joaquim Noronha Mota, S/N - Cep: 63680-000 - (88) 3448-1028</Text>
        <Text style={styles.paragI2}>CREAS: Rua Joaquim Mateus, S/N, Horácio Alves - (88) 3448-1080</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Pedro Alves da Costa, 131 – Centro - (88)3448.1080 (88)999107163</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:137})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>PARAMOTI</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 137} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS: Rua Aramis Paiva, S/N, Centro - Cep: 62736-000 - (88) 3320-1179</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Raimundo Abel, 494 Vicente Farias - (85)33201320, (85)991387132 Zé Vando</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:138})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>PEDRA BRANCA</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 138} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS I: Rua Álvaro Cesário Dantas, 150- Santa Úrsula - (88) 3515-2423</Text>
        <Text style={styles.paragI2}>CRAS SANTA CRUZ DO BANABUIU: Rua Geralda Bezerra,14, Sede do Distrito de Santa Cruz do Banabuiu - (88) 3515-2419</Text>
        <Text style={styles.paragI2}>CRAS SEDE: Rua Furtunato Silva, 116, Bom Princípio - Cep: 63630-000 - (85) 3515-2419</Text>
        <Text style={styles.paragI2}>CREAS: Rua Augusto Vieira, 06, Centro - Cep: 63630-000 - (88) 3515-2452</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Augusto Vieira, 24 - Centro - (88)35151201 ou (88)997280871 Fernanda</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:139})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>PENAFORTE</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 139} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS: Rua Vitória Novaes, S/N. Centro. - (88) 3559-1289</Text>
        <Text style={styles.paragI2}>CREAS: Rua Nossa Senhora do Socorro, 487 – Centro - (88) 3559-1289</Text>
        </View>
        </Modal>
        
        <TouchableOpacity onPress={() => this.setState({vis:140})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>PENTECOSTE</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 140} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS I: Rua Francisco Firmos/N Barreiros - Cep: 62640-000 - (85) 3352-2619</Text>
        <Text style={styles.paragI2}>CRAS RURAL: Rua Antônio Martins Bandeira, 718, Acampamento - (85) 3352-2613</Text>
        <Text style={styles.paragI2}>CRAS SEDE: Rua Francisco Oliveira Lima, S/N, São Francisco - Cep: 62640-000 - (85) 3352-2616</Text>
        <Text style={styles.paragI2}>CREAS: Rua São José, S/N, Itamaraty - (85) 3352-2607</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Aderlou Pinheiro s/n - (85) 33522612</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:141})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>PEREIRO</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 141} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS: Rua José Braga Falcão, S/N, Centro - Cep: 63460-000 - (88) 3527-1262</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Coronel Porto116 Centro - (88)996676628 Moises</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:142})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>PINDORETAMA</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 142} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS: Av. Capitão Nogueira, 1125, Centro - Cep: 62860-000 - (85) 3375-1427</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua José Franco 1028 Centro - (85) 33751509</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:143})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>PIQUET CARNEIRO</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 143} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS I: Rua Zacarias Pinheiro da Silva, S/N, centro – Cep: 63605-000 - (88) 3516-1811</Text>
        <Text style={styles.paragI2}>CRAS: Rua José Bezerra Lima, S/N, Piquezinho - Cep: 63605-000 - (88) 3516-1813</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Sacarias Pinheiro da Silva S/N - (88)997614405</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:144})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>PIRES FERREIRA</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 144} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS: Av. João Taumaturgo Dias, 23, Centro - Cep: 62255-000 - (88) 3651-1096</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Major Talmaturgo 18 centro - (88) 997137503</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:145})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>PORANGA</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 145} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS CASA DA FAMÍLIA: Av. Dr. Epitácio de Pinho, S/N, Vila Nova - Cep: 62220-000 - (88) 3658-1144</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:146})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>PORTEIRAS</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 146} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS I: Rua Mestre Zuca, S/N, Centro - (88) 3557-1452</Text>
        <Text style={styles.paragI2}>CRAS II: Rua Vicente Marrocos, 53, Conj. Sol Nascente - (88) 3557-1452</Text>
        <Text style={styles.paragI2}>CRAS II: Distrito Simão - Zona Rural - (88) 3557-1452</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Expedito Alves de Santana, s/n Centro - (88) 35571673</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:147})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>POTENGI</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 147} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS: Rua Manoel Monteiro, S/N, Potengi - Cep: 63160-000 - (88) 3538-1100</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua José Edmilson Rocha, 220 Centro - (88)992991779 (88)992989214 Cons. Lucia</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:148})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>POTIRETAMA</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 148} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS CASA DA FAMÍLIA: Rua Honor Diógenes, S/N, Centro - Cep: 62900-000 - (88) 3435-1212</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua AnTônio Francisco de Moura 640 - (88) 996445077</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:149})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>QUITERIANOPOLIS</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 149 } 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS: Av. Laurindo Gomes, S/N, Colinas - Cep: 63-650-000 - (88) 3657-1535</Text>
        <Text style={styles.paragI2}>CREAS: Rua Sr. Modesto Lino, 80, Centro - Cep: 63650-000 - (88) 3657-1341</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Alexandre Melo, 70 Centro - (88)999819748 (88)996686838 Cons. Romario</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:150})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>QUIXADÁ</Text>
          </View> 
        </TouchableOpacity>

                <Modal 
        isVisible={this.state.vis === 150} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS AD : Rua José Eneas Monteiro Lessa, 404 - (88) 3412-0139</Text>
        <Text style={styles.paragI2}>CAPS II: José de Queiroz Pessoa, 1206, Centro – Cep: 63900-221 - (88) 3412-0139</Text>
        <Text style={styles.paragI2}>CRAS CAMPO NOVO: Av. Presidente Vargas, S/N, Campo Novo - (88) 3412-1786</Text>
        <Text style={styles.paragI2}>CRAS CAMPO VELHO: Rua Presidente Kennedy, S/N, Alto São Francisco - (88) 3412-1786</Text>
        <Text style={styles.paragI2}>CRAS RENASCER: Rua Nova Vida, 13, Renascer - (88) 3412-1786</Text>
        <Text style={styles.paragI2}>CREAS: Rua Oscar Barbosa, 865, Centro - Cep: 63900-207 - (88) 3412-1786</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Av. Placido Castelo, s/n Terminal Rodoviario - (88)999779465</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:151})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>QUIXELÓ</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 151} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS: Rua Nova Vitória da Silva, S/N, Centro  - (88) 3579-1401</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Luiz Vicente 150 – Perimetral - (88) 35791406 (88) 996574998</Text>
        </View>
        </Modal>
      
        <TouchableOpacity onPress={() => this.setState({vis:152})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>QUIXERAMOBIM</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 152} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS AD III ALPENDRE: Rua Dr Miguel Pinto, 75, Centro – Cep: 63800-000 - (88) 3441-1217</Text>
        <Text style={styles.paragI2}>CAPS II: Rua Dom Quintino, 267 – Cep: 63800-000 - (88) 3441-1112</Text>
        <Text style={styles.paragI2}>CAPS II: Rua Dom Quintino, 267 – Cep: 63800-000 - (88) 3441-1112</Text>
        <Text style={styles.paragI2}>CRAS II: Rua João Tertulino, 122, Matadouro - (88) 3441-1326</Text>
        <Text style={styles.paragI2}>CRAS III: Rua João Lúcio do Carmo, 11, Pompeia - (88) 3441-1849</Text>
        <Text style={styles.paragI2}>CREAS: Rua Dr. Monteiro Filho, 08, Centro - (88) 3441-1574</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua 14 de agosto 150 Centro - (88) 34411260</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:153})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>QUIXERÉ</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 153} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS I: Rua Padre Joaquim de Menezes, 1179 - Cep: 62920-000 - (88) 3443-1380</Text>
        <Text style={styles.paragI2}>CRAS II LAGOINHA: Rua Vicente Rosa, S/N, Distrito Lagoinha - Cep: 62920-000 - (88) 3443-1382</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Manuel Gonçalves, 685 Centro - (88)981350683 (88)997551632 (88)998054474 Cons. Flávia</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:154})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>REDENÇÃO</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 154} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS I: Avenida da Abolição, S/N, Centro – Cep: 62790-000 - (85) 3332-2275</Text>
        <Text style={styles.paragI2}>CRAS ANTÔNIO DIOGO: Rua Tereza Cristina, 339, Centro - Cep: 62791-000 - (85) 3332-9458</Text>
        <Text style={styles.paragI2}>CRAS SEDE: Av. Abolição, 19, Centro - Cep: 62790-000 - (85) 3332-1762</Text>
        <Text style={styles.paragI2}>CREAS: Rua Ludugero Guilherme Costa, 123, Centro - Cep: 62790-000 - (85) 3332-1107</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Marechal Deodoro, 17 Centro - (85)33322234</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:155})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>RERIUTABA</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 155} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS PREFEITO DR. JOSÉ DE SÁ: Rua Coronel José Teodoro, S/N, Centro – Cep: 62260-000 - (88) 3637-1078</Text>
        <Text style={styles.paragI2}>CRAS RURAL: Distrito de Amanaiara, Praça da Estação - Cep: 62260-000 - (88) 3637-1078</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Luiz Taumaturgo Furtado S/N - (88)999976341</Text>
        </View>
        </Modal>
        
        <TouchableOpacity onPress={() => this.setState({vis:156})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>RUSSAS</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 156} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS II: Rua Vila Matoso, 649, Vila Gonçalves – Cep: 62900-000 - (88) 3411-8417</Text>
        <Text style={styles.paragI2}>CRAS BUSCANDO TRANSFORMAÇÃO SOCIAL: Rua Dr. Daltro Holanda, S/N, Centro - Cep: 62900-000 - (88) 3411-0626</Text>
        <Text style={styles.paragI2}>CRAS CONSTRUINDO O FUTURO: Rua Scipião Simões, 160, Centro - Cep: 62900-000 - (88) 3411-1277</Text>
        <Text style={styles.paragI2}>CREAS: Avenida Dom Lino, 695. Centro. Cep: 62900-000 - (88) 3411-8424</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Cônego Agostinho - (88)34118425</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:157})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>SABOEIRO</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 157} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS: Av. Manuel Ferreira de Sousa, 79, Nossa Senhora Aparecida - (88) 3526-1720</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Fernandes Bastos, 125 Centro - (88) 999705219 (88) 981447646 (88)981170263 Cons Richelle</Text>
        </View>
        </Modal>

<TouchableOpacity onPress={() => this.setState({vis:158})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>SALITRE</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 158} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS I: Rua João Libânio, S/N, Centro - Cep: 63115-000 - (88) 3537-1211</Text>
        <Text style={styles.paragI2}>CRAS II: Av. São José, Distrito Lagoa dos Crioulos - (88) 3537-1204</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Av Fortaleza, 271 Centro - (88)35371003 (88)992611034 (88)992799076 (88)993263949</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:159})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>SANTA QUITÉRIA</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 159} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS II: Rua Delmiro Gouveia, S/N, Centro – Cep: 62280-000 - (88) 3628-0152</Text>
        <Text style={styles.paragI2}>CRAS LISIEUX: Distrito de Lisieux - Zona Rural - (88) 3628-0644</Text>
        <Text style={styles.paragI2}>CRAS MACARAÚ: Distrito de Macaraú - Santa Quitéria - (88) 3628-0644</Text>
        <Text style={styles.paragI2}>CRAS SEDE: Cel. Manoel Alves, 368, Centro - Cep: 62280-000 - (88) 3628-0644 (88) 3228-0175</Text>
        <Text style={styles.paragI2}>CREAS: Avenida Cel. Manoel Alves, 386 – Centro - (88) 3628-0283</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua João Rodrigues Pinto, s/n Centro Ginásio Poliesportivo - (88)996728780 Conselheira Priscila</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:160})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>SANTANA DO ACARAÚ</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 160} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS I: Rua Dr. José Mendes, 209- Centro - (88) 3644-1880</Text>
        <Text style={styles.paragI2}>CRAS JOSÉ RAIMUNDO: Rua Maria Vidal, S/N, Tutambeira - Cep: 62150-000 - (88) 3644-1631</Text>
        <Text style={styles.paragI2}>CRAS SEDE: Av. Dr. Manoel Joaquim, S/N, João Alfredo - Cep: 62150-000 - (88) 3644-1631</Text>
        <Text style={styles.paragI2}>CREAS: Rua Dr Manoel Joaquim,S/N, Centro - Cep: 62150-000 - (88) 3644-1631</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Santo Antônio, 1266 - Centro - (88)36611200 (88)996990281 (88)997134557 Cristian (88)992272098 Joel</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:161})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>SANTANA DO CARIRI</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 161} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS: Rua Licostrato Nuvens, 367, Centro - (88) 3545-1267</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Nicostrato Nuvem, 245 Centro - (88)997885380 (88)997145304 Cons. Tatiana (88)997533637 Cons. Daniele</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:162})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>SÃO BENEDITO</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 162} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS SRA. DE FATIMA: Rua Deputado Vicente Ribeiro, 611, Centro – Cep: 62370-000 Centro - Cep: 62370-000 - (88) 3626-2174</Text>
        <Text style={styles.paragI2}>CRAS I: Av. Tabajara, 1500, Monsenhor Otacílio - Cep: 62370-000 - (88) 3626-6210</Text>
        <Text style={styles.paragI2}>CRAS II: Rua Irineu Pinto da Silveira, S/N, Vila Prado - Cep: 62370-000 - (88) 3626-6210</Text>
        <Text style={styles.paragI2}>CREAS: Rua Italiano Júlio Filizola, 784 – Centro - (88) 3626-6210</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Abdoral Rodrigues 1000 - (88) 99193001</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:163})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>SÃO GONÇALO DO AMARANTE</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 163} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS II: Av. Isabel Monteiro, 137- Palestina - (88) 3315-7171</Text>
        <Text style={styles.paragI2}>CRAS PECÉM: Rodovia CE 121, Km 10 - (85) 3315-4490</Text>
        <Text style={styles.paragI2}>CRAS SEDE: Av. Santos Dumont, 50, Centro - Cep: 62670-000 - (85) 3315-4480</Text>
        <Text style={styles.paragI2}>CREAS: Rua Santos Dumont, S/N, Centro - (88) 3315-6054</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Francisco Guilherme, 12 Centro - (85)33157253</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:164})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>SÃO JOÃO DO JAGUARIBE</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 164} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS: Rua Cônego Climério Chaves, 199, Centro - Cep: 62965-000 - (88) 3420-1525</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Cônego Climério Chaves, s/n Centro - (88)999917782 Cons. Lúcia Chaves (88)999308300 Cons Lúcia Moura</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:165})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>SÃO LUIS DO CURU</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 165} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS: Rua Sabino Nunes, S/N, Centro - Cep: 62665-000 - (85) 3355-1015</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Pedro Cipriano, 81 Centro - (88)996630620 (88)998207815 Cons. Hugo Deleon</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:166})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>SENADOR POMPEU</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 166} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS I: Rua Francisco Leandro, S/N- Centro</Text>
        <Text style={styles.paragI2}>CRAS ALTO DO CRUZEIRO: Rua J, 33, Alto do Cruzeiro - Cep: 63600-000 - (88) 3449-1353</Text>
        <Text style={styles.paragI2}>CRAS PAVÃOZINHO: Rua Geminiano Vitoriano de Oliveira, S/N, Pavãozinho - Senador Pompeu I - (88) 3449-1353</Text>
        <Text style={styles.paragI2}>CREAS: Rua Fco Leandro, S/N, Centro - (88) 3449-1353</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Franco Magalhães, 174 Centro - (88)34491006 (88)999956633 Cons. Denis</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:167})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>SENADOR SÁ</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 167} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS: Av. 23 de Agosto, S/N, Centro – Cep: 62470-000 - (88) 3668-1077</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Av 23 de Agosto, s/n Centro - (88)993581362 (88)993581362 (88)994346411 (88)992417831</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:168})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>SOBRAL</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 168} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS AD DE SOBRAL: Travessa Raimundo Medeiros da Frota, 241, Campo dos Velhos -Cep: 62010-970 - (88) 3611-1609</Text>
        <Text style={styles.paragI2}>CAPS II: Rua Maestro José Pedro, 275- Centro - (88) 3611-7548 (88) 3611-3414</Text>
        <Text style={styles.paragI2}>CRAS ARACATIAÇU: Rua Dom José Tupinambá da Frota, 95, Centro - (85) 3615-6178</Text>
        <Text style={styles.paragI2}>CRAS DOM JOSÉ: Rua Francisco Costa, 380, Dom José - Cep: 62015-045 - (85) 3614-2336</Text>
        <Text style={styles.paragI2}>CRAS IRMÃ OSWALDA: Rua Olavo Bilac, S/N, Alto da Brasília - Cep: 62040-387 - (85) 3611-4666</Text>
        <Text style={styles.paragI2}>CRAS JAIBARAS: Rua do Comércio, 263, Centro - (85) 3615-2308</Text>
        <Text style={styles.paragI2}>CRAS MIMI MARINHO: Rua Hélio Arruda Coelho, 120, Dom Expedito - Cep: 62050-230 - (88) 3614-4276</Text>
        <Text style={styles.paragI2}>CRAS REGINA JUSTA: Rua Jerusalém, S/N, Vila União - Cep: 62021-042 - (85) 3614-2323</Text>
        <Text style={styles.paragI2}>CREAS: Rua Pinto Lemos, S/N, Centro - (88) 3695-5200</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Ildefonso Cavalcante S/N -(88)36112332</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:169})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>SOLONÓPOLE</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 169} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS I: Rua Manoel Rodrigues Pinheiro, 600, Domingos Sávio – Cep: 63620-000</Text>
        <Text style={styles.paragI2}>CRAS: Rua Francelina Pinheiro Landim, 1032, Domingo Silvio - Cep: 63620-000 - (85) 3518-1211</Text>
        <Text style={styles.paragI2}>CREAS: Rua Antonio Valterno Nogueira, 07, Centro - (85) 3518-1211</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Antonio Valtero Nogueira, 3 Centro - (88)998204550</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:170})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>TABULEIRO DO NORTE</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 170} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS: Olho D'água da Bica - (88) 3424-4084</Text>
        <Text style={styles.paragI2}>CRAS SEDE: Rua Emília Chaves, 4928, 08 de Setembro - Cep: 62960-000 - (88) 3424-2328</Text>
        <Text style={styles.paragI2}>CREAS: Rua Manuel Franklin, 4996, Oito de Setembro - (88) 3424-2995</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Travessa Pedro Xavier, 78 Centro - (88)997527178 (88)997482333 Cons. Neudo Maia</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:171})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>TAMBORIL</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 170} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS II: Rua Joaquim Macedo de Melo, S/N, Centro – Cep: 63750-000 - (88) 3617-1408</Text>
        <Text style={styles.paragI2}>CRAS SEDE: Rua Tabeliã Ana de Araújo Ribeiro, S/N,Praça da Matriz, Centro - Cep: 63750-000 - (88) 3617-1888</Text>
        <Text style={styles.paragI2}>CRAS SUCESSO: Rua Livino Teixeira, 110, Centro – Cep: 63765-000 - (88) 3617-1888</Text>
        <Text style={styles.paragI2}>CREAS: Rua Manoel Salustiano de Melo, 335 – Monte Castelo. Cep: 63750-000 - (88) 3617-1888</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Bairro Monsenhor Holanda – Tamboril – Ce - (88)993522849 Cons. Gerlandia Martins</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:172})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>TARRAFAS</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 172} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS: Rua Antônio Gonçalves Valença, 153, Centro - Cep: 63145-000 - (88) 3549-1020</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Av Maria Luiza Leite Santos, s/n Bulandeira - (88)35491054 (88)994090596 Cons. Gracileide (88)993465085 Cons. Neci</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:173})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>TAUÁ</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 174} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS AD : Rua Joaquim Oliveira Filho, 172- Vila Jatahi - (88) 3437-3679</Text>
        <Text style={styles.paragI2}>CAPS II: Rua Horácio Marques José Hosmo, 624 - (88) 3671-1129</Text>
        <Text style={styles.paragI2}>CRAS ALDEOTA: Av. Hélio Pedrosa Castelo, S/N, Aldeota - Cep: 63660-000 - (88) 3437-3999</Text>
        <Text style={styles.paragI2}>CRAS BEZERRA E SOUSA: Rua Júlio Gonçalves da Silva, 956, Bezerra E Sousa - Cep: 63660-000 - (88) 3437-3844</Text>
        <Text style={styles.paragI2}>CRAS COLIBRIS: Rua Lulu Lima, 224, Tauazinho - Cep: 63660-000 - (88) 3437-3038</Text>
        <Text style={styles.paragI2}>CREAS: Av. Cel. Lourenço Feitosa, 255, Centro - Cep: 63660-000 - (88) 3437-3622</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Av Lourenço Feitosa, 107Centro - (88) 999925871</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:174})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>TEJUÇUOCA</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 174} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS: Av. Gabriel Aguiar Filho, 764, Centro - Cep: 62610-000 - (85) 3323-1287</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua José Andrade de Sousa, - (88)992316630 Cons. Adriano</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:175})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>TIANGUÁ</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 175} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS II: Rua Maestro Quincas Bezerril, 445, Centro – Cep: 62320-000 - (88) 3671-1129</Text>
        <Text style={styles.paragI2}>CRAS I: Rua Vereador Raimundo Lima, S/N – Cep: 62.320-000 - (88) 3671-1129</Text>
        <Text style={styles.paragI2}>CRAS SANTO ANTONIO: Rua Mozart Albuquerque, S/N - Cep: 62320-000 - (88) 3671-1129</Text>
        <Text style={styles.paragI2}>CREAS: Rua Vereador Raimundo Lima, 265 Frei Galvão. Cep: 62320-000 - (88) 3671-2655</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Madalena Nunes, 295 Centro - (88)9928758</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:176})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>TRAIRI</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 176} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS I: Rua Vila Maneco, S/N- Centro - (85) 3351-1300</Text>
        <Text style={styles.paragI2}>CRAS CRISTINA CHAVES REBOUÇAS: Av. Senador Virgílio Távora, 35, Córrego São Gonçalo - Cep: 62690-000 - (85) 3551-1721</Text>
        <Text style={styles.paragI2}>CRAS MARIA APOLINE BARROSO MOURA: Av. Salvador Martins, 02, Volta do S. - Cep: 62690-000 - (85) 3551-1721</Text>
        <Text style={styles.paragI2}>CRAS PADRE RODOLFO FERREIRA DA CUNHA: Rua Abraão Ferreira Cunha, S/N, Canaã - Cep: 62690-000 - (85) 3551-1721</Text>
        <Text style={styles.paragI2}>CREAS: Rua José da Silveira, 155, Centro - Cep: 62690-000 - (85) 3351-1721</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:177})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>TURURU</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 177} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS: Av. Joana Pires, S/N - Cep: 62655-000 - (85) 3358-1288</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Maria Gloria da Conceição, S/N Centro - (85)33581288 (85) 992129100 Cons. Kelma</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:178})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>UBAJARA</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 178} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS I: Rua Padre Francisco Pinto, 130. Monte castelo – Cep: 62350-000 - (88) 3634-1434</Text>
        <Text style={styles.paragI2}>CRAS CRIZÂNTEMO SOUSA CUNHA: Tenente Ramiro de Sousa, Monte Castelo - Cep: 62350-000 - (88) 3634-1438</Text>
        <Text style={styles.paragI2}>CRAS MARIA MOREIRA MELO: Rua Antônio de Barros, S/N, Sebastião Gomes Parente - Cep: 62350-000 - (88) 3634-1438</Text>
        <Text style={styles.paragI2}>CREAS: Rua Padre Francisco Pinto, 248, Monte Castelo - (88) 3634-1438</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Prudencio Furtado, s/n Centro - (88)36342205 (88)992202266 Cons. Luciene (88)998707828 Cons. Pedro</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:179})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>UMARI</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 179} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS: Rua Alto Santo, 34, Centro - (88) 3578-1441</Text>
        <Text style={styles.paragI2}>CREAS: Avenida D. Quintino, 288, Centro - (88) 3578-1441</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Três de Agosto,79 Centro - (88)988429736 Cons Eduardo (88)988161198 Cons Danilo (88)988260442 Cons Maria Nazaré</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:180})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>UMIRIM</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 180} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS I: Rua do Cruzeiro, S/N, Centro - (85) 3364-1314</Text>
        <Text style={styles.paragI2}>CRAS DISTRITO: Distrito de São Joaquim, Umirim - (85) 3364-1111</Text>
        <Text style={styles.paragI2}>CRAS I: Rua Bonfim de Soares, S/N, Centro - Cep: 62660-000 - (85) 3364-1111</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua do Cruzeiro, 57 Cruzeiro - (85)33641488 (85)981250335 Cons Netinho (85)992234861 Cons Anderson (85)996192988 Cons Mundico</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:181})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>URUBURETAMA</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 181} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS I: Rua Gonas Barroso Braga, S/N- Centro - (85) 3353-1521</Text>
        <Text style={styles.paragI2}>CRAS: Rua José Lotus Cabral, S/N - Cep: 62650-000 - (85) 3353-1116</Text>
        <Text style={styles.paragI2}>CREAS: Rua General Cordeiro, 596, Centro - Cep: 62650-000 - (85) 3353-1019</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Farmaceutico José Rodrigues, 802 Centro - (85)997634074 (85)996085343 Cons. Gilson</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:182})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>URUOCA</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 182} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CRAS DISTRITO DE CAMPANÁRIO: Av. Alberto Batista Fontenele, S/N, Centro - Cep: 62460-000 - (88) 3648-1291</Text>
        <Text style={styles.paragI2}>CRAS SEDE: Av. Antônio Moreira, S/N, Centro - Cep: 62460-000 - (88) 3648-1039</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Dom José Tupimamba da Frota, 65 Centro - (88)994808522 (88)36481078</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:183})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>VARZEA ALEGRE</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 183} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS I: Dr Leandro Correia, S/N, Centro – Cep: 63540-000 - (88) 3541-1346</Text>
        <Text style={styles.paragI2}>CRAS I: Av. Tenente Antônio Gonçalves, 8, Juremal - Cep: 63840-000 - (88) 3541-1024</Text>
        <Text style={styles.paragI2}>CRAS II: Rua Glicério Gomes, 178, Riachinho - Cep: 63840-000 - (88) 3541-1025</Text>
        <Text style={styles.paragI2}>CREAS: Rua Dep. Luis Otacílio Correia, 348 – Centro. Cep: 63540-000 - (88) 3541-2384</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Deputado Luis Otacilio Correa, 347 Centro - (88)35412984 CREAS (88)992176612</Text>
        </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({vis:184})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>VARJOTA</Text>
          </View> 
        </TouchableOpacity>
        <Modal 
        isVisible={this.state.vis === 184} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Jose de Alencar, 96 Centro - (88)996050000 (88)997107194 Cons. Sidney</Text>
        </View>
        </Modal>


        <TouchableOpacity onPress={() => this.setState({vis:185})}>
          <View style={styles.btnBox}>
            <Text style={styles.btnText}>VIÇOSA DO CEARÁ</Text>
          </View> 
        </TouchableOpacity>

        <Modal 
        isVisible={this.state.vis === 185} 
        onBackdropPress={() => this.setState({ vis: null })}
        animationIn="slideInLeft"  
        backdropOpacity={0.9}>
        <View style={styles.modalContent}>
        <Text style={styles.paragI2}>CAPS I: Rua José Filgueira, S/N- Centro Centro - Cep: 62300-000 - (88) 3632-1544</Text>
        <Text style={styles.paragI2}>CRAS: Distrito da Passagem da Onça, S/N, Zona Rural - (88) 3632-1544</Text>
        <Text style={styles.paragI2}>CRAS IVÁ DOS VIEIROS: Distrito Ivá dos Vieiros - (88) 3632-1544</Text>
        <Text style={styles.paragI2}>CRAS SEDE: Loteamento Manoel Joana, S/N, Fátima - Cep: 62300-000 - (88) 3632-1544</Text>
        <Text style={styles.paragI2}>CREAS: Rua Loteamento Manoel Joana, S/N, Fatima - (88) 3632-1544</Text>
        <Text style={styles.paragI2}>CONSELHO TUTELAR: Rua Major Felisardo Pinho Pessoa, 388 Centro - (88)36325166 (88)999046532</Text>
        </View>
        </Modal>

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
    
    justifyContent:'center',
    alignItems: 'center',
    width: 200,
    

  },
  btnBox:{
    justifyContent:'center',
    alignItems:'center',
    margin:5,
    fontSize: 12,
    
    
  },
  BoxFlat:{
    margin:5,
    marginBottom:5,
  },
  modal: {
    borderRadius: 10,
    padding: 15,
    

  },
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    borderColor: "rgba(0, 0, 0, 0.1)",
    
  },
  modal2: {
    
    height:300,
    backgroundColor: "#ddd"
  },
  modal3: {
    height: 300,
    width: 300
  },
  modal4: {
    height: 300
  },
  btnText:{
    textAlign: 'center',
    width:200,
    borderRadius:6,
    backgroundColor:'#FF7F50'
  },
  img: {
    
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
 paragI2: 
 {
   marginBottom: 3,
   fontSize: 12,
   color: '#000',
 },
});
