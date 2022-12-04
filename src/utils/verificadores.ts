// SEPARAR MECANISMO

import {TipoFichaPersonagem as FichaPersonagem, TermoClasse} from '../data/TiposLocais'
import {classes as listaClasse} from '../data/Termos'

// Classifica valor entre Baixo-Alto
/* 
*/
function classificarValor(valor: number, requisito: number): 0 | 1 | 2 {
  if (valor >= requisito) return 2; //Alto
  else if(valor === -1) return 1; //Baixo
  else return 0; //Médio-Alto
}

// Viabilidade de aventureiro
function aventureiroViavel(personagem: FichaPersonagem) {
  const totalAtributo = personagem.carisma 
  +personagem.constituicao 
  +personagem.destreza 
  +personagem.inteligencia 
  +personagem.forca 
  +personagem.sabedoria

  if (totalAtributo > 65) return true
  else return false;
}


/*

*/
function verificarAtributos (personagem: FichaPersonagem, classe: TermoClasse) : number {
  let calculo =  classificarValor(personagem.forca, classe.atributo[0])
  *classificarValor(personagem.destreza, classe.atributo[1])
  *classificarValor(personagem.constituicao, classe.atributo[2])
  *classificarValor(personagem.inteligencia , classe.atributo[3])
  *classificarValor(personagem.sabedoria, classe.atributo[4])
  *classificarValor(personagem.carisma , classe.atributo[5])

  return calculo
}

// Verifica classe com base no valor
function listarRecomendacao(personagem: FichaPersonagem) {
  let recomendacoes: String[] = []
  if(aventureiroViavel(personagem)){
    for (let i = 0; i < listaClasse.length-1; i++) {
      let verificador = verificarAtributos(personagem, listaClasse[i])
      if (verificador === 64) {
        recomendacoes.push(listaClasse[i].nome)
      }
    }
  } else {
    recomendacoes = [listaClasse[listaClasse.length-1].nome]
  }
  return recomendacoes
}

export { listarRecomendacao }