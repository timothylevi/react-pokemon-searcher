import React from 'react'
import PokemonPage from './components/PokemonIndex'
import './App.css'

// Functional component: no state, no lifecycle
const App = () => (
  <div className="App">
    <PokemonPage />
  </div>
)

export default App
