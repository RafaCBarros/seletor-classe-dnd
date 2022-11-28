import {TipoFichaPersonagem as FichaPersonagem} from '../data/TiposLocais'

// Classifica valor entre Baixo-Alto
function classificarValor(atributo: number): 0 | 1 | 2 {
  if(atributo < 10) return 0; //Baixo
  else if (atributo >= 16) return 2; //Alto
  else return 1; //Médio-Alto
}

// Verifica classe com base no valor
function verificarClasse(personagem: FichaPersonagem):
"Feitceiro" | "Bruxo" | "Paladino" | "Bardo" | "Barbaro" | "Clerigo" | "Guerreiro" | "Monge" | "Guardiao" | "Ladino" | "Druida" | "Mago" | "Fazendeiro" | undefined{
  if(classificarValor(personagem.carisma) === 2) {
    if(classificarValor(personagem.constituicao) === 1)
      return "Feitceiro";
    else if(classificarValor(personagem.constituicao) === 2)
      return "Bruxo";
  } else if(classificarValor(personagem.carisma) === 1) {
    if(classificarValor(personagem.constituicao) >= 1)
      if(classificarValor(personagem.forca) === 2)
        return "Paladino";
  } else if(classificarValor(personagem.destreza) === 1) {
    if(classificarValor(personagem.carisma) === 2)
      return "Bardo";
    else if(classificarValor(personagem.forca) >= 1) {
      if(classificarValor(personagem.constituicao) === 2)
        return "Barbaro";
      else if (classificarValor(personagem.constituicao) === 1) {
        if (classificarValor(personagem.sabedoria) === 2)
          return "Clerigo";
        else if (classificarValor(personagem.sabedoria) === 0)
          return "Guerreiro";
      }
    }
  } else if (classificarValor(personagem.destreza) === 2) {
    if (classificarValor(personagem.sabedoria) >= 1) {
      if(classificarValor(personagem.constituicao) >= 1)
        return "Monge";
      else return "Guardiao";
    }
    else if (classificarValor(personagem.carisma) === 1)
      return "Ladino";
  } else if (classificarValor(personagem.sabedoria) === 2)
    return "Druida";
  else if (classificarValor(personagem.inteligencia) === 2)
    return "Mago";
  else return "Fazendeiro";
}

export { verificarClasse }


/*
carisma == 2 // Bruxo, Feiticeiro, Bardo
    constituicao == 1: Feitceiro
    constituicao == 2: Bruxo
  carisma == 1 // Paladino, Ladino
    constituicao >= 1 // Paladino
      força == 2: Paladino
  destreza == 1 // Barbaro, Bardo, Guerreiro
    carisma == 2: Bardo
    força >= 1: Barbaro, Guerreiro, Clerigo
      constituicao == 2: Barbaro
      constituicao == 1 // Guerreiro, Clerigo
        sabedoria == 2: Clerigo
        sabedoria <= 1: Guerreiro
  destreza == 2 // Ladino, Guardiao, Monge
    sabedoria >= 1 // Guardiao, Monge
      constituicao >= 1: Monge
      constituicao < 1: Guardiao
    carisma == 1: Ladino
  sabedoria == 2: Druida
  inteligencia == 2: Mago
  Fazendeiro

*/