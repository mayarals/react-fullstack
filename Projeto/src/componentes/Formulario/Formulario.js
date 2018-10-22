import React from 'react'
import Legenda from './Legenda/Legenda'
import Campo from './Campo/Campo';
import Botao from './Botao/Botao'

function Formulario(props) {
  return (
    <form>
      {props.children}
    </form>
  )
}

Formulario.Legenda = Legenda
Formulario.Campo = Campo
Formulario.Botao = Botao

export default Formulario