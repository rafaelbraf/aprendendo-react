import React, {Component} from 'react';
import {generateUID} from '../utils/helpers';

class FormContato extends Component {

    state = {
        nome: '',
        instagram: ''
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {nome, instagram} = this.state
        this.props.onCreateContato({
            nome, instagram, id: generateUID()
        })
        this.setState({
            nome: "",
            instagram: ""
        })
    }

    render() {
        const {nome, instagram} = this.state
        return(
            <div>

                <h1>Novo Contato</h1>

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input name="nome" value={nome} onChange={this.handleChange} placeholder="Nome"></input>
                        <input name="instagram" value={instagram} onChange={this.handleChange} placeholder="Instagram"></input>
                        <button>Adicionar</button>
                    </div>
                </form>

            </div>
        );
    }
}

export default FormContato