import React, {Component} from 'react'
import {cadastraPostit} from '../../redux/actions'
import {connect} from  'react-redux'
import './Postit.css'

class Postit extends Component {
    constructor(props) {
        super(props)
        
    }

    cadastraOuAlteraPostit = (evento) => {
        evento.preventDefault()
        const form = evento.target

        const dados = {
            id: `27f0b152-50b5-460d-a32b-22210f52b4${Math.random(100)}`,
            titulo: form.titulo.value,
            texto:  form.texto.value
        }
        this.props.cadastraPostit(dados)

        form.reset()
    }

    render() {
        const cadastrando = !this.props.id
        
        return (
            <form className="postit" onSubmit = {this.cadastraOuAlteraPostit}>
                <input className="postit__titulo"
                    type="texto"
                    name="titulo"
                    placeholder="Titulo"
                    autoComplete = "off"
                    defaultValue={this.props.titulo}>
                </input>
                <textarea className="postit__texto"
                    name="texto"
                    placeholder="Digite um texto..."
                    rows={5}
                    autoComplete = "off"
                    defaultValue={this.props.texto} >
                </textarea>

                <button className="postit__botao-concluir">
                    Concluido
            </button>
            </form>
        )
    }
}
export default connect(
    null,
    {cadastraPostit}
)(Postit)