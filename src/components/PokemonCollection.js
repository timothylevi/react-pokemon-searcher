import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    const pokemonCards = this.props.pokemon.map(pokemon => {
      const hp = pokemon.stats
                    .find(stat => stat.name === "hp")
                    .value
      // pokemon.stats[5].value

      return <PokemonCard
        key={pokemon.id}
        frontImg={pokemon.sprites.front}
        backImg={pokemon.sprites.back}
        name={pokemon.name}
        hp={hp} />
    })

    return (
      <Card.Group itemsPerRow={6}>
        {pokemonCards}
      </Card.Group>
    )
  }
}

export default PokemonCollection
