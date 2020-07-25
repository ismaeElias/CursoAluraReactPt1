import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import Tabela from './Tabela';
import Form from './formulario';
import Header from './header'

class App extends Component {

  state = {
    autores: [
      {
        nome: 'Fabio',
        livro: 'DevOps',
        preco: '1000'
      },
      {
        nome: 'Ismael',
        livro: 'React',
        preco: '500'
      },
      {
        nome: 'Graciela',
        livro: 'Python',
        preco: '2000'
      }
    ]
  };

  removerAutor = index => {

    const { autores } = this.state;

    this.setState(
      {
        autores: autores.filter((autor, posAtual) => {
          return posAtual !== index;
        }),
      }
    );
  }

  escutadorSubmit = autor => {
    this.setState({ autores: [...this.state.autores, autor] })
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container mb-10">
          <Tabela autores={this.state.autores} removerAutor={this.removerAutor} />
          <Form escutadorSubmit={this.escutadorSubmit} />
        </div>
      </Fragment>
    );
  }

}

export default App;
