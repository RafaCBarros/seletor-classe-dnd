import { TipoTermo } from '../data/TiposLocais'

function descrever(termo: TipoTermo) {
  if(termo.tipo === 'classe') {
    return `A classe ${termo.nome} é ${termo.descricao}`
  } else if (termo.tipo === 'atributo') {
    return `O atributo ${termo.nome} é usado para ${termo.descricao}`
  } else return `Descrição não encontrada`
}

export { descrever }