import { ModeloFormulario } from "./ModeloFormulario"

type PersonagemFormData = {
  forca: number,
  destreza: number,
  constituicao: number,
  inteligencia: number,
  sabedoria: number,
  carisma: number,
}

type PersonagemFormProps = PersonagemFormData & {
  atualizarCampos: (fields: Partial<PersonagemFormData>) => void
}

export function PersonagemForm({
  forca, destreza, constituicao, inteligencia, sabedoria, carisma, atualizarCampos
}: PersonagemFormProps) {
  return (
    <ModeloFormulario title="Atributos">
      <label>Força</label>
        <input
          autoFocus
          required
          min={3} max={18}
          type="number"
          value={forca}
          onChange={ e => atualizarCampos({ forca : parseInt(e.target.value)})}
          />
      <label>Destreza</label>
        <input 
          required
          min={3} max={18}
          type="number"
          value={destreza}
          onChange={ e => atualizarCampos({ destreza : parseInt(e.target.value)})}
        />
      <label>Constituição</label>
        <input 
          required
          min={3} max={18}
          type="number"
          value={constituicao}
          onChange={ e => atualizarCampos({ constituicao : parseInt(e.target.value)})}
        />
      <label>Inteligencia</label>
        <input 
          required
          min={3} max={18}
          type="number"
          value={inteligencia}
          onChange={ e => atualizarCampos({ inteligencia : parseInt(e.target.value)})}
        />
      <label>Sabedoria</label>
        <input 
          required
          min={3} max={18}
          type="number"
          value={sabedoria}
          onChange={ e => atualizarCampos({ sabedoria : parseInt(e.target.value)})}
        />
      <label>Carisma</label>
        <input 
          required
          min={3} max={18}
          type="number"
          value={carisma}
          onChange={ e => atualizarCampos({ carisma : parseInt(e.target.value)})}
        />
        
    </ModeloFormulario>
  )
}