import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [pokemon, setPokemon] = useState(null)
  console.log("render")

  fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    .then(response => response.json())
    .then(data => setPokemon(data))

  return (
    <>
      <h1>Pokedex</h1>
      <h3>{pokemon ? pokemon.name : "Cargando..."}</h3>
    </>
  )
}

export default App
