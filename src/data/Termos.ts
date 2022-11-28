import {TipoTermo} from './TiposLocais'

// classes
const Barbarian: TipoTermo = {
  tipo: 'classe',
  nome: "Barbaro",
};
const Bard: TipoTermo = {
  tipo: 'classe',
  nome: "Bardo",
};
const Cleric: TipoTermo = {
  tipo: 'classe',
  nome: "Clerigo",
};
const Druid: TipoTermo = {
  tipo: 'classe',
  nome: "Druida",
};
const Monk: TipoTermo = {
  tipo: 'classe',
  nome: "Monge",
};
const Paladin: TipoTermo = {
  tipo: 'classe',
  nome: "Paladino",
};
const Ranger: TipoTermo = {
  tipo: 'classe',
  nome: "Guardiao",
};
const Rogue: TipoTermo = {
  tipo: 'classe',
  nome: "Ladino",
};
const Sorcerer: TipoTermo = {
  tipo: 'classe',
  nome: "Feiticeiro"
};
const Warlock: TipoTermo = {
  tipo: 'classe',
  nome: "Bruxo",
};
const Warrior: TipoTermo = {
  tipo: 'classe',
  nome: "Guerreiro",
};
const Wizard: TipoTermo = {
  tipo: 'classe',
  nome: "Mago",
};
const Farmer: TipoTermo = {
  tipo: 'classe',
  nome: "Fazendeiro",
}

export let classes: Array<TipoTermo> = [
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