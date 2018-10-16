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
export default class Prev extends Component<Props> {

  render() {
    return (
      
      <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        <Text style={styles.parag}>A SPD desenvolve ações com crianças e adolescentes nos municípios cearenses reconhecendo a importância da autonomia, cidadania e direitos humanos à juventude. Oferece por meio dos programas de prevenção um espaço dialógico reflexivo, afetivo e respeitoso sobre as diferentes questões que permeiam a prevenção aos problemas relacionados ao uso de drogas, contemplando ainda família e comunidade.</Text>
        <Text style={styles.parag}>Hoje sabemos que a prevenção é umas das estratégias mais eficientes e menos danosas para proteger as pessoas dos problemas relacionados ao uso de drogas. As ações preventivas devem ser pautadas em princípios éticos e pluralidade cultural, orientando-se para a promoção de valores voltados à saúde física e mental, individual e coletiva, ao bem-estar, à integração socioeconômica e a valorização das relações familiares, considerando seus diferentes modelos.</Text>
        <Text style={styles.parag}>O Sistema Integrado de Prevenção (SIP) da SPD desenvolve projetos de prevenção aos problemas relacionados ao uso de álcool e outras drogas em escolas, famílias e comunidades.</Text>
        <View style={styles.boxImg}>
          <Image style={styles.img2} source={require('../images/j_acao.png')} />
        </View>
        <Text style={styles.title}>Nome do projeto</Text>
        <Text style={styles.paragI}>Juventude em Ação</Text>
        <Text style={styles.title}>Público-alvo:</Text>
        <Text style={styles.paragI}>jovens entre 16 e 22 anos</Text>
        <Text style={styles.title}>Descrição:</Text>
        <Text style={styles.paragI}>O Projeto Juventude em Ação objetiva promover a prevenção ao uso de drogas junto aos alunos das Escolas de Ensino Médio da rede pública do estado, de seus familiares e pessoas no entorno de suas comunidades, através de ações de cidadania e de conscientização sobre os problemas físicos, sociais e emocionais que decorrem do consumo de drogas, bem como o apontamento de estratégias de prevenção ao seu uso no contexto familiar, escolar, comunitário, outros.</Text>
        <Text style={styles.paragI}>O projeto inclui a aplicação do jogo interativo ‘Na Trilha da Prevenção’, concurso artístico-cultural e rodas de conversa (Terapia Comunitária Integrativa) que envolvem familiares e lideranças locais para fortalecimento de vínculos, buscando prestar orientações quanto a temática e fortalecer os laços escolares, familiares e comunitários.</Text>
        <Text style={styles.parag}>Contatos: (85) 3238 1884 / 3238 6283</Text>
        
        <View style={styles.boxImg}>
          <Image style={styles.img2} source={require('../images/juvfuturo.png')} />
        </View>
        <Text style={styles.title}>Nome do projeto</Text>
        <Text style={styles.paragI}>Juventude do Futuro</Text>
        <Text style={styles.title}>Público-alvo:</Text>
        <Text style={styles.paragI}>Faixa etária de 6 a 14 anos</Text>
        <Text style={styles.title}>Descrição:</Text>
        <Text style={styles.paragI}>O Projeto Juventude do Futuroé voltado à prevenção ao uso/abuso de álcool e outras drogas entre crianças, jovens e famílias, no ambiente escolar e na comunidade, que contempla três programas federais: Jogo Elos, #Tamojunto e Famílias Fortes. Tais programas são realizados por meio de parceria entre o Projeto “Pesquisa e Prevenção” da Fundação Oswaldo Cruz (FIOCRUZ) e a Secretaria Nacional de Políticas sobre Drogas (SENAD).</Text>
        <Text style={styles.parag}>Contatos: (85) 3238 6442  / 3238 1891</Text>

        <View style={styles.boxImg}>
          <Image style={styles.img2} source={require('../images/elos.png')} />
        </View>
        <Text style={styles.title}>Nome do Programa Federal:</Text>
        <Text style={styles.paragI}>Jogo Elos – construindo coletivos</Text>
        <Text style={styles.title}>Público-alvo:</Text>
        <Text style={styles.paragI}>Crianças de 6 a 10 anos</Text>
        <Text style={styles.title}>Descrição:</Text>
        <Text style={styles.paragI}>Executado nas escolas de Ensino Fundamental I da rede pública municipal por professores que foram formados com a metodologia proposta. Utiliza-se de uma metodologia lúdica na qual os alunos, divididos em equipes, são convocados a seguir acordos de convivência decididos coletivamente, entre a turma e o professor. Inclui também reunião para os pais ou outros responsáveis dos alunos.</Text>
        <Text style={styles.parag}>Contatos: (85) 3238 6442  / 3238 1891</Text>

        <View style={styles.boxImg}>
          <Image style={styles.img2} source={require('../images/tamojunto.png')} />
        </View>
        <Text style={styles.title}>Nome do Programa Federal:</Text>
        <Text style={styles.paragI}>#Tamojunto</Text>
        <Text style={styles.title}>Público-alvo:</Text>
        <Text style={styles.paragI}>Adolescentes de 13 e 14 anos</Text>
        <Text style={styles.title}>Descrição:</Text>
        <Text style={styles.paragI}>Executado nas escolas de Ensino Fundamental II da rede pública municipal por professores que foram formados com a metodologia proposta. Ancora-se em 3 propostas: desenvolvimento das habilidades para a vida, elucidação do papel das crenças normativas e conhecimento e informação a respeito do tema. Enfatiza o caráter interativo, estimula a troca constante de experiências entre os educandos por meio de atividades lúdicas. Estruturado em 12 aulas semanais além de 03 oficinas de pais e responsáveis desenvolvidas no decorrer dessas aulas.</Text>
        <Text style={styles.paragI}>OBS: Recomendação dos parceiros federais (SENAD/FIOCRUZ) para suspensão em 2017, decorrente de avaliação realizada a nível nacional.</Text>
        <Text style={styles.parag}>Contatos: (85) 3238 6442  / 3238 1891</Text>

         <View style={styles.boxImg}>
          <Image style={styles.img} source={require('../images/famfortes.png')} />
        </View>
        <Text style={styles.title}>Nome do Programa Federal:</Text>
        <Text style={styles.paragI}>Famílias Fortes</Text>
        <Text style={styles.title}>Público-alvo:</Text>
        <Text style={styles.paragI}>Famílias de jovens entre 10 e 14 anos</Text>
        <Text style={styles.title}>Descrição:</Text>
        <Text style={styles.paragI}>Acontece semanalmente, num total de 7 sessões, com duração de 2 horas, sobre a regência de uma equipe de profissionais da assistência social, da educação ou da saúde. Durante os encontros as famílias são convidadas a refletir sobre seus valores, dinâmicas e metas. Voltado ao desenvolvimento da habilidade dos pais/família e na concordância sobre o estabelecimento de limites e regras, rotina de convivência diária entre os membros da família, criação de espaço para diálogo entre pais/responsáveis, fortalecimento dos laços familiares e principalmente, na reflexão sobre as consequências da quebra de regras previamente acordadas e sobre o modo de lidar com as transgressões, que são fatores estimulantes ao uso e abuso de substâncias lícitas e ilícitas.</Text>
        <Text style={styles.paragI}>OBS: O Projeto juventude do Futuro encontra-se suspenso diante da realização de pesquisas de avaliação.</Text>
        <Text style={styles.parag}>Contatos: (85) 3238 6442  / 3238 1891</Text>

        <View style={styles.boxImg}>
          <Image style={styles.img2} source={require('../images/p_familia.png')} />
        </View>
        <Text style={styles.title}>Nome do Projeto:</Text>
        <Text style={styles.paragI}>Prevenção em Família</Text>
        <Text style={styles.title}>Público-alvo:</Text>
        <Text style={styles.paragI}>famílias de crianças de 0 a 5 anos de idade em extrema pobreza infantil contempladas com o Programa Mais Infância Ceará</Text>
        <Text style={styles.title}>Descrição:</Text>
        <Text style={styles.paragI}>promover o desenvolvimento infantil e o fortalecimento de vínculos familiares, com ênfase na prevenção ao uso ou abuso de álcool e outras drogas, utilizando Oficinas de Atenção à Infância e à Família. A proposta é que ocorra a qualificação de profissionais da Saúde, Educação e Assistência Social que atuam com as famílias beneficiadas pelo Programa Mais Infância Ceará para que estes desenvolvam oficinas de prevenção junto ao público-alvo, sendo 10 encontros, com duração de uma hora cada um. As sessões acontecerão com o suporte de atividades de leitura e lúdicas, apresentação de músicas e vídeos, buscando direcionar às situações comuns do cotidiano familiar. Baseados nas situações abordadas, os facilitadores conduzirão a discussão com os participantes.</Text>
        <Text style={styles.paragI}>Parceria: Secretaria Especial de Políticas sobre Drogas e Programa Mais Infância Ceará</Text>
        <Text style={styles.parag}>Contatos: (85) 3238 6442  / 3238 1891</Text>

        <View style={styles.boxImg}>
          <Image style={styles.img2} source={require('../images/f_m_comunidade.png')} />
        </View>
        <Text style={styles.title}>Nome do Projeto:</Text>
        <Text style={styles.paragI}>Fortalecendo minha Comunidade</Text>
        <Text style={styles.title}>Público-alvo:</Text>
        <Text style={styles.paragI}>jovens em geral</Text>
        <Text style={styles.title}>Descrição:</Text>
        <Text style={styles.paragI}>Voltado a entidades comunitárias que desenvolvem atividades na perspectiva da promoção de cidadania e prevenção do uso de drogas. Apoia técnica e financeiramente os projetos de iniciativas comunitárias para redução dos fatores de risco e fortalecimento dos fatores de proteção relacionados ao uso de drogas.</Text>
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
    justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#f5f6fa',
  },
  boxImg: {
  
    alignItems: 'center',
    justifyContent: 'center',
    
    
  },
  img: {
  
    height:240,
    width:170,
    borderRadius:4,
    borderWidth: 1.5,
    borderColor: '#ddd',
  },
  img2: {
    height:150,
    width:165,
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
