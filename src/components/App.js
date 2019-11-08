import React, {Component} from 'react';
import ListaContatos from './ListaContatos';

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

  render() {
    return(
      <div>

        <h1>Contatos</h1>
        <ListaContatos contatos={this.state.contatos}/>

      </div>
    );
  }

}

export default App;
