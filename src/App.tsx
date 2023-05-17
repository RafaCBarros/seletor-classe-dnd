import React, { useState, FormEvent } from 'react';
import './App.css';
import { PersonagemForm } from './components/FormsPersonagem';
import { TipoTermo } from './data/TiposLocais';
import { descreverTermo } from './utils/descritores';
import { classes as db_classes } from './data/Termos'
import { listarRecomendacao } from './utils/verificadores';

type FormData = {
  forca: number,
  destreza: number,
  constituicao: number,
  inteligencia: number,
  sabedoria: number,
  carisma: number,
}

const INITIAL_DATA: FormData = {
  forca: 3,
  destreza: 3,
  constituicao: 3,
  inteligencia: 3,
  sabedoria: 3,
  carisma: 3,
}

function App() {
  // Estado inicial
  const [data, setData] = useState(INITIAL_DATA)

  // Atualização de campo quando valores mudam
  function atualizarCampos(campos: Partial<FormData>){
    setData( prev => {
      return {...prev, ...campos}
    })
  };
  
  // Dados do formulário gravados
  const camposAtributos = <PersonagemForm {...data} atualizarCampos={atualizarCampos} />;
  
  let listaNomesRecomendados: String[] = []
  let listaClassesRecomendadas: Array<TipoTermo> = []
  
  // Valores para renderização dinâmica da tela
  const [descricaoClasse, setDescricao] = useState(`Teste o seletor de classes`)
  const [nomeClasseRecomendada, setClasse] = useState('')
  const [nomeClassesExtras, setClassesExtra] = useState('')

  function selecionarClasse(e: FormEvent) {
    e.preventDefault()
    listaNomesRecomendados = listarRecomendacao(data) // resultado NOME  das classes 
    
    for (let i = 0; i < listaNomesRecomendados.length; i++) {
      for (let j = 0; j < db_classes.length; j++) {
        if (listaNomesRecomendados[i] === db_classes[j].nome) {
          listaClassesRecomendadas.push(db_classes[j])
        }
      }
    }
    
    // classeSelecionada = classes[listarRecomendaca(data)];
    
    setClasse(listaClassesRecomendadas[0].nome)
    setDescricao(descreverTermo(listaClassesRecomendadas[0]));
    if(listaClassesRecomendadas[1]){
      setClassesExtra(`Recomendações adicionais: ` + listaNomesRecomendados.slice(1).join(', ')) //
    } else {
      setClassesExtra('') //
    }
  }
  
  // renderização da tela
  return (
    <div className="App">
      <header style={{
        maxHeight: "150px",
        minHeight: "100px"
      }} className="App-header">
        <h1 style={{marginBottom: 0}}>
          Seletor de Classes*
        </h1>
        <span style={{fontSize: '10px'}}>*Classes de DnD 5e</span>
        <p style={{fontSize: '18px', margin: '1rem'}}>
          Descubra a classe ideal para o seu personagem, baseado nos seus atributos finais.
          <br/>
          <span style={{fontSize: '14px'}}>Informe valores de 3 a 18, considerando já bônus e penalidades de raça e talento</span>
        </p>
      </header>
      <div style={{display: "grid", gridTemplateColumns: "2fr 3fr", margin: "0 5rem"}}>
        <div style={{
          position: "relative",
          border: "2px solid white",
          padding: "2rem",
          borderRadius: ".5rem",
          fontFamily: "Arial",
          margin: "1rem 1rem",
          
        }}>
          <form
            onSubmit={selecionarClasse}
          >
            {camposAtributos}
              <button style={{
                minHeight: '70px',
                aspectRatio: '4/3',
                position: 'relative',
                margin: '.5rem',
                fontSize: '12px',
              }}
            > DESCOBRIR </button>
              <button style={{
                minHeight: '70px',
                aspectRatio: '4/3',
                position: 'relative',
                margin: '.5rem',
                fontSize: '12px',
              }}
              type="button"
              onClick={() => setData(INITIAL_DATA)}
            > LIMPAR </button>
          </form>
        </div>
        <div style={{ textAlign: "left", textIndent: "5rem", color: 'lightblue', margin: '3rem 0'}}>

          <h2>{nomeClasseRecomendada}</h2>
          <p >
            {descricaoClasse}
          </p>
          <p>
            {nomeClassesExtras}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
