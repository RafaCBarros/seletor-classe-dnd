import {TipoTermo, TermoClasse} from './TiposLocais'

// classes
const Barbarian: TermoClasse = {
  tipo: 'classe',
  nome: "Barbaro",
  descricao: `uma classe de combatentes físicos movido por fúria. Normalmente tomando a frente para
  absorver dano e igualmente destribuí-lo com ataques ferozes.`,
  atributo: [16, 10, 16, -1, -1, -1]
};
const Bard: TermoClasse = {
  tipo: 'classe',
  nome: "Bardo",
  descricao: `conhecida por seu papel como perito em encontros sociais e magias de apoio`,
  atributo: [-1, 10, -1, 10, -1, 16]
};
const Cleric: TermoClasse = {
  tipo: 'classe',
  nome: "Clerigo",
  descricao: `fortemente ligada a religião, e a única classe com esse vínculo. Capaz de poderosos feitos
  mágicos, seu poder é concedido por um deus`,
  atributo: [10, -1, 14, -1, 16, -1]
};
const Druid: TermoClasse = {
  tipo: 'classe',
  nome: "Druida",
  descricao: `conectada à natureza, uma criatura sábia próxima aos animais e à flora, capaz de magia
  graças às forças primordiais ao redor.`,
  atributo: [-1, 10, -1, -1, 16, -1]
};
const Monk: TermoClasse = {
  tipo: 'classe',
  nome: "Monge",
  descricao: `formada de combatentes altamente treinados, eles também tem uma forte mentalidade que alimentam seu estilo
  de luta. Raramente usando armas, especialistas em artes marciais.`,
  atributo: [-1, 16, 12, -1, 14, -1]
};
const Paladin: TermoClasse = {
  tipo: 'classe',
  nome: "Paladino",
  descricao: `movida por um forte juramento, seu poder pode vir do divino ou simplesmente uma vontade
  de chegar no seu objetivo tão poderosa que concede poderes mágicos a esse combatente marcial.`,
  atributo: [12, -1, 10, -1, -1, 14]
};
const Ranger: TermoClasse = {
  tipo: 'classe',
  nome: "Guardiao",
  descricao: `formada de rastreadores, letais caçadores, guardiões são associados à natureza, porém não apenas.
  Um Guardião pode ainda ser vinculado ao mundo urbano, apenas demonstrado sua aptidão de navegar
  e caçar suas presas no território`,
  atributo: [-1, 16, -1, -1, 14, -1]
};
const Rogue: TermoClasse = {
  tipo: 'classe',
  nome: "Ladino",
  descricao: `formada de furtivos e ágeis criminosos, podem ser letais assassinos ou peritos exploradores.`,
  atributo: [-1, 16, -1, 10, -1, 10]
};
const Sorcerer: TermoClasse = {
  tipo: 'classe',
  nome: "Feiticeiro",
  descricao: `um conjurador que utiliza Carisma como atributo principal.
  São sociáveis, mas mais resistentes que bardos, uma outra classe conjuradora que utiliza carisma.
  \nSeus poderes oriundam de uma descendência mágica, ou contato de antepassados com fontes poderosas de magia,
  tais como linhagem dracônica, e contato com magia do Caos.`,
  atributo: [-1, -1, 12, -1, -1, 16]
};
const Warlock: TermoClasse = {
  tipo: 'classe',
  nome: "Bruxo",
  descricao: `conhecida por seu poder de origem perigosa, adquirida por pactos com diversas criaturas. Esses
  pactos influenciam a manifestação de seus poderes`,
  atributo: [-1, -1, 14, -1, -1, 14]
};
const Warrior: TermoClasse = {
  tipo: 'classe',
  nome: "Guerreiro",
  descricao: `conhecida por ser muito simples, porém isso lhe permite uma versatilidade de interpretação. Mestres
  de combate marcial, Guerreiros são mortais inimigos quando utilizando as armas corretas`,
  atributo: [14, 10, 12, 12, -1, -1]
};
const Wizard: TermoClasse = {
  tipo: 'classe',
  nome: "Mago",
  descricao: `formada de estudiosos que buscam conhecimento para manipular o tecido da realidade com magia.`,
  atributo: [-1, -1, 10, 16, -1, -1]
};
const Farmer: TermoClasse = {
  tipo: 'classe',
  nome: "Fazendeiro",
  descricao: `na verdade, um termo para indicar que os atributos não irão produzir um personagem suficientemente
  capaz de aventura. Converse de fazer um novo personagem com seu mestre.`,
  atributo: [0, 0, 0, 0, 0, 0]
}

export let classes: Array<TermoClasse> = [
  Sorcerer, Warlock, Paladin, Bard,
  Barbarian, Cleric, Warrior, Monk,
  Ranger, Rogue, Druid, Wizard, Farmer
]

// atributos
const Forca: TipoTermo = {
  tipo: 'atributo',
  nome: 'Forca'
}
const Destreza: TipoTermo = {
  tipo: 'atributo',
  nome: 'Destreza'
}
const Constituicao: TipoTermo = {
  tipo: 'atributo',
  nome: 'Constituicao'
}
const Inteligencia: TipoTermo = {
  tipo: 'atributo',
  nome: 'Inteligencia'
}
const Sabedoria: TipoTermo = {
  tipo: 'atributo',
  nome: 'Sabedoria'
}
const Carisma: TipoTermo = {
  tipo: 'atributo',
  nome: 'Carisma'
}


export let atributos: Array<TipoTermo> = [
  Forca, Destreza, Constituicao, Inteligencia, Sabedoria, Carisma
]