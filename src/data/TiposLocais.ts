// Ficha de Termo
export type TipoTermo = {
  tipo: string;
  descricao?: string;
  nome: string;
}

export type TermoClasse = TipoTermo & {
  atributo: Array<number>;
}

// Ficha de Personagem
export type TipoFichaPersonagem = {
  carisma: number;
  constituicao: number;
  destreza: number;
  forca: number;
  sabedoria: number;
  inteligencia: number;
};