import React from 'react'
import './Campo.css'

/*
CAMPO:
1. O componente pode mudar de estado? Sim // Classe, herda (extends) de outra classe (ex. React.Component) "Campo é um componente?"
render tem que retornar o HTML da tela, função render não recebe parametro (é sempre vazia nos parenteses)
Para acessar o props é necessario adicionar o this

2. O que muda? state = {erro: ‘’} ou {erro: ‘Campo obrigatório’}

3.Qual o estado inicial? {erro: ‘’} // constructor
Super: acessa a classe "superior"

4.O que faz ele mudar? 
evento de change (digita no campo) // function onChange para verificar se eu devo ou não mostrar uma mensagem de erro
if (condição) mostra erro
- Email: obrigatório, tenha pelo menos 10 caracteres
- Senha: obrigatório, pelo menos 6 caracteres
evento de blur (sai do campo)

=> (arrow function)
target(alvo): exerce a mesma função que document.getElementById('id')
setState = altera o estado e chama a função render
trim(): remover espaços desnecessarios de uma string
pattern e regex *pesquisar* site: regex101 para testar as regex
*/

class Campo extends React.Component {
  constructor(props){
    super(props)
    this.state = {erro: ''}
  }

   valida = (evento) => {
     const input = evento.target
     if (this.props.required && input.value.trim() === '') {
      this.setState({erro: 'Campo obrigatório'}) //campo obrigatorio 'required'

     } else if (this.props.minLength && input.value.length < this.props.minLength){ //pelo menos 10 caracteres
      this.setState({erro: `Digite pelo menos ${this.props.minLength} caracteres`})
     
     } else if (this.props.pattern && !this.props.pattern.test(input.value)) {
       this.setState({erro: 'Valor inválido'})

     } else {
       this.setState({erro: ''})
     }
   }


  render(){
    return (
      <div>
        <input 
          id={this.props.id}
          className="campo"
          type={this.props.type}
          name={this.props.name}
          placeholder={this.props.placeholder}
          onChange={this.valida}
        />

        <p className="grupo__erro">{this.state.erro}</p>
      </div>
    )
  }
}



export default Campo

// {this.state.erro} pega a mensagem de erro
// value: busca o que foi inserido no campo dentro do state