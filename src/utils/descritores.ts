import { TipoTermo } from '../data/TiposLocais'

function descreverTermo(termo: TipoTermo) {
  if(termo.tipo === 'classe' && termo.descricao !== undefined) {
    return `A classe ${termo.nome} é ${termo.descricao}`
  } else if (termo.tipo === 'atributo' && termo.descricao !== undefined) {
    return `O atributo ${termo.nome} é usado para ${termo.descricao}`
  } else return `Descrição não encontrada.`
}

export { descreverTermo }