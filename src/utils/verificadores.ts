import {TipoFichaPersonagem as FichaPersonagem} from '../data/TiposLocais'

// Classifica valor entre Baixo-Alto
/* function classificarValor(atributo: number): 0 | 1 | 2 {
  if(atributo < 10) return 0; //Baixo
  else if (atributo >= 16) return 2; //Alto
  else return 1; //Médio-Alto
}
*/
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
// Verifica classe com base no valor
function verificarClasse(personagem: FichaPersonagem):
0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 {
  
  if(aventureiroViavel(personagem)){
    if (personagem.inteligencia >= 16)
      return 11; // Mago
  
    if (personagem.sabedoria >= 16){
      if (personagem.constituicao >= 14)
        return 5; // Clerigo
      return 10; // Druída
    }

    if(personagem.carisma >= 16) {
      if(personagem.constituicao >= 14){
        return 1; // Bruxo
      }
      else if(personagem.constituicao > 10)
        return 0; // Feiticeiro
      return 3; // Bardo
    }
    
    if(personagem.forca >= 14) { // Guerreiro, Barbaro, Paladino
      if(personagem.constituicao >= 16)
        return 4; // Barbaro
      if(personagem.carisma >= 14) 
        return 2; // Paladino
      if(personagem.destreza >= 10 || personagem.constituicao >= 10)
        return 6; // Guerreiro
    }

    if(personagem.destreza >= 14) { //Guardião, Monge, Ladino
      if (personagem.sabedoria >= 14) {
        if (personagem.constituicao >= 12)
          return 7; // Monge
        return 8; // Guardião
      }
      return 9; // Ladino
    }
  }
  
  return 12; // Fazendeiro
}

export { verificarClasse }