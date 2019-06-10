import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'

// class-based components: state and lifecycle
class PokemonPage extends React.Component {
  state = {
    pokemon: [],
    searchInput: ""
  }

  addPokemon = (newPokemon) => {
    // all pokemon state: this.state.pokemon
    // the pokemon to add: the state of the form
    this.setState({
      pokemon: [...this.state.pokemon, newPokemon]
    })
  }

  updateSearchInput = (e) => {
    this.setState({
      searchInput: e.target.value
    })
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
      .then(resp => resp.json())
      .then(pokemonArr => {
        this.setState({
          pokemon: pokemonArr
        })
      })
  }

  render() {
    const filteredPokemon = this.state.pokemon.filter((pokemon) => {
      return pokemon.name
              .toLowerCase()
              .indexOf(this.state.searchInput.toLowerCase()) !== -1;
    })

    console.log('PokemonIndex state', this.state.pokemon.length);
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <Search onSearchChange={this.updateSearchInput} showNoResults={false} />
        <br />
        <PokemonCollection pokemon={filteredPokemon} />
      </div>
    )
  }
}

export default PokemonPage
