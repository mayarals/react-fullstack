import React from 'react'
import Formulario from '../../componentes/Formulario/Formulario'
import Link from '../../componentes/Link/Link'
import './Login.css'

function Login() {
  return (
    <main className="login">
      <h1>Login</h1>
      <p>Entre com seu email e senha.</p>

      <Formulario>
        <Formulario.Legenda htmlFor="email">Email:</Formulario.Legenda>
        <Formulario.Campo id="email" type="email" name="email" placeholder="Email"  />
        
        <Formulario.Legenda htmlFor="senha">Senha:</Formulario.Legenda>
        <Formulario.Campo id="senha" type="password" name="senha" placeholder="Senha"  />
        
        <Formulario.Botao>Enviar</Formulario.Botao>
      </Formulario>

      <Link href="/conta">Criar uma conta</Link>
    </main>
  );
}

export default Login