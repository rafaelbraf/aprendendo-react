import React, {Component} from 'react';
import ListaContatos from './ListaContatos';
import FormContato from './FormContato';

class App extends Component {
  
  state = {
    contatos: [
      {
          "id" : 0,
          "nome": "Lukas",
          "instagram": "@lukas"
      },
      {
          "id" : 1,
          "nome": "Teo",
          "instagram": "@teo"
      },
      {
          "id" : 2,
          "nome": "Carlos",
          "instagram": "@carlos"
      }
    ]
  }

  removerContato = (contato) => {
    this.setState((currentState) => ({
      contatos: currentState.contatos.filter((c) => {
        return c.id !== contato.id
      })
    }))
  }

  render() {
    return(
      <div>

        <h1>Contatos</h1>
        <FormContato />
        <ListaContatos 
          contatos={this.state.contatos}
          onDeleteContato={this.removerContato}/>

      </div>
    );
  }

}

export default App;