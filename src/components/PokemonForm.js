import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    const pokemonObj = {
      // "id": 2,
      "name": this.state.name,
      "stats": [
        {
          "value": this.state.hp,
          "name": "hp"
        }
      ],
      "sprites": {
        "front": this.state.frontUrl,
        "back": this.state.backUrl
      }
    }

    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(pokemonObj)
    }).then(resp => resp.json())
      .then(pokemonSingular => {
        this.props.addPokemon(pokemonSingular)
      })


  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid onChange={this.handleChange} label="Name" placeholder="Name" name="name" />
            <Form.Input fluid onChange={this.handleChange} label="hp" placeholder="hp" name="hp" />
            <Form.Input fluid onChange={this.handleChange} label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input fluid onChange={this.handleChange} label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
