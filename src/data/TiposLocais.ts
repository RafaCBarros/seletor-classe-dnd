// Ficha de Termo
export interface TipoTermo {
  tipo: string;
  descricao?: string;
  nome: string;
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