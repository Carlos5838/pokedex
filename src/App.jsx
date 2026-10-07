import { useState, useEffect } from 'react'
import { PokemonCard } from './components/PokemonCard'
import './App.css'

function App() {
  const [pokemon, setPokemon] = useState(null)
  
  useEffect(() => {
    console.log("render")
    console.log("Efecto ejecutado")
    fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    .then(response => response.json())
    .then(data => setPokemon(data))
  }, [])
  return (
    <>
      <h1>Pokedex</h1>
      {/* <h3>{pokemon ? pokemon.name : "Cargando..."}</h3> */}
      {pokemon ? <PokemonCard pokemon={pokemon} /> : "Cargando..."}
    </>
  )
}

export default App
